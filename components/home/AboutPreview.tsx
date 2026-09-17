import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const highlights = [
  "Fully qualified Hafiz, Qari and Mufti faculty",
  "Separate sections for boys and girls",
  "Modern purpose-built classrooms and Quran hall",
  "Balanced Quranic memorisation with academic study",
  "Tarbiyah and character training in every class",
];

export function AboutPreview() {
  return (
    <section className="bg-cream-200 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-cream-300 shadow-xl shadow-emerald-950/10">
              <Image
                src="/images/campus.svg"
                alt="Madina Tul Ilm campus"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-emerald-900 px-6 py-4 text-center shadow-xl sm:block">
              <p className="font-serif text-3xl font-bold text-cream-100">25+</p>
              <p className="text-sm font-semibold text-emerald-200">Years of Service</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold-600 uppercase">
              About Our College
            </p>
            <h2 className="font-serif text-3xl font-bold text-emerald-950 sm:text-4xl lg:leading-tight">
              Building a Foundation of Faith, Knowledge and Service
            </h2>
            <p className="mt-4 text-ink-600">
              Since 2001, Madina Tul Ilm has provided a caring, disciplined environment
              where young Muslims develop a strong connection with the Quran, master the
              sciences of the deen and prepare for life with confidence.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Learn about us
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}