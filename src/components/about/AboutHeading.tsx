import type { ReactNode } from "react";

type AboutHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  id?: string;
  titleMargin?: string;
};

export default function AboutHeading({
  eyebrow,
  title,
  id,
  titleMargin = "mb-16",
}: AboutHeadingProps) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
      <h2
        id={id}
        className={`font-display text-[clamp(28px,3.5vw,46px)] font-normal leading-[1.15] tracking-[-0.02em] text-ink ${titleMargin}`}
      >
        {title}
      </h2>
    </div>
  );
}