import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/data";
import CourseSchedule from "@/components/admissions/CourseSchedule";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions and course schedule for Madina-Tul-Ilm Islamic College — Nazra, Hifz, Dars-e-Nizami, Tafseer, Arabic and more.",
};

// Page content reproduced exactly from the original admissions.html source.
export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-beige px-6 pb-24 pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 h-[360px] w-[360px] rounded-full border border-green/[0.07]"
        />
        <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-6">
          <div className="mb-4 text-[11px] font-bold tracking-[0.18em] text-gold uppercase">
            Admissions
          </div>
          <h1 className="mb-6 max-w-[760px] font-display text-[clamp(36px,5.5vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] max-[899px]:max-w-none">
            <span className="block whitespace-nowrap max-[899px]:whitespace-normal">Find a Program That Fits</span>
            <em className="block whitespace-nowrap text-green max-[899px]:whitespace-normal">Your Learning Journey</em>
          </h1>
          <p className="max-w-[520px] text-[16px] leading-[1.7] text-muted">
            Choose from a range of on-campus and online programs. Enroll through WhatsApp or
            directly via the links below.
          </p>
        </div>
      </section>

      {/* How to Enroll */}
      <section className="bg-ivory px-6 pt-[72px]">
        <div className="mx-auto w-full max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-px bg-green/10 min-[900px]:grid-cols-3">
            {[
              {
                n: "01",
                t: "Browse Programs",
                d: "Review the course schedule below and identify the program that suits your schedule and goals.",
              },
              {
                n: "02",
                t: "Contact Us",
                d: "Reach out via WhatsApp at 0313-3502333 to confirm availability and details for your chosen program.",
              },
              {
                n: "03",
                t: "Enroll",
                d: "Complete enrollment and begin your journey in Islamic education at Madina-Tul-Ilm.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-ivory py-10 px-8">
                <div className="mb-3 font-display text-[36px] font-light tracking-[-0.02em] text-green/15">
                  {step.n}
                </div>
                <div className="mb-2 text-[16px] font-semibold">{step.t}</div>
                <div className="text-[14px] leading-[1.65] text-muted">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="bg-ivory px-6 pt-[72px] pb-24">
        <div className="mx-auto w-full max-w-[1240px] px-6">
          <div className="mb-4 text-[11px] font-bold tracking-[0.18em] text-gold uppercase">
            Course Schedule
          </div>
          <h2 className="mb-10 font-display text-[clamp(26px,3vw,42px)] font-normal leading-[1.15] tracking-[-0.02em]">
            Available Programs
          </h2>

          <div className="mb-8 flex items-start gap-3 border border-gold/20 border-l-[3px] border-l-gold bg-beige px-5 py-4">
            <svg
              className="mt-0.5 shrink-0"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D6B45C"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <span className="text-[13px] leading-[1.6] text-muted">
              Some fields in the source document are incomplete. Where details are not yet
              confirmed, &quot;Information to be confirmed&quot; is displayed. Please contact us via
              WhatsApp for the latest information.
            </span>
          </div>

          <CourseSchedule />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-green/10 bg-beige px-6 py-[72px]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-8 px-6 min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between">
          <div>
            <h3 className="mb-2 font-display text-[clamp(22px,3vw,36px)] font-normal tracking-[-0.02em]">
              Have questions about enrollment?
            </h3>
            <p className="text-[15px] leading-[1.6] text-muted">
              Our team is available via WhatsApp to answer your questions and guide you through the
              process.
            </p>
          </div>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 bg-green px-7 py-3.5 text-[14px] font-semibold text-ivory transition-colors duration-200 hover:bg-green-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
