import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Manrope,
  Noto_Nastaliq_Urdu,
} from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-nastaliq",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madinatulilm.example.com"),
  title: {
    default:
      "Madina-Tul-Ilm Islamic College — Authentic Islamic Education for Women & Girls",
    template: `%s | Madina-Tul-Ilm Islamic College`,
  },
  description:
    "Madina-Tul-Ilm Islamic College is a women-focused Islamic educational institution in Bahadurabad, Karachi, offering Qur'an, Dars-e-Nizami and Islamic sciences on-campus and online since 2016.",
  keywords: [
    "Madina-Tul-Ilm",
    "Islamic College",
    "Women Islamic Education",
    "Dars-e-Nizami",
    "Hifz Quran",
    "Tajweed",
    "Quran Translation",
    "Tafseer",
    "Hadith",
    "Fiqh",
    "Bahadurabad",
    "Karachi",
  ],
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Madina-Tul-Ilm Islamic College",
    title:
      "Madina-Tul-Ilm Islamic College — Authentic Islamic Education for Women & Girls",
    description:
      "Madina-Tul-Ilm Islamic College is a women-focused Islamic educational institution in Bahadurabad, Karachi, offering Qur'an, Dars-e-Nizami and Islamic sciences on-campus and online since 2016.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${bricolage.variable} ${manrope.variable} ${notoNastaliqUrdu.variable}`}>{children}</body>
    </html>
  );
}