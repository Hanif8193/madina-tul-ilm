type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-[640px] mb-14 ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`flex items-center gap-2.5 mb-[18px] text-[13px] font-bold uppercase tracking-[0.06em] ${
          isCenter ? "justify-center" : ""
        } ${onDark ? "text-gold-light" : "text-green"}`}
      >
        <span
          aria-hidden="true"
          className={`inline-block h-[1.5px] ${onDark ? "w-[22px] bg-gold-light" : "w-[22px] bg-gold"}`}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`font-display text-[clamp(28px,3.5vw,46px)] font-normal leading-[1.15] tracking-[-0.02em] ${
          onDark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[17px] ${
            onDark ? "text-ivory/75" : "text-muted"
          } ${isCenter ? "mx-auto max-w-[52ch]" : "max-w-[52ch]"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}