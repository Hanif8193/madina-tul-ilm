import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { EventCard } from "@/components/shared/EventCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { events } from "@/data/events";
import { news } from "@/data/news";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events & News",
  description:
    "Upcoming events, ceremonies and news at Madina Tul Ilm Islamic College, including workshops, competitions and community gatherings.",
};

const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));

export default function EventsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Events"
        title="Events & News"
        subtitle="From graduations to conferences and community gatherings — join us in celebrating the life of our college."
      />

      <section className="bg-cream-200 py-24">
        <Container>
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Mark Your Calendar"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((item) => (
              <EventCard
                key={item.slug}
                title={item.title}
                date={item.date}
                time={item.time}
                location={item.location}
                category={item.category}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="News"
            title="Latest Announcements"
          />
          <div className="mx-auto mt-14 max-w-4xl space-y-6">
            {news.map((item) => (
              <article
                key={item.slug}
                className="rounded-2xl border border-cream-300 bg-cream-100 p-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone="green">{item.category}</Badge>
                  <time className="text-xs text-tan-600">{formatDate(item.date)}</time>
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Host an Event With Us"
        description="Our campus is available for community events, workshops and conferences. Get in touch to discuss your requirements."
      />
    </>
  );
}