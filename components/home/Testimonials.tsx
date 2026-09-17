import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteIcon } from "@/components/ui/icons";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-cream-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Community Says"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cream-300"
            >
              <QuoteIcon className="h-8 w-8 text-gold-300" />
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                {testimonial.quote}
              </p>
              <div className="mt-6 border-t border-cream-300 pt-4">
                <p className="text-sm font-bold text-emerald-900">{testimonial.name}</p>
                <p className="text-xs text-tan-600">{testimonial.role}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}