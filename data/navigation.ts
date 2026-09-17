import type { NavItem } from "./types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "All Courses", href: "/courses" },
      { label: "Quranic Education", href: "/courses/quranic-education" },
      { label: "Islamic Studies", href: "/courses/islamic-studies" },
      { label: "Tafseer & Hadith", href: "/courses/tafseer-hadith" },
      { label: "Seerah & Islamic History", href: "/courses/seerah-islamic-history" },
      { label: "Fiqh & Aqeedah", href: "/courses/fiqh-aqeedah" },
      { label: "Tarbiyah", href: "/courses/tarbiyah" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];