import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CalendarIcon, ArrowRightIcon } from "@/components/ui/icons";
import { news } from "@/data/news";
import { events } from "@/data/events";
import { formatDate } from "@/lib/utils";

const latestNews = news.slice(0, 3);
const upcomingEvents = events.slice(0, 3);

export function NewsEventsPreview() {
  return (
    <section className="bg-cream-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="News & Events"
          title="Latest Updates and Upcoming Events"
          description="Stay informed about what is happening at Madina Tul Ilm and join us at our next event."
        />
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 font-serif text-xl font-bold text-emerald-950">Latest News</h3>
            <div className="space-y-6">
              {latestNews.map((item) => (
                <article key={item.slug} className="flex gap-5">
                  <Badge tone="green">{item.category}</Badge>
                  <div>
                    <time className="text-xs text-tan-600">{formatDate(item.date)}</time>
                    <h4 className="mt-1 font-semibold text-emerald-950">{item.title}</h4>
                    <p className="mt-1 line-clamp-2 text-sm text-ink-600">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-8 font-serif text-xl font-bold text-emerald-950">Upcoming Events</h3>
            <div className="space-y-5">
              {upcomingEvents.map((item) => (
                <article
                  key={item.slug}
                  className="flex gap-5 rounded-2xl border border-cream-300 bg-white p-5 transition-colors hover:bg-emerald-50"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-emerald-800 text-center text-white">
                    <span className="text-[10px] font-bold uppercase">
                      {new Date(`${item.date}T00:00:00`).toLocaleDateString("en-GB", {
                        month: "short",
                      })}
                    </span>
                    <span className="text-lg font-bold leading-none">
                      {new Date(`${item.date}T00:00:00`).toLocaleDateString("en-GB", {
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div>
                    <Badge>{item.category}</Badge>
                    <h4 className="mt-2 font-semibold text-emerald-950">{item.title}</h4>
                    <div className="mt-1 flex items-center gap-2 text-xs text-tan-600">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-semibold text-emerald-900 transition-colors hover:text-gold-600"
          >
            View all news and events
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}