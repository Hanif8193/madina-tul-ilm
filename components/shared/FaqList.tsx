"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/data/types";

interface FaqListProps {
  items: FaqItem[];
}

export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl bg-white transition-colors",
              isOpen ? "ring-2 ring-emerald-700" : "ring-1 ring-cream-300",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-emerald-950">{item.question}</span>
              <ChevronDownIcon
                className={cn(
                  "h-5 w-5 shrink-0 text-emerald-800 transition-transform duration-200",
                  isOpen ? "rotate-180" : "",
                )}
              />
            </button>
            {isOpen ? (
              <p className="px-7 pb-6 text-sm leading-relaxed text-ink-600">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}