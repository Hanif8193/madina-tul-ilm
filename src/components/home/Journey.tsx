import { TIMELINE } from "@/lib/data";
import { wrap } from "@/lib/utils";

export default function Journey() {
  return (
    <section className="bg-beige py-20 md:py-28" aria-labelledby="journey-heading">
      <div className={wrap}>
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Our Story
          </p>
          <h2
            id="journey-heading"
            className="font-display text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-ink lg:text-5xl"
          >
            A Journey Since 2016
          </h2>
        </div>

        {/* Horizontal 5-step timeline; dots sit on the shared border line */}
        <div className="grid grid-cols-1 gap-10 border-t border-green/12 pt-8 md:grid-cols-5 md:gap-0 md:border-t-0 md:pt-0">
          {TIMELINE.map((entry, index) => (
            <article
              key={`${entry.year}-${entry.title}`}
              className={`relative ${
                index === 0
                  ? "md:border-l-0 md:pl-0 md:pr-6"
                  : "md:border-l md:border-green/12 md:pl-6 md:pr-6"
              }`}
            >
              {/* Gold dot centered on the top of the border line, as in
                  the original (.tl-dot top:-1px left:-5px; hidden on mobile) */}
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] -top-1 hidden h-2.5 w-2.5 rounded-full bg-gold md:block"
                />
              )}
              <div className="mb-2 font-display text-[22px] font-normal leading-none tracking-[-0.01em] text-green">
                {entry.year}
              </div>
              <div className="mb-2 text-[13px] font-bold tracking-[0.02em] text-ink">
                {entry.title}
              </div>
              <p className="text-[13px] leading-[1.6] text-muted">{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
