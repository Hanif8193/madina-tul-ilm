import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-bold text-emerald-950 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}