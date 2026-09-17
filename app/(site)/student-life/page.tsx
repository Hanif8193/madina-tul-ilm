import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Discover life at Madina Tul Ilm — a vibrant daily routine, clubs, sports, modern facilities and strong student support.",
};

const routine = [
  { time: "8:00 AM", item: "Morning assembly and Quran recitation" },
  { time: "8:30 AM", item: "Quran and Tajweed sessions" },
  { time: "10:30 AM", item: "Academic subjects and Islamic studies" },
  { time: "12:30 PM", item: "Lunch and Zuhr prayer" },
  { time: "1:30 PM", item: "Electives, clubs and study periods" },
  { time: "3:30 PM", item: "Sports, activities and dismissal" },
];

const activities = [
  "Qirat & Tajweed Club",
  "Islamic Quiz & Debate Team",
  "Nasheed & Arts Club",
  "Arabic Conversation Circle",
  "Calligraphy & Crafts",
  "Sports: Cricket, Football & Athletics",
  "Community Service Volunteers",
  "Student Council & Leadership",
];

const facilities = [
  "Purpose-built classrooms",
  "Dedicated Quran Learning Centre",
  "Computer and science laboratories",
  "Library with Islamic and academic texts",
  "Prayer facilities for boys and girls",
  "Sports ground and play areas",
  "Clean, supervised canteen",
  "Boarding accommodation (senior Hifz)",
];

const support = [
  "Caring mentor system for every student",
  "Regular reports and parent-teacher meetings",
  "Pastoral and wellbeing support",
  "Learning support for students who need it",
  "Need-based scholarships and fee support",
];

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        breadcrumb="Student Life"
        title="Student Life at Madina Tul Ilm"
        subtitle="School days filled with learning, worship, friendship and fun — where every student feels at home."
      />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="A Day at the College"
            title="A Balanced Daily Rhythm"
            description="Each day blends focused study, devotion and healthy activity, helping students build discipline they carry for life."
          />
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl ring-1 ring-cream-300">
            {routine.map((item) => (
              <div
                key={item.time}
                className="grid grid-cols-[5rem_1fr] gap-4 border-b border-cream-300 px-7 py-5 last:border-0 sm:grid-cols-[7rem_1fr] sm:px-9"
              >
                <span className="font-semibold text-gold-600">{item.time}</span>
                <span className="text-sm text-ink-700">{item.item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-200 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Clubs & Activities"
                title="Discover Talents, Build Confidence"
                align="left"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {activities.map((activity) => (
                  <li key={activity} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-ink-700">{activity}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button href="/gallery" variant="outline">
                  See student life photos
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Facilities"
                title="Purpose-Built for Learning"
                align="left"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {facilities.map((facility) => (
                  <li key={facility} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-ink-700">{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/sports.svg"
                alt="Students enjoying activities at Madina Tul Ilm"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Student Support"
                title="Every Student Is Known and Cared For"
                align="left"
              />
              <ul className="mt-7 space-y-4">
                {support.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button href="/contact">Talk to our welfare team</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Experience Life at Madina Tul Ilm"
        description="Visit our campus in person, meet our teachers and see the facilities that make our community special."
      />
    </>
  );
}