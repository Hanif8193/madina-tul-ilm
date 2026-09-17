import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { directorMembers } from "@/data/faqs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the mission, vision, history and leadership of Madina Tul Ilm Islamic College, an institution dedicated to authentic Islamic education since 2001.",
};

const values = [
  {
    title: "Ikhlas (Sincerity)",
    description:
      "We seek the pleasure of Allah in all that we do, teaching with sincerity and expecting reward only from Him.",
  },
  {
    title: "Ilm (Knowledge)",
    description:
      "We pursue authentic knowledge of the Quran and Sunnah and share it generously, with humility.",
  },
  {
    title: "Akhlaq (Manners)",
    description:
      "We model and teach excellent character — honesty, respect, patience and service to others.",
  },
  {
    title: "Tarbiyah (Nurture)",
    description:
      "We develop every student as a whole person: spiritually, morally, academically and socially.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="About Madina Tul Ilm"
        subtitle="An institution where authentic Islamic education, academic excellence and strong character come together."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-emerald-900 p-10 text-white">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-300 uppercase">
                Our Mission
              </p>
              <h2 className="font-serif text-2xl font-bold">Mission</h2>
              <p className="mt-5 leading-relaxed text-emerald-100">
                To provide an authentic, balanced Islamic education that connects
                students with the Quran and Sunnah, develops sound knowledge and strong
                character, and prepares responsible Muslims who serve their families,
                communities and society.
              </p>
            </div>
            <div className="rounded-3xl bg-cream-100 p-10 ring-1 ring-gold-200">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-700 uppercase">
                Our Vision
              </p>
              <h2 className="font-serif text-2xl font-bold text-emerald-950">Vision</h2>
              <p className="mt-5 leading-relaxed text-ink-700">
                To be a leading centre of Islamic learning whose graduates are
                recognised for their knowledge, their character and their positive
                contribution — carrying the light of the Quran wherever they go.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-200 py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/mosque.svg"
                alt="Madina Tul Ilm history and heritage"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Serving the Community Since 2001"
                align="left"
              />
              <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
                <p>
                  Madina Tul Ilm Islamic College was founded in 2001 by a small group of
                  scholars and community leaders who saw a growing need for structured,
                  authentic Islamic education for the younger generation.
                </p>
                <p>
                  What began with a handful of students and a single Qur&rsquo;an class has
                  grown into a respected institution serving more than a thousand
                  students across six programmes.
                </p>
                <p>
                  Today our alumni serve as Huffaz, teachers, imams, doctors, engineers
                  and entrepreneurs — carrying the values and knowledge they acquired
                  here into every corner of society.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="The Principles That Guide Us"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border-t-4 border-gold-500 bg-cream-100 p-7"
              >
                <h3 className="font-serif text-lg font-bold text-emerald-950">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-200 py-24">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Leadership Team"
            description="Our college is guided by experienced scholars and educators who are committed to the highest standards of Islamic teaching."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {directorMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-8 text-center ring-1 ring-cream-300"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 font-serif text-2xl font-bold text-emerald-800">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-emerald-950">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-gold-600">{member.role}</p>
                <p className="mt-4 text-sm italic leading-relaxed text-ink-600">
                  {member.quote}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}