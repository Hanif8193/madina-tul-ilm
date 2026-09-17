"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import {
  ChevronDownIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const coursesChildren = navigation.find(
    (item) => item.href === "/courses",
  )?.children;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-emerald-900 text-sm text-emerald-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
              className="hidden items-center gap-2 transition-colors hover:text-white sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4 text-gold-400" />
              {siteConfig.contact.phoneLabel}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden items-center gap-2 transition-colors hover:text-white md:inline-flex"
            >
              <MailIcon className="h-4 w-4 text-gold-400" />
              {siteConfig.contact.email}
            </a>
            <span className="text-xs text-emerald-200 sm:text-sm">
              Admissions open for 2026-27
            </span>
          </div>
          <Link
            href="/admissions"
            className="text-xs font-semibold text-gold-300 transition-colors hover:text-gold-200 sm:text-sm"
          >
            Apply Now →
          </Link>
        </div>
      </div>

      <div className="bg-cream-100/90 border-b border-cream-300 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.children) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 py-2 text-sm font-semibold transition-colors",
                        active ? "text-emerald-900" : "text-ink-700 hover:text-emerald-900",
                      )}
                    >
                      {item.label}
                      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-1/2 z-50 w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-cream-300 bg-white p-2 shadow-xl shadow-emerald-950/10">
                        {coursesChildren?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-900",
                              isActive(pathname, child.href)
                                ? "bg-emerald-50 text-emerald-900"
                                : "text-ink-700",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "py-2 text-sm font-semibold transition-colors",
                    active ? "text-emerald-900" : "text-ink-700 hover:text-emerald-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/admissions" size="sm">
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cream-400 text-emerald-900 transition-colors hover:bg-emerald-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen ? (
          <nav
            className="border-t border-cream-300 bg-white lg:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
              {navigation.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setCoursesOpen((open) => !open)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                          isActive(pathname, item.href)
                            ? "bg-emerald-50 text-emerald-900"
                            : "text-ink-700 hover:bg-emerald-50",
                        )}
                        aria-expanded={coursesOpen}
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            coursesOpen ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      {coursesOpen ? (
                        <div className="mt-1 space-y-1 pl-4">
                          {coursesChildren?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:bg-emerald-50 hover:text-emerald-900",
                                isActive(pathname, child.href) && "text-emerald-900",
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                      isActive(pathname, item.href)
                        ? "bg-emerald-50 text-emerald-900"
                        : "text-ink-700 hover:bg-emerald-50",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button
                  href="/admissions"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}