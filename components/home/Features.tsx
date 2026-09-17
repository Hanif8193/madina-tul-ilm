import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { features } from "@/data/features";

export function Features() {
  return (
    <section className="bg-cream-200 py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Balanced Islamic and Academic Education"
          description="We combine the timeless sciences of the Quran and Sunnah with modern academic standards, creating a learning environment where every child thrives."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cream-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 transition-colors duration-300 group-hover:bg-emerald-900 group-hover:text-white">
                <FeatureIcon name={feature.icon} className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-emerald-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}