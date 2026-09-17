import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/icons";
import { navigation } from "@/data/navigation";
import { programs } from "@/data/programs";
import { siteConfig } from "@/data/site";

const socials = [
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "Twitter", href: siteConfig.social.twitter, Icon: TwitterIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
];

export function Footer() {
  const quickLinks = navigation.filter((item) =>
    ["/about", "/admissions", "/student-life", "/events", "/gallery", "/contact"].includes(
      item.href,
    ),
  );

  return (
    <footer className="bg-emerald-950 text-emerald-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-emerald-200">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-emerald-200 transition-colors hover:bg-gold-500 hover:text-emerald-950"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-emerald-200 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase">
              Our Courses
            </h3>
            <ul className="mt-5 space-y-3">
              {programs.map((program) => (
                <li key={program.slug}>
                  <Link
                    href={`/courses/${program.slug}`}
                    className="text-sm text-emerald-200 transition-colors hover:text-gold-300"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-emerald-200">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-300"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0 text-gold-400" />
                  {siteConfig.contact.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-300"
                >
                  <MailIcon className="h-5 w-5 shrink-0 text-gold-400" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-emerald-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Sample website for
            demonstration.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold-300">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}