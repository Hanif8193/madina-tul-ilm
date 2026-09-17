import type { Metadata } from "next";
import { ReferencePage } from "@/components/reference/ReferencePage";

export const metadata: Metadata = {
  title: {
    absolute:
      "Madina-Tul-Ilm Islamic College — Authentic Islamic Education for Women & Girls",
  },
  description:
    "Madina-Tul-Ilm Islamic College is a women-focused Islamic educational institution in Bahadurabad, Karachi, offering Qur'an, Dars-e-Nizami and Islamic sciences on-campus and online since 2016.",
};

export default function HomePage() {
  return <ReferencePage />;
}