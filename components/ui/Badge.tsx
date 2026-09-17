import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "green" | "neutral";
}

export function Badge({ children, className, tone = "gold" }: BadgeProps) {
  const tones: Record<string, string> = {
    gold: "bg-gold-100 text-gold-800 ring-gold-200",
    green: "bg-emerald-100 text-emerald-800 ring-emerald-200",
    neutral: "bg-cream-200 text-ink-700 ring-cream-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}