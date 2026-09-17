import type { GalleryItem } from "./types";

export const galleryCategories = [
  "All",
  "Campus",
  "Classrooms",
  "Quran Hall",
  "Events",
  "Student Life",
  "Graduation",
] as const;

export const gallery: GalleryItem[] = [
  { title: "Main Campus Building", category: "Campus", image: "/images/campus.svg" },
  { title: "College Library", category: "Campus", image: "/images/library.svg" },
  { title: "Modern Classroom", category: "Classrooms", image: "/images/classroom.svg" },
  { title: "Quran Learning Centre", category: "Quran Hall", image: "/images/quran-hall.svg" },
  { title: "Annual Open House", category: "Events", image: "/images/events.svg" },
  { title: "Sports & Activities", category: "Student Life", image: "/images/sports.svg" },
  { title: "Hifz Graduation Day", category: "Graduation", image: "/images/graduation.svg" },
  { title: "Assembly & Morning Dua", category: "Student Life", image: "/images/mosque.svg" },
];