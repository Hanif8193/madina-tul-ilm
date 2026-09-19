import Image from "next/image";
import Link from "next/link";
import { BRAND, CONTACT_INFO, PROGRAM_CATEGORIES } from "@/lib/data";
import logoImg from "../../public/Logo.png";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-ivory/80 pt-20 pb-8">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="Madina-Tul-Ilm Islamic College — Home" className="inline-block">
              <Image
                src={logoImg}
                alt="Madina-Tul-Ilm Logo"
                className="h-10 w-auto md:h-12"
              />
            </Link>
            <p className="mt-[18px] max-w-[34ch] text-[14.5px] text-ivory/60">
              A women-focused Islamic educational institution nurturing knowledge, understanding and tarbiyah since 2016.
            </p>
          </div>

          <div>
            <h5 className="mb-[18px] text-[13px] font-bold uppercase tracking-[0.05em] text-ivory/50">
              Navigate
            </h5>
            <ul className="flex list-none flex-col gap-3 p-0 m-0">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14.5px] text-ivory/85 transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-[18px] text-[13px] font-bold uppercase tracking-[0.05em] text-ivory/50">
              Programs
            </h5>
            <ul className="flex list-none flex-col gap-3 p-0 m-0">
              {PROGRAM_CATEGORIES.map((cat) => (
                <li key={cat.title}>
                  <Link href="/courses" className="text-[14.5px] text-ivory/85 transition-colors hover:text-gold-light">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-[18px] text-[13px] font-bold uppercase tracking-[0.05em] text-ivory/50">
              Contact
            </h5>
            <ul className="flex list-none flex-col gap-3 p-0 m-0">
              <li className="text-[14.5px] text-ivory/75">{CONTACT_INFO.address}</li>
              <li>
                <a href={CONTACT_INFO.whatsappUrl} className="text-[14.5px] text-ivory/85 transition-colors hover:text-gold-light">
                  {CONTACT_INFO.whatsappLabel}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.facebookUrl} className="text-[14.5px] text-ivory/85 transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.instagramUrl} className="text-[14.5px] text-ivory/85 transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-ivory/14 pt-6">
          <span className="text-[13px] text-ivory/50">
            © {year} {BRAND.name} {BRAND.subtitle}. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href={CONTACT_INFO.facebookUrl} aria-label="Facebook" className="text-[13px] text-ivory/75 transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={CONTACT_INFO.instagramUrl} aria-label="Instagram" className="text-[13px] text-ivory/75 transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={CONTACT_INFO.whatsappUrl} aria-label="WhatsApp" className="text-[13px] text-ivory/75 transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}