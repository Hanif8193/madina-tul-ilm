import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedPrograms } from "@/data/programs";

export function ProgramsPreview() {
  const featured = getFeaturedPrograms();

  return (
    <section className="bg-cream-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Programmes"
          title="Courses Rooted in the Quran and Sunnah"
          description="Choose from six carefully designed programmes that build knowledge, character and a love of learning."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((program) => (
            <Link
              key={program.slug}
              href={`/courses/${program.slug}`}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-cream-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/5"
            >
              <div className="relative h-52 overflow-hidden bg-emerald-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <Badge className="absolute bottom-4 left-4">
                  {program.duration}
                </Badge>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-bold text-emerald-950 transition-colors group-hover:text-emerald-700">
                  {program.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-600">{program.tagline}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-600">
                  {program.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 transition-colors group-hover:text-gold-600">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 font-semibold text-emerald-900 transition-colors hover:text-gold-600"
          >
            View all courses
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}