import Link from "next/link";

// Content reproduced exactly from the original courses.html source.
const FEATURED_STATS = [
  { label: "Duration", value: "5 Years" },
  { label: "Class Timing", value: "12:00 – 2:00" },
  { label: "Monthly Fee", value: "2000 (billing period to be confirmed)" },
  { label: "Eligibility", value: "Open to girls and women meeting admission requirements" },
];

const DARS_SUBJECTS = [
  "Qur'an",
  "Tafseer",
  "Usul e Tafseer",
  "Hadith",
  "Usul e Hadith",
  "Fiqh",
  "Usul-ul-Fiqh",
  "Arabic",
  "Seerah",
  "Aqeedah",
  "Islamic History",
  "Islamic Studies",
  "Contemporary Issues",
  "Research",
];

export default function FeaturedProgram() {
  return (
    <section className="relative overflow-hidden bg-green px-6 py-24" id="dars-e-nizami">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-[360px] w-[360px] rounded-full border border-gold/5"
      />

      <div className="relative z-[1] mx-auto grid w-full max-w-[1240px] grid-cols-1 items-start gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-20">
        <div>
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
            Featured Program
          </div>
          <h2 className="mb-2 font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em] text-ivory">
            Dars-e-Nizami
          </h2>
          <div className="mb-8 font-display text-[22px] font-light italic text-gold">
            Aalimah Course
          </div>
          <p className="mb-8 text-[16px] leading-[1.8] text-beige/75">
            A comprehensive Dars-e-Nizami Aalimah Course combining traditional Islamic scholarship
            with contemporary learning. The program develops a strong foundation in Qur'an, Hadith,
            Arabic, Fiqh and other Islamic sciences while addressing modern challenges and practical
            needs.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-6 min-[900px]:grid-cols-2">
            {FEATURED_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-gold/70">
                  {stat.label}
                </div>
                <div className="text-[14px] leading-[1.5] text-ivory">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="mb-8 border border-gold/15 bg-gold/8 px-5 py-4">
            <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-gold">
              Course Format
            </div>
            <div className="text-[13px] leading-[1.6] text-beige/70">
              On-campus and online options available.
              <br />
              <em className="italic text-gold/60">Exact schedule details: information to be confirmed.</em>
            </div>
          </div>

          <Link
            href="/admissions"
            className="inline-block bg-gold px-7 py-[13px] text-[14px] font-semibold text-green transition-colors duration-200 hover:bg-gold-light"
          >
            Apply / Enroll Now <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div>
          <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.14em] text-gold/70">
            What You Will Learn
          </div>
          <div className="flex flex-wrap gap-2">
            {DARS_SUBJECTS.map((subject) => (
              <div
                key={subject}
                className="border border-ivory/15 px-3.5 py-2 text-[13px] font-medium tracking-[0.02em] text-ivory transition-colors duration-200 hover:border-gold/40"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
