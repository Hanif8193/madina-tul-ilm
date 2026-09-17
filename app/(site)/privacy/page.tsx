import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Madina Tul Ilm Islamic College. Sample policy text for demonstration purposes.",
};

const lastUpdated = "1 September 2026";

const sections = [
  {
    heading: "1. Introduction",
    body: "Madina Tul Ilm Islamic College is committed to protecting the privacy and personal data of our students, parents, staff and website visitors. This policy explains how we collect, use and safeguard your information.",
  },
  {
    heading: "2. Information We Collect",
    body: "We may collect personal information you voluntarily provide when you enquire about admissions, submit an application, complete a contact form, or attend a college event. This may include your name, email address, phone number and student records. We may also collect non-personal data such as browser type, device and pages visited for website analytics.",
  },
  {
    heading: "3. How We Use Your Information",
    body: "We use your information to process applications, communicate with you about admissions and college events, maintain student records, improve our services and comply with legal obligations. We will never sell your personal data to third parties.",
  },
  {
    heading: "4. Data Sharing",
    body: "We may share personal information with regulatory bodies, examination authorities or safeguarding partners where required by law or for the safety of students. All data sharing is governed by appropriate data protection agreements.",
  },
  {
    heading: "5. Data Security",
    body: "We implement reasonable technical and organisational measures to protect personal data against unauthorised access, loss or misuse. Our digital systems are protected by secure passwords, encryption and regular backups.",
  },
  {
    heading: "6. Cookies and Analytics",
    body: "This website uses essential cookies and analytics tools to improve the visitor experience. You may disable cookies in your browser settings if you prefer not to share non-essential data.",
  },
  {
    heading: "7. Your Rights",
    body: "You have the right to access, correct or request deletion of your personal data at any time. To make a request, please contact our administration office using the details on our Contact page.",
  },
  {
    heading: "8. Changes to This Policy",
    body: "We may update this policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.",
  },
  {
    heading: "9. Contact Us",
    body: "If you have questions about this Privacy Policy, please contact us at info@madinatulilm.example.com or via our Contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains how we handle your data."
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
            This Privacy Policy is sample text for demonstration purposes only and does
            not constitute legal advice. Please consult a qualified professional when
            preparing policies for a live website.
          </p>
        </Container>
      </section>
    </>
  );
}