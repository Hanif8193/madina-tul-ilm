import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, StarIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -right-28 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold-100 blur-3xl" />
      </div>
      <Container className="relative flex flex-col items-center gap-14 py-16 sm:py-20 md:py-24 lg:flex-row lg:items-center lg:gap-20">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-900 uppercase ring-1 ring-cream-400">
            <StarIcon className="h-3.5 w-3.5 text-gold-500" />
            {siteConfig.fullName}
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-emerald-950 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Where Knowledge Begins and{" "}
            <span className="text-emerald-700">Character</span> is Built
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-600 sm:text-xl">
            An esteemed institution dedicated to authentic Islamic education, academic
            excellence and the moral development of young Muslims.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/courses" size="lg">
              Explore Courses
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
            <Button href="/admissions" variant="outline" size="lg">
              Apply Now
            </Button>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-600 lg:justify-start">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            Over 25 years of service to the community
          </p>
        </div>
        <div className="relative hidden w-full max-w-lg shrink-0 lg:block">
          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-cream-300 shadow-xl shadow-emerald-950/10">
            <Image
              src="/images/hero.svg"
              alt="Islamic education at Madina Tul Ilm"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-7 -left-7 hidden rounded-2xl bg-emerald-900 px-6 py-4 text-center shadow-xl sm:block">
            <p className="font-serif text-3xl font-bold text-cream-100">25+</p>
            <p className="text-sm font-semibold text-emerald-200">Years of Service</p>
          </div>
        </div>
      </Container>
    </section>
  );
}