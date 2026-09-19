import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  // Variable font with the optical-size axis — matches the original
  // 'Fraunces:ital,opsz,wght@0,9..144,…' Google Fonts loading, so large
  // display headings (e.g. the '&' in 'Tarbiyah & Growth') render with the
  // same high-opsz letterforms as the original about.html design.
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Madina-Tul-Ilm Islamic College",
    template: "%s — Madina-Tul-Ilm Islamic College",
  },
  description:
    "Authentic Islamic Education for Women & Girls. A female-focused Islamic educational institution dedicated to nurturing a generation grounded in Qur'an, Sunnah, knowledge and character.",
  openGraph: {
    title: "Madina-Tul-Ilm Islamic College",
    description:
      "Authentic Islamic Education for Women & Girls — structured learning in Qur'an and Islamic sciences through on-campus and online education.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}