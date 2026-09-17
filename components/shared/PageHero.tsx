import Link from "next/link";
import { ChevronRightIcon } from "@/components/ui/icons";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-emerald-900">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-600 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-700 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-emerald-200">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="text-gold-300">{breadcrumb}</span>
        </nav>
        <h1 className="font-serif text-4xl font-bold text-cream-50 sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-emerald-100">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}