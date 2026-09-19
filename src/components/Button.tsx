import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "gold" | "outline-light" | "dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    // Permanent visible border + smooth darken on hover. No transform on
    // hover: transforming inside the backdrop-blurred header forces a
    // repaint that can make the button visually glitch/disappear.
    "border-green bg-green text-ivory hover:border-green-dark hover:bg-green-dark",
  ghost:
    // Permanent visible border; hover darkens to the primary green with
    // ivory text so the label stays readable.
    "border-green/40 bg-transparent text-ink hover:border-green hover:bg-green hover:text-ivory",
  gold:
    "border-gold bg-gold text-green-dark hover:border-gold-light hover:bg-gold-light hover:-translate-y-px",
  "outline-light":
    "bg-transparent text-ivory border-white/40 hover:border-gold hover:text-gold-light",
  // Solid dark rectangular button (dark green bg, white text, square corners,
  // always-visible hover darkening) — for the Home page "Enroll Now".
  dark:
    "border-green bg-green text-ivory rounded-none hover:border-green-dark hover:bg-green-dark",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-none border-2 border-transparent px-6 py-3.5 text-[13px] font-semibold whitespace-nowrap transition-[transform,background-color,color,border-color] duration-200 cursor-pointer";

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
  ...rest
}: ButtonProps) {
  const classes = `${baseClass} ${VARIANT_CLASSES[variant]} ${className}`.trim();

  if (external) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}