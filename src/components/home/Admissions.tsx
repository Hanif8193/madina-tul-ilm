import SectionHeading from "@/components/SectionHeading";
import AdmissionsTable from "@/components/AdmissionsTable";
import { SCHEDULE_NOTE } from "@/lib/data";
import { sectionPadding, wrap } from "@/lib/utils";

export default function Admissions() {
  return (
    <section id="admissions" className={sectionPadding} aria-labelledby="admissions-heading">
      <div className={wrap}>
        <SectionHeading
          eyebrow="Admissions"
          title="Class Schedule & Fees"
          description={SCHEDULE_NOTE}
          id="admissions-heading"
        />
        <AdmissionsTable />
      </div>
    </section>
  );
}