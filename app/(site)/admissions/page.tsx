import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqList } from "@/components/shared/FaqList";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { admissionSteps, admissionFaqs, admissionsNote } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to Madina Tul Ilm Islamic College. Learn about our admission process, requirements and frequently asked questions for the 2026-27 academic year.",
};

const requirements = [
  "Completed application form",
  "Copy of birth certificate or CNIC",
  "Previous school reports (where applicable)",
  "Two recent passport-sized photographs",
  "Medical fitness certificate",
  "Entry assessment and parent interview",
];

const keyDates = [
  { label: "Applications open", value: "Now open", highlight: true },
  { label: "Entry assessments", value: "July – August", highlight: false },
  { label: "Academic year begins", value: "September", highlight: false },
  { label: "Term one ends", value: "December", highlight: false },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Admissions"
        title="Admissions"
        subtitle="Join a community of knowledge. Our admission team is here to guide you through every step of the journey."
      />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="How to Apply"
            title="A Simple, Supportive Process"
            description="Applying is straightforward. Follow these five steps and our team will support you at every stage."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-cream-100 p-7 ring-1 ring-cream-300"
              >
                <span className="font-serif text-4xl font-bold text-gold-500">{step.step}</span>
                <h3 className="mt-4 font-serif text-lg font-bold text-emerald-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-200 py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-10 ring-1 ring-cream-300">
              <h2 className="font-serif text-2xl font-bold text-emerald-950">
                Required Documents
              </h2>
              <p className="mt-3 text-sm text-ink-600">
                Please prepare the following documents when submitting your application.
              </p>
              <ul className="mt-7 space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="outline">
                  Ask the Admissions Team
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-900 p-10 text-white">
              <h2 className="font-serif text-2xl font-bold">Key Dates</h2>
              <p className="mt-3 text-sm text-emerald-200">
                Plan ahead with these important milestones for the academic year.
              </p>
              <dl className="mt-7 divide-y divide-white/10">
                {keyDates.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-4"
                  >
                    <dt className="text-sm text-emerald-200">{item.label}</dt>
                    <dd
                      className={
                        item.highlight
                          ? "rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-emerald-950"
                          : "text-sm font-semibold text-gold-300"
                      }
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs text-emerald-300/70">{admissionsNote}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="mt-12">
            <FaqList items={admissionFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to Apply?"
        description="Contact our admissions office to begin your application, book a campus tour or request an application pack."
      />
    </>
  );
}