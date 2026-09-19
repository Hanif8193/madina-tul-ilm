import type { Metadata } from "next";
import CoursesTabs from "@/components/courses/CoursesTabs";
import FeaturedProgram from "@/components/courses/FeaturedProgram";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "From foundational Qur'anic recitation to comprehensive Aalimah studies — structured programs for women at every stage of their Islamic learning journey.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero — recreated from the original courses.html source */}
      <section className="relative overflow-hidden bg-beige px-6 pb-24 pt-[84px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -right-[120px] h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-green/8"
        />
        <div className="relative z-[1] mx-auto w-full max-w-[1240px]">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Programs &amp; Courses
          </div>
          <h1 className="mb-6 max-w-[720px] font-display text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] tracking-[-0.03em]">
            Explore Our
            <br />
            <em className="text-green">Programs</em>
          </h1>
          <p className="max-w-[520px] text-[17px] leading-[1.7] text-muted">
            From foundational Qur'anic recitation to comprehensive Aalimah studies — structured
            programs for women at every stage of their Islamic learning journey.
          </p>
        </div>
      </section>

      <CoursesTabs />
      <FeaturedProgram />
    </>
  );
}
