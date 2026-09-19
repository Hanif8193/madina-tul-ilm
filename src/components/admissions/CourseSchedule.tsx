import { CONTACT_INFO } from "@/lib/data";

type ScheduleMode = "Onsite" | "Online" | null;

type ScheduleRow = {
  course: string;
  days: string;
  time: string;
  timeTbc?: boolean;
  // null renders as "–" in the desktop table and "To be confirmed" on mobile cards
  mode: ScheduleMode;
  fee: string;
};

// Content reproduced exactly from the original admissions.html source.
const SCHEDULE_ROWS: ScheduleRow[] = [
  { course: "Nazra", days: "Mon – Sat", time: "8:00 – 1:00", mode: "Onsite", fee: "2,000" },
  {
    course: "Hifz-ul-Qur'an",
    days: "Mon – Sat",
    time: "3:00 – 4:30 / 8:00 – 2:00",
    mode: "Onsite",
    fee: "5,000",
  },
  { course: "Tafseer", days: "Tuesday", time: "To be confirmed", timeTbc: true, mode: "Onsite", fee: "3,000" },
  {
    course: "Hadith (Adab ul Mufrad)",
    days: "Wednesday",
    time: "To be confirmed",
    timeTbc: true,
    mode: "Onsite",
    fee: "2,500 (one time)",
  },
  { course: "Tafseer", days: "Thursday", time: "To be confirmed", timeTbc: true, mode: "Onsite", fee: "2,000" },
  {
    course: "Thakhassus fil Quran",
    days: "Wednesday",
    time: "To be confirmed",
    timeTbc: true,
    mode: null,
    fee: "2,500",
  },
  {
    course: "Dars-e-Nizami",
    days: "Mon – Sat",
    time: "To be confirmed",
    timeTbc: true,
    mode: "Onsite",
    fee: "3,000",
  },
  { course: "Dars-e-Nizami", days: "Saturday", time: "12:00 – 2:00", mode: "Onsite", fee: "3,000" },
  { course: "Dars-e-Nizami", days: "Mon – Fri", time: "5:30 – 8:30", mode: "Online", fee: "3,000" },
  { course: "Arabic Language", days: "Mon / Tue / Thu", time: "3:00 – 4:00", mode: "Online", fee: "1,500" },
  { course: "Ahkam e Shariat", days: "Saturday", time: "11:00 – 1:00", mode: "Onsite", fee: "500" },
  { course: "Seerah", days: "Monday", time: "3:30 – 4:30", mode: "Onsite", fee: "2,000" },
  { course: "Shamail Shareef", days: "Monday", time: "4:30 – 5:30", mode: "Onsite", fee: "1,000" },
  { course: "Tafseer", days: "Saturday", time: "3:00 – 6:00", mode: "Online", fee: "2,000" },
];

const REQUIREMENTS = "To be confirmed";

function ModeBadge({ mode }: { mode: ScheduleMode }) {
  if (mode === null) {
    return <span>–</span>;
  }
  return (
    <span
      className={`px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.08em] ${
        mode === "Online" ? "bg-green/[0.08] text-green" : "bg-gold/[0.12] text-[#8B6B1A]"
      }`}
    >
      {mode}
    </span>
  );
}

function Cell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td
      className={`border-b border-green/[0.06] px-4 py-3.5 text-[13px] whitespace-nowrap text-muted ${className}`}
    >
      {children}
    </td>
  );
}

export default function CourseSchedule() {
  return (
    <>
      {/* Desktop table — hidden below 900px, matching the original */}
      <div className="hidden overflow-x-auto min-[900px]:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green">
              {["Course", "Days", "Time", "Mode", "Requirements", "Fee (PKR)", "Enroll"].map(
                (heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="px-4 py-3.5 text-left text-[11px] font-bold tracking-[0.12em] whitespace-nowrap text-gold uppercase"
                  >
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {SCHEDULE_ROWS.map((row) => (
              <tr
                key={`${row.course}-${row.days}-${row.time}-${row.fee}`}
                className="odd:bg-ivory even:bg-beige transition-colors duration-150 hover:bg-gold-light/20"
              >
                <Cell className="text-[14px] font-semibold text-ink">{row.course}</Cell>
                <Cell>{row.days}</Cell>
                <Cell className={row.timeTbc ? "italic text-gold" : undefined}>{row.time}</Cell>
                <Cell>
                  <ModeBadge mode={row.mode} />
                </Cell>
                <Cell className="italic text-gold">{REQUIREMENTS}</Cell>
                <Cell className="text-[14px] font-semibold text-ink">{row.fee}</Cell>
                <Cell>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block whitespace-nowrap bg-green px-3.5 py-1.5 text-[12px] font-semibold text-ivory transition-colors duration-200 hover:bg-green-dark"
                  >
                    Enroll
                  </a>
                </Cell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards — shown below 900px, matching the original */}
      <div className="flex flex-col gap-4 min-[900px]:hidden">
        {SCHEDULE_ROWS.map((row) => (
          <div
            key={`m-${row.course}-${row.days}-${row.time}-${row.fee}`}
            className="border border-green/[0.08] bg-beige p-6"
          >
            <div className="mb-3 text-[16px] font-bold">{row.course}</div>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <div className="mb-1 text-[10px] font-bold tracking-[0.12em] text-gold uppercase">
                  Days
                </div>
                <div className="text-[13px] text-muted">{row.days}</div>
              </div>
              <div>
                <div className="mb-1 text-[10px] font-bold tracking-[0.12em] text-gold uppercase">
                  Time
                </div>
                <div className="text-[13px] text-muted">{row.time}</div>
              </div>
              <div>
                <div className="mb-1 text-[10px] font-bold tracking-[0.12em] text-gold uppercase">
                  Mode
                </div>
                <div className="text-[13px] text-muted">{row.mode ?? "To be confirmed"}</div>
              </div>
              <div>
                <div className="mb-1 text-[10px] font-bold tracking-[0.12em] text-gold uppercase">
                  Fee (PKR)
                </div>
                <div className="text-[13px] text-muted">{row.fee}</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-1 text-[10px] font-bold tracking-[0.12em] text-gold uppercase">
                Requirements
              </div>
              <div className="text-[13px] text-gold italic">{REQUIREMENTS}</div>
            </div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green px-5 py-3 text-center text-[13px] font-semibold text-ivory"
            >
              Enroll Now via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
