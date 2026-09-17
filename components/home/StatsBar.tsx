import { Container } from "@/components/ui/Container";
import { statistics, statisticsNote } from "@/data/stats";

export function StatsBar() {
  return (
    <section className="relative -mt-14 z-10 sm:-mt-20">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-white/95 ring-1 ring-cream-300 shadow-xl shadow-emerald-950/10 backdrop-blur">
          <div className="grid grid-cols-2 gap-px bg-cream-300 sm:grid-cols-4">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center bg-white px-6 py-8 text-center"
              >
                <span className="font-serif text-3xl font-bold text-emerald-900 sm:text-4xl">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </span>
                <span className="mt-2 text-sm font-medium text-ink-600">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="border-t border-cream-300 bg-cream-50 py-3 text-center text-xs text-ink-600">{statisticsNote}</p>
        </div>
      </Container>
    </section>
  );
}