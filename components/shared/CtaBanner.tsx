import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Begin Your Journey of Knowledge Today",
  description = "Admissions are open for the 2026-27 academic year. Book a campus tour or speak with our admissions team to find the right programme for you or your child.",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-emerald-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-950/60 blur-3xl" />
        <div className="absolute -right-20 -bottom-40 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-cream-50 sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-emerald-100">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/admissions" size="lg" variant="light">
            Apply for Admission
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
          <Button href="/contact" size="lg" variant="outlineLight">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}