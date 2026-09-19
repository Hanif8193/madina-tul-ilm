import Button from "@/components/Button";
import { FINAL_CTA } from "@/lib/data";
import { sectionPadding, wrap } from "@/lib/utils";

export default function FinalCta() {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-green to-green-dark text-center text-ivory ${sectionPadding}`}
      aria-labelledby="final-cta-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-ivory/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
      />

      <div className={`${wrap} relative`}>
        <h2
          id="final-cta-heading"
          className="mx-auto max-w-[15ch] font-display text-[clamp(30px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em]"
        >
          {FINAL_CTA.heading}
          <br />
          <em className="text-gold">{FINAL_CTA.headingEm}</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-[17px] text-ivory/75">
          {FINAL_CTA.description}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={FINAL_CTA.primaryCta.href} variant="gold">
            {FINAL_CTA.primaryCta.label}
          </Button>
          <Button href={FINAL_CTA.secondaryCta.href} variant="outline-light">
            {FINAL_CTA.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}