"use client";

import { useState } from "react";
import Link from "next/link";

type Course = {
  name: string;
  desc: string;
};

type CourseCategory = {
  id: string;
  n: string;
  title: string;
  desc: string;
  courses: Course[];
};

// Content reproduced exactly from the original courses.html source.
const CATEGORIES: CourseCategory[] = [
  {
    id: "quran",
    n: "01",
    title: "Qur'an Programs",
    desc: "Structured Qur'anic education from foundational recitation to comprehensive study.",
    courses: [
      { name: "Nazra Tul Qur'an", desc: "Foundation in correct recitation." },
      { name: "Tajweed", desc: "The science of Qur'anic pronunciation and recitation rules." },
      { name: "Hifz-ul-Qur'an", desc: "Memorisation of the complete Qur'an." },
      { name: "Hifz Maintenance", desc: "Ongoing revision and strengthening of Hifz." },
      { name: "Quran Translation", desc: "Understanding the meaning of the Qur'an." },
      { name: "Quran Understanding", desc: "Deeper engagement with Qur'anic themes and context." },
    ],
  },
  {
    id: "islamic",
    n: "02",
    title: "Islamic Studies",
    desc: "Comprehensive Islamic education covering all major disciplines of scholarship.",
    courses: [
      {
        name: "Dars-e-Nizami",
        desc: "The flagship Aalimah course — 5 years of structured Islamic scholarship.",
      },
      { name: "Tafseer", desc: "Exegesis and interpretation of the Qur'an." },
      { name: "Hadith", desc: "Study of the Prophetic traditions and their sciences." },
      { name: "Ahkam e Shariat", desc: "Islamic jurisprudence and practical rulings." },
      { name: "Seerah", desc: "Life, character and biography of the Prophet ﷺ." },
      { name: "Islamic History", desc: "From the Companions to the present day." },
    ],
  },
  {
    id: "specialized",
    n: "03",
    title: "Specialized Programs",
    desc: "Advanced and focused programs for deeper learning and professional development.",
    courses: [
      {
        name: "Takhassus Programs",
        desc: "Post-Aalimah specialisation in specific Islamic sciences.",
      },
      { name: "Short Courses", desc: "Focused programs on specific topics and disciplines." },
      { name: "Workshops", desc: "Practical and skills-based learning sessions." },
      { name: "Certificate Courses", desc: "Accredited programs in Islamic subjects." },
    ],
  },
  {
    id: "children",
    n: "04",
    title: "Children's Programs",
    desc: "Nurturing Islamic education designed for girls and younger students.",
    courses: [
      { name: "Nazra", desc: "Qur'anic recitation for children." },
      { name: "Hifz", desc: "Qur'an memorisation for young students." },
      { name: "Tajweed", desc: "Recitation rules taught in an age-appropriate way." },
      { name: "Islamic Tarbiyah", desc: "Character, manners and Islamic values." },
      { name: "Summer Camps", desc: "Engaging educational programs during school holidays." },
    ],
  },
];

export default function CoursesTabs() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);

  return (
    <>
      {/* Tabs */}
      <section className="bg-ivory px-6">
        <div className="mx-auto w-full max-w-[1240px] border-b border-green/12">
          <div className="flex overflow-x-auto" role="tablist" aria-label="Course categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                id={`courses-tab-${cat.id}`}
                aria-selected={cat.id === activeId}
                aria-controls={`courses-panel-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className={`-mb-px cursor-pointer whitespace-nowrap border-b-2 px-7 py-5 text-[13.5px] transition-colors duration-200 ${
                  cat.id === activeId
                    ? "border-gold font-semibold text-green"
                    : "border-transparent font-medium text-muted"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category panels */}
      {CATEGORIES.map((cat) => (
        <section
          key={cat.id}
          id={`courses-panel-${cat.id}`}
          role="tabpanel"
          aria-labelledby={`courses-tab-${cat.id}`}
          className={`bg-ivory px-6 py-[72px] ${cat.id === activeId ? "block" : "hidden"}`}
        >
          <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-start gap-10 min-[900px]:grid-cols-[1fr_2fr] min-[900px]:gap-20">
            <div>
              <div className="mb-2 font-display text-[64px] font-light leading-none tracking-[-0.03em] text-green/12">
                {cat.n}
              </div>
              <h2 className="mb-5 font-display text-[clamp(24px,3vw,36px)] font-medium leading-[1.2] tracking-[-0.02em]">
                {cat.title}
              </h2>
              <p className="mb-8 text-[15px] leading-[1.7] text-muted">{cat.desc}</p>
              <Link
                href="/admissions"
                className="inline-block bg-green px-6 py-3 text-[13px] font-semibold text-ivory transition-colors duration-200 hover:bg-green-dark"
              >
                Enroll Now <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-px bg-green/10 min-[900px]:grid-cols-2">
              {cat.courses.map((course) => (
                <div
                  key={course.name}
                  className="bg-ivory px-6 py-7 transition-colors duration-200 hover:bg-beige"
                >
                  <div className="mb-2 text-[15px] font-semibold leading-[1.3]">{course.name}</div>
                  <div className="text-[13px] leading-[1.55] text-muted">{course.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
