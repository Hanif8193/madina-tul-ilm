import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhatsAppForm from "@/components/contact/WhatsAppForm";
import { CONTACT_INFO } from "@/lib/data";
import { sectionPadding, wrap } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Madina-Tul-Ilm Islamic College — message us on WhatsApp, visit us in Bahadurabad, Karachi, or follow us on Facebook and Instagram.",
};

const CONTACT_CARDS = [
  {
    title: "WhatsApp",
    body: CONTACT_INFO.whatsappLabel,
    detail: "Fastest way to reach the admissions team.",
    href: CONTACT_INFO.whatsappUrl,
    external: true,
  },
  {
    title: "Location",
    body: CONTACT_INFO.location,
    detail: CONTACT_INFO.address,
    href: undefined as string | undefined,
    external: false,
  },
  {
    title: "Follow Us",
    body: "Facebook & Instagram",
    detail: "Updates on classes, mehfils and events.",
    href: CONTACT_INFO.facebookUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a question about programs, timings or admissions? We would love to hear from you."
      />

      <section className={sectionPadding} aria-label="Contact details and message form">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
          <div className="flex flex-col gap-6">
            {CONTACT_CARDS.map((card) => {
              const content = (
                <>
                  <h2 className="font-display text-[20px] font-semibold">{card.title}</h2>
                  <p className="mt-1 text-[16px] font-bold text-green">{card.body}</p>
                  {card.detail ? (
                    <p className="mt-1 text-[14.5px] text-muted">{card.detail}</p>
                  ) : null}
                </>
              );
              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="block rounded-md border border-[var(--line)] bg-beige/60 p-7 transition-colors hover:border-green md:p-8"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={card.title}
                  className="rounded-md border border-[var(--line)] bg-beige/60 p-7 md:p-8"
                >
                  {content}
                </div>
              );
            })}

            <a
              href={CONTACT_INFO.instagramUrl}
              className="block text-[14.5px] font-bold text-green underline decoration-gold underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit us on Instagram
            </a>
          </div>

          <WhatsAppForm />
        </div>
      </section>
    </>
  );
}