"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              activeCategory === category
                ? "bg-emerald-900 text-white"
                : "bg-white text-ink-700 ring-1 ring-cream-400 hover:bg-emerald-50",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <figure
            key={item.title}
            className="group relative overflow-hidden rounded-2xl bg-emerald-100"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={420}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                {item.category}
              </p>
              <h3 className="mt-1 font-serif text-lg font-bold text-white">{item.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-tan-600">
          No photos in this category yet. Check back soon.
        </p>
      ) : null}
    </div>
  );
}