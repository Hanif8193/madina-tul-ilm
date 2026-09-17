"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { JSX } from "react";

const LOGO = "/brand/logo-banner.png";

function PhiloFragment({
  step,
  isLast,
}: {
  step: { word: string; active: boolean };
  isLast: boolean;
}): JSX.Element {
  return (
    <>
      <div className={step.active ? "philo-step active" : "philo-step"}>
        <span className="dot"></span>
        <span className="word">{step.word}</span>
      </div>
      {!isLast ? <div className="philo-connector"></div> : null}
    </>
  );
}

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#dars-e-nizami", label: "Dars-e-Nizami" },
  { href: "#admissions", label: "Admissions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
];

const WHY_ROWS = [
  {
    num: "01",
    title: "Women-Focused Learning",
    body: "An environment built specifically for girls and women pursuing Islamic education, from foundational Qur'an classes to advanced scholarship.",
  },
  {
    num: "02",
    title: "Authentic Islamic Education",
    body: "Learning grounded in the Qur'an, Sunnah and the established scholarly tradition, delivered through a systematic curriculum.",
  },
  {
    num: "03",
    title: "On-Campus + Online",
    body: "Study in person at the Bahadurabad campus or join structured online classes — built for different stages of life.",
  },
  {
    num: "04",
    title: "Structured Islamic Sciences",
    body: "A clear pathway across Qur'an, Tafseer, Hadith, Fiqh, Seerah and Islamic History rather than isolated classes.",
  },
  {
    num: "05",
    title: "Knowledge & Character",
    body: "Education paired with tarbiyah, so learning translates into manners, character and everyday practice of Deen.",
  },
  {
    num: "06",
    title: "Established Since 2016",
    body: "A decade of continuous teaching, growth and community trust in Bahadurabad, Karachi.",
  },
];

const PROGRAMS = [
  {
    label: "A",
    title: "Qur'an Programs",
    items: [
      "Nazra Tul Qur'an",
      "Tajweed",
      "Hifz-ul-Qur'an",
      "Hifz Maintenance",
      "Quran Translation",
      "Quran Understanding",
    ],
  },
  {
    label: "B",
    title: "Islamic Studies",
    items: [
      "Dars-e-Nizami",
      "Tafseer",
      "Hadith",
      "Ahkam e Shariat",
      "Seerah",
      "Islamic History",
    ],
  },
  {
    label: "C",
    title: "Specialized Programs",
    items: ["Takhassus Programs", "Short Courses", "Workshops", "Certificate Courses"],
  },
  {
    label: "D",
    title: "Children's Programs",
    items: ["Nazra", "Hifz", "Tajweed", "Islamic Tarbiyah", "Summer Camps"],
  },
];

const FEATURE_STATS = [
  { num: "5", lab: "YEARS" },
  { num: "2", lab: "STUDY MODES" },
  { num: "14+", lab: "SUBJECTS" },
];

const SUBJECT_CHIPS = [
  "Qur'an",
  "Tafseer",
  "Hadith",
  "Fiqh",
  "Arabic",
  "Seerah",
  "Aqeedah",
];

const FEATURE_ROWS = [
  { dt: "Duration", dd: "5 years" },
  { dt: "On-Campus", dd: "6 days/week, or once-a-week track" },
  { dt: "Online", dd: "6 evenings a week" },
  {
    dt: "Subjects",
    dd: "Qur'an, Tafseer, Usul-e-Tafseer, Hadith, Usul-e-Hadith, Fiqh, Usul-ul-Fiqh, Arabic, Seerah, Aqeedah, Islamic History, Contemporary Issues, Research",
  },
  { dt: "Eligibility", dd: "Girls & women meeting admission requirements" },
];

const PHILO_STEPS = [
  { word: "Knowledge", active: true },
  { word: "Understanding", active: false },
  { word: "Tarbiyah", active: false },
  { word: "Character", active: false },
];

const TIMELINE_ROWS = [
  { year: "2016", title: "Foundation", body: "Madina-Tul-Ilm Islamic College is established as a women-focused Islamic educational institution.", present: false },
  { year: "2017–2020", title: "Growth & Expansion", body: "The institution grows its teaching community and structured programs.", present: false },
  { year: "2021–2024", title: "New Programs & Online Education", body: "Online learning is introduced, extending access beyond the Bahadurabad campus.", present: false },
  { year: "2025", title: "10 Years of Madina-Tul-Ilm", body: "The college marks a decade of teaching and community trust.", present: false },
  { year: "Present", title: "Continuing the Mission", body: "Madina-Tul-Ilm continues to teach, grow and serve students on-campus and online.", present: true },
];

const GALLERY_TILES = [
  {
    label: "Campus Life",
    sub: "[CONTENT NEEDED: photography]",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.06" />
        <circle cx="170" cy="20" r="60" fill="#D6B45C" opacity="0.12" />
      </>
    ),
  },
  {
    label: "Jamia & Campus",
    sub: "[CONTENT NEEDED: photography]",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.09" />
        <circle cx="20" cy="180" r="70" fill="#D6B45C" opacity="0.1" />
      </>
    ),
  },
  {
    label: "Mehfils",
    sub: "[CONTENT NEEDED: photography]",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.05" />
        <circle cx="100" cy="100" r="90" fill="#D6B45C" opacity="0.08" />
      </>
    ),
  },
  {
    label: "Competitions",
    sub: "[CONTENT NEEDED: photography]",
    pattern: <rect width="200" height="200" fill="#1F3A2E" opacity="0.08" />,
  },
  {
    label: "Celebrations",
    sub: "Mela · 14th August",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.07" />
        <circle cx="160" cy="160" r="50" fill="#D6B45C" opacity="0.14" />
      </>
    ),
  },
  {
    label: "Institutional Moments",
    sub: "[CONTENT NEEDED: photography]",
    pattern: <rect width="200" height="200" fill="#1F3A2E" opacity="0.06" />,
  },
];

const ADMISSIONS_ROWS = [
  { course: "Nazra", days: "Mon–Sat", time: "8–1 & 3–4:30", format: "Onsite", fee: "2,000" },
  { course: "Hifz-ul-Qur'an", days: "Mon–Sat", time: "8–2", format: "Onsite", fee: "5,000" },
  { course: "Tafseer", days: "Tuesday", time: "—", format: "Onsite", fee: "3,000" },
  { course: "Hadith (Adab-ul-Mufrad)", days: "Wednesday", time: "—", format: "Onsite", fee: "2,500 (one-time)" },
  { course: "Tafseer", days: "Thursday", time: "—", format: "Onsite", fee: "2,000" },
  { course: "Takhassus fil Qur'an", days: "Wednesday", time: "3–6", format: "Onsite", fee: "2,500" },
  { course: "Dars-e-Nizami", days: "Mon–Sat", time: "—", format: "Onsite", fee: "3,000" },
  { course: "Dars-e-Nizami", days: "Saturday", time: "12–2", format: "Onsite", fee: "3,000" },
  { course: "Dars-e-Nizami", days: "Mon–Fri", time: "5:30–8:30", format: "Online", fee: "3,000" },
  { course: "Arabic Language", days: "Mon, Tue, Thu", time: "3–4", format: "Online", fee: "1,500" },
  { course: "Ahkam-e-Shariat", days: "Saturday", time: "11–1", format: "Onsite", fee: "500" },
  { course: "Seerah", days: "Monday", time: "3:30–4:30", format: "Onsite", fee: "2,000" },
  { course: "Shamail Shareef", days: "Monday", time: "4:30–5:30", format: "Onsite", fee: "1,000" },
  { course: "Tafseer", days: "Saturday", time: "3 pm", format: "Online", fee: "2,000" },
];

const FOOTER_NAVIGATE = [
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#dars-e-nizami", label: "Dars-e-Nizami" },
  { href: "#admissions", label: "Admissions" },
  { href: "#gallery", label: "Gallery" },
];

const FOOTER_PROGRAMS = [
  "Qur'an Programs",
  "Islamic Studies",
  "Specialized Programs",
  "Children's Programs",
];

const FOOTER_CONTACT_LINKS = [
  { href: "https://wa.me/923133502333", label: "WhatsApp: 0313-3502333" },
  { href: "https://m.facebook.com/Madinatulilmislamicacademy", label: "Facebook" },
  { href: "https://www.instagram.com/madinatulilmislamiccollege", label: "Instagram" },
];

const FOOTER_SOCIALS = [
  {
    href: "https://m.facebook.com/Madinatulilmislamicacademy",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/madinatulilmislamiccollege",
    label: "Instagram",
  },
  { href: "https://wa.me/923133502333", label: "WhatsApp" },
];

export function ReferencePage() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langPressed, setLangPressed] = useState<"en" | "ur">("en");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const onScroll = () => {
      if (window.scrollY > 8) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header" id="siteHeader" ref={headerRef}>
        <div className="header-inner">
          <a
            href="#home"
            className="brand"
            aria-label="Madina-Tul-Ilm Islamic College — Home"
          >
            <img src={LOGO} alt="" />
          </a>
          <nav className="main-nav" aria-label="Primary">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                type="button"
                aria-pressed={langPressed === "en"}
                onClick={() => setLangPressed("en")}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={langPressed === "ur"}
                lang="ur"
                onClick={() => {
                  setLangPressed("ur");
                  router.push("/ur");
                }}
              >
                اردو
              </button>
            </div>
            <a href="#admissions" className="btn btn-primary">
              Enroll Now
            </a>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={drawerOpen ? "mobile-drawer open" : "mobile-drawer"} id="mobileDrawer">
        <div className="drawer-top">
          <img src={LOGO} alt="" />
          <button className="close-drawer" id="closeDrawer" aria-label="Close menu" onClick={closeDrawer}>
            &times;
          </button>
        </div>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeDrawer}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="drawer-actions">
          <a href="#admissions" className="btn btn-primary" onClick={closeDrawer}>
            Enroll Now
          </a>
          <a href="#programs" className="btn btn-ghost" onClick={closeDrawer}>
            Explore Programs
          </a>
        </div>
      </div>

      <main id="main">
        {/* 01 HERO */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow fade-up d1">MADINA-TUL-ILM ISLAMIC COLLEGE</p>
              <h1 className="fade-up d2">
                Authentic Islamic Education for Women &amp; Girls
              </h1>
              <p className="hero-lede fade-up d3">
                Build a strong foundation in Qur&apos;an, Sunnah and the Islamic
                sciences through structured learning, tarbiyah and character
                development.
              </p>
              <div className="hero-ctas fade-up d4">
                <a href="#programs" className="btn btn-primary">
                  Explore Programs
                </a>
                <a href="#admissions" className="btn btn-ghost">
                  Enroll Now
                </a>
              </div>
              <div className="hero-tag fade-up d4">
                <span className="dot"></span> Established 2016{"\u00A0"}{"\u00B7"}
                {"\u00A0"}On-Campus + Online
              </div>
            </div>
            <div className="hero-art fade-up d3" aria-hidden="true">
              <svg viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1F3A2E" />
                    <stop offset="100%" stopColor="#152A22" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="520" height="560" fill="none" />
                <g stroke="#D6B45C" strokeWidth="1" opacity="0.35">
                  <line x1="40" y1="80" x2="480" y2="80" />
                  <line x1="40" y1="120" x2="480" y2="120" />
                  <line x1="40" y1="160" x2="480" y2="160" />
                </g>
                <path
                  d="M110 520 V300 C110 210 180 150 260 150 C340 150 410 210 410 300 V520"
                  fill="none"
                  stroke="#1F3A2E"
                  strokeWidth="3"
                />
                <path
                  d="M150 520 V310 C150 240 197 190 260 190 C323 190 370 240 370 310 V520"
                  fill="none"
                  stroke="#D6B45C"
                  strokeWidth="2"
                />
                <g stroke="#D6B45C" strokeWidth="1.4" fill="none" opacity="0.8">
                  <path d="M260 150 C255 130 265 118 260 100" />
                  <circle cx="260" cy="96" r="4" fill="#D6B45C" stroke="none" />
                </g>
                <g stroke="#1F3A2E" strokeWidth="1" opacity="0.5">
                  <line x1="40" y1="520" x2="480" y2="520" />
                </g>
                <text
                  x="260"
                  y="470"
                  textAnchor="middle"
                  fontFamily="Bricolage Grotesque, sans-serif"
                  fontSize="72"
                  fontWeight="700"
                  fill="#1F3A2E"
                  opacity="0.9"
                >
                  10
                </text>
                <text
                  x="260"
                  y="498"
                  textAnchor="middle"
                  fontFamily="Manrope, sans-serif"
                  fontSize="14"
                  fontWeight="700"
                  letterSpacing="2"
                  fill="#68736D"
                >
                  YEARS OF TARBIYAH
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* 02 INTRO / POSITIONING */}
        <section id="about">
          <div className="wrap">
            <div className="intro-grid">
              <div>
                <p className="eyebrow">ABOUT US</p>
                <h2>Learn Deen With Knowledge, Understanding &amp; Tarbiyah</h2>
              </div>
              <div className="intro-copy">
                <p>
                  Madina-Tul-Ilm Islamic College is a women-focused educational
                  institution established in 2016 with a vision of making authentic
                  Islamic learning accessible, structured, and relevant to the needs
                  of today&apos;s generation.
                </p>
                <p>
                  We provide an intellectually engaging environment where students
                  pursue Islamic knowledge through a systematic approach grounded in
                  the Qur&apos;an, Sunnah, and established scholarly tradition —
                  cultivating thoughtful, principled and spiritually grounded
                  individuals who carry their knowledge into their families,
                  communities and wider society.
                </p>
                <p>
                  Today, the institution continues to expand its educational outreach
                  through both on-campus and online learning, creating opportunities
                  for women to pursue Islamic education at different stages of life.
                </p>
              </div>
            </div>
            <div className="meta-row">
              <div className="meta-item">
                <div className="meta-num">2016</div>
                <div className="meta-label">Founded</div>
              </div>
              <div className="meta-item">
                <div className="meta-num">On-Campus + Online</div>
                <div className="meta-label">Learning Format</div>
              </div>
              <div className="meta-item">
                <div className="meta-num">Women-Focused</div>
                <div className="meta-label">Education</div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 WHY MADINA-TUL-ILM */}
        <section style={{ background: "var(--beige)", paddingTop: "100px", paddingBottom: "100px" }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">WHY MADINA-TUL-ILM</p>
              <h2>A Structured Path to Islamic Learning</h2>
            </div>
            <div className="why-list">
              {WHY_ROWS.map((row) => (
                <div className="why-row" key={row.num}>
                  <span className="num">{row.num}</span>
                  <div>
                    <h3>{row.title}</h3>
                    <p>{row.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 PROGRAMS */}
        <section id="programs">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">PROGRAMS</p>
              <h2>Explore Our Programs</h2>
              <p>
                A structured ecosystem of Qur&apos;anic, Islamic studies, specialized
                and children&apos;s programs — for every stage of learning.
              </p>
            </div>
            <div className="programs-grid">
              {PROGRAMS.map((cat) => (
                <div className="program-cat" key={cat.label}>
                  <div className="cat-label">{cat.label}</div>
                  <h3>{cat.title}</h3>
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 DARS-E-NIZAMI FEATURE */}
        <section className="feature-dark" id="dars-e-nizami">
          <div className="wrap feature-grid">
            <div>
              <p className="eyebrow feature-eyebrow">FLAGSHIP PROGRAM</p>
              <h2>Dars-e-Nizami Aalimah Program</h2>
              <p>
                A comprehensive Aalimah course combining traditional Islamic
                scholarship with contemporary learning — developing a strong
                foundation in Qur&apos;an, Hadith, Arabic, Fiqh and other Islamic
                sciences while addressing modern challenges and practical needs.
              </p>
              <p>
                Designed for girls and women who wish to pursue structured Islamic
                education, deepen their understanding of Deen, and develop Arabic
                and research skills. Open to those who meet the college&apos;s
                admission requirements.
              </p>
              <div className="feature-stats">
                {FEATURE_STATS.map((stat) => (
                  <div className="feature-stat" key={stat.lab}>
                    <div className="num">{stat.num}</div>
                    <div className="lab">{stat.lab}</div>
                  </div>
                ))}
              </div>
              <div className="subject-chips">
                {SUBJECT_CHIPS.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className="hero-ctas" style={{ marginTop: 8 }}>
                <a href="#admissions" className="btn btn-gold">
                  Explore Dars-e-Nizami
                </a>
              </div>
            </div>
            <div className="feature-panel">
              <dl>
                {FEATURE_ROWS.map((row) => (
                  <div className="row" key={row.dt}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
              <p className="feature-note">
                Class timings and fees vary by track — see the admissions schedule
                below or contact us on WhatsApp for the current intake.
              </p>
            </div>
          </div>
        </section>

        {/* 06 LEARNING PHILOSOPHY */}
        <section className="philosophy">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              OUR APPROACH
            </p>
            <h2>Knowledge That Shapes Character</h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: "52ch",
                margin: "16px auto 0",
              }}
            >
              Islamic education at Madina-Tul-Ilm is not only information acquisition
              — it is a progression that carries knowledge into everyday character.
            </p>
            <div className="philo-flow">
              {PHILO_STEPS.map((step, index) => (
                <PhiloFragment
                  key={step.word}
                  step={step}
                  isLast={index === PHILO_STEPS.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 07 INSTITUTION JOURNEY */}
        <section style={{ background: "var(--beige)" }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">OUR HISTORY</p>
              <h2>The Institution&apos;s Journey</h2>
            </div>
            <div className="timeline">
              {TIMELINE_ROWS.map((row) => (
                <div
                  className={row.present ? "tl-row present" : "tl-row"}
                  key={row.year}
                >
                  <div className="tl-year">{row.year}</div>
                  <div className="tl-body">
                    <h4>{row.title}</h4>
                    <p>{row.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 FOUNDER / PRINCIPAL */}
        <section>
          <div className="wrap founder-grid">
            <div className="founder-frame">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <circle cx="100" cy="70" r="34" fill="none" stroke="#E8D39A" strokeWidth="2.5" />
                <path
                  d="M40 175 C40 130 65 108 100 108 C135 108 160 130 160 175"
                  fill="none"
                  stroke="#E8D39A"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div>
              <p className="founder-role">FOUNDER &amp; PRINCIPAL</p>
              <h2 className="founder-name">Safia Qadri</h2>
              <blockquote>
                Combining authentic Islamic scholarship with a structured,
                contemporary approach to learning.
              </blockquote>
              <p className="bio">
                Safia Qadri is the Founder and Principal of Madina-Tul-Ilm Islamic
                College and a dedicated educator committed to strengthening Islamic
                scholarship and education among women. With academic qualifications
                in Islamic studies and years of educational leadership, she
                established the institution with a vision of combining authentic
                Islamic scholarship with a structured, contemporary approach to
                learning.
              </p>
              <p className="bio">
                Under her leadership, Madina-Tul-Ilm has developed as a platform for
                academic excellence, spiritual growth, character development, and
                the cultivation of Ishq-e-Mustafa ﷺ among the younger generation.
              </p>
            </div>
          </div>
        </section>

        {/* 09 GALLERY */}
        <section id="gallery" style={{ background: "var(--beige)" }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">GALLERY</p>
              <h2>Life at Madina-Tul-Ilm</h2>
            </div>
            <div className="gallery-grid">
              {GALLERY_TILES.map((tile) => (
                <div className="gallery-tile" key={tile.label}>
                  <svg
                    className="pattern"
                    viewBox="0 0 200 200"
                    preserveAspectRatio="none"
                  >
                    {tile.pattern}
                  </svg>
                  <div className="tile-label">{tile.label}</div>
                  <div className="tile-sub">{tile.sub}</div>
                </div>
              ))}
            </div>
            <p className="gallery-note">
              Real campus and event photography to be added — placeholders shown
              reflect the categories provided.
            </p>
          </div>
        </section>

        {/* 10 ADMISSIONS */}
        <section id="admissions">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">ADMISSIONS</p>
              <h2>Class Schedule &amp; Fees</h2>
              <p>
                A snapshot of current classes. Timings and intake may change —
                confirm the latest schedule on WhatsApp before enrolling.
              </p>
            </div>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Days</th>
                    <th>Time</th>
                    <th>Format</th>
                    <th>Fee (PKR)</th>
                  </tr>
                </thead>
                <tbody>
                  {ADMISSIONS_ROWS.map((row) => (
                    <tr key={`${row.course}-${row.days}-${row.time}-${row.fee}`}>
                      <td>{row.course}</td>
                      <td>{row.days}</td>
                      <td>{row.time}</td>
                      <td>{row.format}</td>
                      <td className="fee">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="adm-foot">
              Have questions about eligibility or timings?{" "}
              <a href="#contact">Contact our admissions team</a> or enroll directly
              via WhatsApp.
            </p>
          </div>
        </section>

        {/* 11 FINAL CTA */}
        <section className="final-cta">
          <div className="wrap">
            <h2>Begin Your Journey in Islamic Learning</h2>
            <p>
              Structured Qur&apos;an and Islamic sciences, taught with tarbiyah and
              character at their center — on-campus in Bahadurabad or online,
              wherever you are.
            </p>
            <div className="hero-ctas">
              <a href="#programs" className="btn btn-ghost">
                Explore Programs
              </a>
              <a href="#admissions" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact">
        <div className="wrap footer-grid">
          <div>
            <div className="brand">
              <img src={LOGO} alt="" />
            </div>
            <p className="desc">
              A women-focused Islamic educational institution nurturing knowledge,
              understanding and tarbiyah since 2016.
            </p>
          </div>
          <div>
            <h5>Navigate</h5>
            <ul>
              {FOOTER_NAVIGATE.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Programs</h5>
            <ul>
              {FOOTER_PROGRAMS.map((label) => (
                <li key={label}>
                  <a href="#programs">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                House No. 238, Block-3, Street 13, Bahadur Shah Zafar Road,
                B-Y-J-C-H-S, Opposite Rashid Seafood, Next to Askari Bank,
                Bahadurabad, Karachi
              </li>
              {FOOTER_CONTACT_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>
            © <span id="year">{new Date().getFullYear()}</span> Madina-Tul-Ilm
            Islamic College. All rights reserved.
          </span>
          <div className="footer-socials">
            {FOOTER_SOCIALS.map((link) => (
              <a key={link.href} href={link.href} aria-label={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}