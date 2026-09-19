import Link from "next/link";
import { DARS_NIZAMI } from "@/lib/data";
import { wrap } from "@/lib/utils";

// Tag row exactly as in the original home design (.tag-row).
const TAG_ROW = ["5 Years", "Qur'an", "Hadith", "Arabic", "Fiqh"];

export default function DarsNizami() {
  return (
    <section
      id="dars-e-nizami"
      className="relative overflow-hidden bg-green py-20 text-ivory md:py-24"
      aria-labelledby="dars-heading"
    >
      {/* Decorative rings, as in the original (.nizami-ring) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-80px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-gold/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-40px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-gold/[0.05]"
      />

      <div className={`${wrap} relative z-[1] grid items-center gap-16 lg:grid-cols-2`}>
        {/* Left column — content */}
        <div>
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Featured Program
          </div>
          <h2
            id="dars-heading"
            className="mb-2 font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em]"
          >
            {DARS_NIZAMI.title.split(" Aalimah")[0]}
          </h2>
          <div className="mb-8 font-display text-[20px] font-light italic text-gold">
            Aalimah Course
          </div>
          <p className="mb-10 max-w-lg text-[16px] leading-[1.75] text-beige/75">
            {DARS_NIZAMI.description}
          </p>

          <div className="mb-10 flex flex-wrap gap-6">
            {TAG_ROW.map((tag) => (
              <div
                key={tag}
                className="border-b border-gold/30 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold"
              >
                {tag}
              </div>
            ))}
          </div>

          <Link
            href={DARS_NIZAMI.cta.href}
            className="inline-flex items-center gap-2 bg-gold px-7 py-[13px] text-[14px] font-semibold text-green transition-colors duration-200 hover:bg-gold-light"
          >
            Explore Dars-e-Nizami <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right column — dark media placeholder frame (.placeholder.dark) */}
        <div className="relative h-[320px] md:h-[460px]">
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-gold/20 bg-green-dark text-center">
            {/* inner decorative rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.08]"
            />
            {/* corner brackets, as in the original (.corner tl/br) */}
            <div
              aria-hidden="true"
              className="absolute left-5 top-5 h-[30px] w-[30px] border-l border-t border-gold/30"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-5 right-5 h-[30px] w-[30px] border-b border-r border-gold/30"
            />

            <div className="relative px-4">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/50">
                Campus Photograph
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/40">
                Client Asset Needed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
