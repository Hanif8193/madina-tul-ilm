import { wrap } from "@/lib/utils";

// Preview tiles exactly as in the original home gallery (5 cells):
// feature card + 2x2 grid. The full set remains on the /gallery page.
const FEATURE_TILE = { label: "Campus Life", sub: "Client Photo Needed" };

const PREVIEW_TILES = [
  { label: "Mehfil", sub: "Client Photo Needed" },
  { label: "Competition", sub: "Client Photo Needed" },
  { label: "Celebration", sub: "Client Photo Needed" },
  { label: "Campus — Jamia", sub: "Client Photo Needed" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-beige py-20 md:py-28" id="gallery" aria-labelledby="gallery-heading">
      <div className={wrap}>
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="mb-2 font-display text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-ink lg:text-5xl"
          >
            Moments That Inspire
          </h2>
          <p className="text-[14px] text-muted">
            A glimpse into campus life, events and activities.
          </p>
        </div>

        {/* Asymmetrical grid: tall feature card left, 2x2 placeholders right */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {/* Left feature card — spans both rows on desktop */}
          <div className="flex min-h-[400px] flex-col items-center justify-center border border-gold/20 bg-green p-6 text-center md:row-span-2 lg:min-h-[500px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/60">
              {FEATURE_TILE.label}
            </div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/40">
              {FEATURE_TILE.sub}
            </div>
          </div>

          {/* Right 2x2 cards */}
          {PREVIEW_TILES.map((tile) => (
            <div
              key={tile.label}
              className="flex aspect-[4/3] flex-col items-center justify-center border border-gold/20 bg-green-dark p-6 text-center"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/60">
                {tile.label}
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/40">
                {tile.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
