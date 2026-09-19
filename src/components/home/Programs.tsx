import SectionHeading from "@/components/SectionHeading";
import { PROGRAM_CATEGORIES } from "@/lib/data";
import { sectionPadding, wrap } from "@/lib/utils";

export default function Programs() {
  return (
    <section id="programs" className={sectionPadding} aria-labelledby="programs-heading">
      <div className={wrap}>
        <SectionHeading
          eyebrow="Programs"
          title="Explore Our Programs"
          description="A structured ecosystem of Qur'anic, Islamic studies, specialized and children's programs — for every stage of learning."
          id="programs-heading"
        />
        <div className="grid grid-cols-1 border border-[var(--line)] bg-[var(--line)] gap-px md:grid-cols-2">
          {PROGRAM_CATEGORIES.map((category) => (
            <article key={category.title} className="bg-ivory p-8 md:p-10">
              <p className="text-[12.5px] font-bold uppercase tracking-[0.05em] text-gold">
                {category.label}
              </p>
              <h3 className="mt-1.5 font-display text-[20px] font-bold">{category.title}</h3>
              <ul className="mt-5 list-none p-0 m-0">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-t border-[var(--line)] py-3 text-[15.5px] first:border-t-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}