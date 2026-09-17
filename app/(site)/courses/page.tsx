import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/courses/CourseCard";
import { getAllPrograms } from "@/data/programs";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore the six programmes offered at Madina Tul Ilm Islamic College, including Quranic Education, Islamic Studies, Tafseer & Hadith, Seerah, Fiqh & Aqeedah and Tarbiyah.",
};

export default function CoursesPage() {
  const programs = getAllPrograms();

  return (
    <>
      <PageHero
        breadcrumb="Courses"
        title="Our Programmes"
        subtitle="Six carefully designed programmes rooted in the Quran and Sunnah. Each builds strong foundations of knowledge, deepens understanding and shapes character."
      />
      <section className="bg-cream-200 py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <CourseCard key={program.slug} program={program} />
            ))}
          </div>
          <div className="mt-16 rounded-2xl bg-emerald-50 p-8 ring-1 ring-emerald-100 sm:p-10">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-emerald-950">
                Not sure which programme is right for you?
              </h2>
              <p className="mt-3 text-ink-700">
                Our admissions team will help you choose. New students complete a short
                placement assessment so they join the level that fits them best.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}