import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Madina Tul Ilm Islamic College. Our admissions and welfare teams are here to help with enquiries, tours and applications.",
};

const contactDetails = [
  {
    Icon: MapPinIcon,
    label: "Address",
    value: siteConfig.contact.address,
  },
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: siteConfig.contact.phoneLabel,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    Icon: ClockIcon,
    label: "Office Hours",
    value: siteConfig.contact.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Get in Touch"
        subtitle="We are here to help. Reach out to our admissions, welfare or administration teams with any question."
      />

      <section className="bg-cream-200 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-bold text-emerald-950">
                Send Us a Message
              </h2>
              <p className="mt-3 text-sm text-ink-600">
                Fill in the form below and we will aim to respond within one working
                day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-40 rounded-3xl bg-white p-8 ring-1 ring-cream-300">
                <h2 className="font-serif text-2xl font-bold text-emerald-950">
                  Contact Details
                </h2>
                <div className="mt-7 space-y-6">
                  {contactDetails.map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-tan-600">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="mt-1 block text-sm font-semibold text-emerald-800 transition-colors hover:text-gold-600"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-semibold text-emerald-950">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gold-100 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                    Campus Location
                  </p>
                  <div className="mt-3 flex h-32 w-full items-center justify-center rounded-xl bg-gold-100 text-sm text-gold-800">
                    <MapPinIcon className="mr-2 h-5 w-5" />
                    Map placeholder — insert Google Map embed here
                  </div>
                </div>

                <p className="mt-5 text-xs text-tan-500">
                  Sample contact details. Replace with real information for a live
                  website.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}