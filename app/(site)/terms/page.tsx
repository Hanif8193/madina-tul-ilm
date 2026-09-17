import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for the Madina Tul Ilm Islamic College website. Sample terms for demonstration purposes.",
};

const lastUpdated = "1 September 2026";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or using the Madina Tul Ilm Islamic College website, you agree to these Terms of Use. If you do not agree, please do not continue to use the site.",
  },
  {
    heading: "2. Purpose of This Website",
    body: "This website is provided for informational purposes about Madina Tul Ilm Islamic College, our programmes and services. Content is regularly updated but may not always reflect the very latest information.",
  },
  {
    heading: "3. Intellectual Property",
    body: "All content on this website — including text, images, graphics, logos, course materials and design — is the property of Madina Tul Ilm Islamic College or its licensors and is protected by applicable copyright and intellectual property laws. You may not reproduce content without written permission.",
  },
  {
    heading: "4. Limitation of Liability",
    body: "While we strive for accuracy, we make no warranties about the completeness or reliability of information on this site. We are not liable for any loss or damage arising from your use of or reliance on the content provided.",
  },
  {
    heading: "5. External Links",
    body: "This website may contain links to external sites. We are not responsible for the content or privacy practices of those sites and encourage you to review their terms before using them.",
  },
  {
    heading: "6. Admissions and Course Information",
    body: "All information about admissions, fees, courses and schedules on this website is for general guidance only and may change without notice. Official information will always be communicated directly to applicants and enrolled students.",
  },
  {
    heading: "7. Changes to These Terms",
    body: "We reserve the right to update these Terms of Use at any time. Changes take effect when posted. Your continued use of the site indicates acceptance of any changes.",
  },
  {
    heading: "8. Contact Us",
    body: "For questions about these terms, please contact us at info@madinatulilm.example.com or via the Contact page on this website.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Terms of Use"
        title="Terms of Use"
        subtitle="Please read these terms carefully before using the Madina Tul Ilm website."
      />
      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <p className="text-sm text-tan-600">Last updated: {lastUpdated}</p>
          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-xl font-bold text-emerald-950">
                  {section.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{section.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 rounded-xl bg-gold-100 p-6 text-xs text-ink-600 ring-1 ring-gold-100">
            These Terms of Use are sample text for demonstration purposes only and do
            not constitute legal advice. Please consult a qualified professional when
            preparing terms for a live website.
          </p>
        </Container>
      </section>
    </>
  );
}