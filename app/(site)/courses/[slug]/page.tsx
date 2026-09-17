import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/courses/CourseCard";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { getAllPrograms, getProgramBySlug } from "@/data/programs";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPrograms().map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.shortDescription,
  };
}

const infoItems = [
  {
    label: "Duration",
    getValue: (p: { duration: string }) => p.duration,
    Icon: ClockIcon,
  },
  {
    label: "Level",
    getValue: (p: { level: string }) => p.level,
    Icon: BookOpenIcon,
  },
  {
    label: "Intake",
    getValue: (p: { intake: string }) => p.intake,
    Icon: UsersIcon,
  },
  {
    label: "Mode",
    getValue: (p: { mode: string }) => p.mode,
    Icon: CalendarIcon,
  },
  {
    label: "Faculty",
    getValue: (p: { teachers: string }) => p.teachers,
    Icon: MapPinIcon,
  },
];

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const related = getAllPrograms()
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb="Courses"
        title={program.title}
        subtitle={program.tagline}
      />

      <section className="bg-cream-200 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={800}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-10 space-y-10">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-emerald-950 sm:text-3xl">
                    About this Programme
                  </h2>
                  <div className="mt-4 space-y-4 text-ink-700 leading-relaxed">
                    {program.description.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-emerald-950 sm:text-3xl">
                    Curriculum
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {program.curriculum.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-cream-300"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span className="text-sm text-ink-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-emerald-950 sm:text-3xl">
                    What You Will Gain
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {program.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-xl bg-gold-100 p-5 ring-1 ring-gold-200"
                      >
                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-900 text-white">
                          <CheckIcon className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium text-ink-800">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-40 lg:self-start">
              <div className="rounded-2xl bg-white p-7 ring-1 ring-cream-300">
                <h3 className="font-serif text-lg font-bold text-emerald-950">
                  Programme Details
                </h3>
                <dl className="mt-5 space-y-4">
                  {infoItems.map(({ label, getValue, Icon }) => (
                    <div key={label} className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-tan-600">
                          {label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-semibold text-emerald-950">
                          {getValue(program)}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 space-y-3">
                  <Button href="/admissions" className="w-full">
                    Apply Now
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                  <Button href="/contact" variant="outline" className="w-full">
                    Ask a Question
                  </Button>
                </div>
                <p className="mt-4 text-xs text-tan-600">
                  Sample information. Contact our office for current details.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-24">
        <Container>
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-emerald-950">
            Explore Other Programmes
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <CourseCard key={item.slug} program={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Begin ${program.title} at Madina Tul Ilm`}
        description="Admissions are open. Speak with our team to find the right level and start your journey of learning today."
      />
    </>
  );
}