import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "outlineLight" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-emerald-900 text-white hover:bg-emerald-950",
  secondary: "bg-gold-500 text-white hover:bg-gold-600",
  outline: "border border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white",
  outlineLight:
    "border border-white/70 text-white hover:bg-white hover:text-emerald-900",
  light: "bg-cream-100 text-emerald-950 hover:bg-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    const linkProps = { className: classes, onClick };
    if (isExternal) {
      return (
        <a href={href} {...linkProps}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}