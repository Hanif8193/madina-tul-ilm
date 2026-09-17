import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

export function EventCard({
  title,
  date,
  time,
  location,
  category,
  description,
}: EventCardProps) {
  const dateObj = new Date(`${date}T00:00:00`);
  const day = dateObj.toLocaleDateString("en-GB", { day: "numeric" });
  const month = dateObj.toLocaleDateString("en-GB", { month: "short" });

  return (
    <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-cream-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/5">
      <div className="flex items-start gap-6 p-7">
        <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-emerald-800 text-white">
          <span className="text-xs font-bold uppercase">{month}</span>
          <span className="font-serif text-2xl font-bold leading-none">{day}</span>
        </div>
        <div>
          <Badge>{category}</Badge>
          <h3 className="mt-2 font-serif text-xl font-bold text-emerald-950 transition-colors group-hover:text-emerald-700">
            {title}
          </h3>
          <p className="mt-1 text-sm text-tan-600">
            {time}
            {" · "}
            {location}
          </p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">
            {description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none flex items-center justify-between border-t border-cream-300 bg-cream-50 px-7 py-3 text-sm font-semibold text-emerald-900 opacity-70">
        <span className="flex items-center gap-2">
          <Image
            src="/images/events.svg"
            alt=""
            width={24}
            height={24}
            className="h-5 w-5 rounded-full object-cover"
            aria-hidden
          />
          Learn more
        </span>
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    </article>
  );
}