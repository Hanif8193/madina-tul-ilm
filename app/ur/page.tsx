import type { Metadata } from "next";
import { ReferenceUrduPage } from "@/components/reference/ReferenceUrduPage";

export const metadata: Metadata = {
  title: {
    absolute:
      "مدینۃ العلم اسلامک کالج — خواتین اور بچیوں کے لیے مستند اسلامی تعلیم",
  },
  description:
    "مدینۃ العلم اسلامک کالج کراچی کے بہادرآباد میں خواتین کے لیے مختص اسلامی تعلیمی ادارہ ہے جو 2016ء سے قرآن، درسِ نظامی اور اسلامی علوم آن کیمپس اور آن لائن فراہم کرتا ہے۔",
  openGraph: {
    type: "website",
    locale: "ur",
    siteName: "Madina-Tul-Ilm Islamic College",
    title:
      "مدینۃ العلم اسلامک کالج — خواتین اور بچیوں کے لیے مستند اسلامی تعلیم",
    description:
      "مدینۃ العلم اسلامک کالج کراچی کے بہادرآباد میں خواتین کے لیے مختص اسلامی تعلیمی ادارہ ہے جو 2016ء سے قرآن، درسِ نظامی اور اسلامی علوم آن کیمپس اور آن لائن فراہم کرتا ہے۔",
  },
};

export default function UrduHomePage() {
  return <ReferenceUrduPage />;
}