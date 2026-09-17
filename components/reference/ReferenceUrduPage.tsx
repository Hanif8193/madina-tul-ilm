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
  { href: "#home", label: "ہوم" },
  { href: "#about", label: "تعارف" },
  { href: "#programs", label: "پروگرامز" },
  { href: "#dars-e-nizami", label: "درسِ نظامی" },
  { href: "#admissions", label: "داخلہ" },
  { href: "#gallery", label: "گیلری" },
  { href: "#contact", label: "رابطہ" },
];

const WHY_ROWS = [
  {
    num: "01",
    title: "خواتین کے لیے اختصاصی تعلیم",
    body: "ایسی تعلیمی فضا جو بچیوں اور خواتین کے لیے بنائی گئی ہے — بنیادی قرآن کی کلاسز سے لے کر اعلیٰ علمی مدارج تک۔",
  },
  {
    num: "02",
    title: "مستند اسلامی تعلیم",
    body: "قرآن، سنت اور مستند علمی روایت پر مبنی تعلیم، جو منظم نصاب کے ذریعے فراہم کی جاتی ہے۔",
  },
  {
    num: "03",
    title: "آن کیمپس + آن لائن",
    body: "بہادرآباد کیمپس میں انفرادی طور پر یا منظم آن لائن کلاسز کے ذریعے تعلیم حاصل کریں — زندگی کے مختلف مراحل کے لیے۔",
  },
  {
    num: "04",
    title: "منظم اسلامی علوم",
    body: "قرآن، تفسیر، حدیث، فقہ، سیرت اور اسلامی تاریخ کا واضح راستہ، بجائے الگ الگ کلاسز کے۔",
  },
  {
    num: "05",
    title: "علم اور کردار",
    body: "تعلیم کے ساتھ تربیت، تاکہ سیکھا ہوا علم اخلاق، کردار اور روزمرہ کے دین پر عمل میں ڈھل جائے۔",
  },
  {
    num: "06",
    title: "قیام 2016ء",
    body: "کراچی کے بہادرآباد میں دس سال کا مسلسل تدریسی سفر، ترقی اور برادری کا اعتماد۔",
  },
];

const PROGRAMS = [
  {
    label: "A",
    title: "قرآن پروگرامز",
    items: [
      "ناظرہ قرآن",
      "تجوید",
      "حفظ القرآن",
      "حفظ کی بحالی",
      "قرآن کا ترجمہ",
      "قرآن کا فہم",
    ],
  },
  {
    label: "B",
    title: "اسلامی علوم",
    items: [
      "درسِ نظامی",
      "تفسیر",
      "حدیث",
      "احکامِ شریعت",
      "سیرت",
      "اسلامی تاریخ",
    ],
  },
  {
    label: "C",
    title: "خصوصی پروگرامز",
    items: ["تخصص پروگرامز", "مختصر کورسز", "ورکشاپس", "سرٹیفکیٹ کورسز"],
  },
  {
    label: "D",
    title: "بچوں کے پروگرامز",
    items: ["ناظرہ", "حفظ", "تجوید", "اسلامی تربیت", "سمر کیمپس"],
  },
];

const FEATURE_STATS = [
  { num: "5", lab: "سال" },
  { num: "2", lab: "طرزِ تعلیم" },
  { num: "14+", lab: "مضامین" },
];

const SUBJECT_CHIPS = [
  "قرآن",
  "تفسیر",
  "حدیث",
  "فقہ",
  "عربی",
  "سیرت",
  "عقیدہ",
];

const FEATURE_ROWS = [
  { dt: "مدت", dd: "5 سال" },
  { dt: "آن کیمپس", dd: "ہفتے میں 6 دن، یا ہفتہ وار ٹریک" },
  { dt: "آن لائن", dd: "ہفتے میں 6 شامیں" },
  {
    dt: "مضامین",
    dd: "قرآن، تفسیر، اصولِ تفسیر، حدیث، اصولِ حدیث، فقہ، اصولِ فقہ، عربی، سیرت، عقیدہ، اسلامی تاریخ، عصری مسائل، تحقیق",
  },
  { dt: "اہلیت", dd: "بچیاں اور خواتین جو داخلے کی شرائط پوری کریں" },
];

const PHILO_STEPS = [
  { word: "علم", active: true },
  { word: "فہم", active: false },
  { word: "تربیت", active: false },
  { word: "کردار", active: false },
];

const TIMELINE_ROWS = [
  { year: "2016", title: "بنیاد", body: "مدینۃ العلم اسلامک کالج خواتین کے لیے مختص اسلامی تعلیمی ادارے کے طور پر قائم ہوا۔", present: false },
  { year: "2017–2020", title: "ترقی اور توسیع", body: "ادارے نے اپنی تدریسی برادری اور منظم پروگرامز کو وسعت دی۔", present: false },
  { year: "2021–2024", title: "نئے پروگرامز اور آن لائن تعلیم", body: "آن لائن تعلیم کا آغاز ہوا، جس سے بہادرآباد کیمپس سے باہر بھی رسائی بڑھی۔", present: false },
  { year: "2025", title: "مدینۃ العلم کے 10 سال", body: "کالج نے تدریس اور برادری کے اعتماد کی دہائی مکمل کی۔", present: false },
  { year: "موجودہ", title: "مشن کا تسلسل", body: "مدینۃ العلم آن کیمپس اور آن لائن تدریس، ترقی اور طالبات کی خدمت جاری رکھے ہوئے ہے۔", present: true },
];

const GALLERY_TILES = [
  {
    label: "کیمپس لائف",
    sub: "[CONTENT NEEDED: photography]",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.06" />
        <circle cx="170" cy="20" r="60" fill="#D6B45C" opacity="0.12" />
      </>
    ),
  },
  {
    label: "جامعہ اور کیمپس",
    sub: "[CONTENT NEEDED: photography]",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.09" />
        <circle cx="20" cy="180" r="70" fill="#D6B45C" opacity="0.1" />
      </>
    ),
  },
  {
    label: "محافل",
    sub: "[CONTENT NEEDED: photography]",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.05" />
        <circle cx="100" cy="100" r="90" fill="#D6B45C" opacity="0.08" />
      </>
    ),
  },
  {
    label: "مقابلہ جات",
    sub: "[CONTENT NEEDED: photography]",
    pattern: <rect width="200" height="200" fill="#1F3A2E" opacity="0.08" />,
  },
  {
    label: "تقریبات",
    sub: "میلہ · 14 اگست",
    pattern: (
      <>
        <rect width="200" height="200" fill="#1F3A2E" opacity="0.07" />
        <circle cx="160" cy="160" r="50" fill="#D6B45C" opacity="0.14" />
      </>
    ),
  },
  {
    label: "ادارتی لمحات",
    sub: "[CONTENT NEEDED: photography]",
    pattern: <rect width="200" height="200" fill="#1F3A2E" opacity="0.06" />,
  },
];

const ADMISSIONS_ROWS = [
  { course: "ناظرہ", days: "پیر–ہفتہ", time: "8–1 & 3–4:30", format: "آن کیمپس", fee: "2,000" },
  { course: "حفظ القرآن", days: "پیر–ہفتہ", time: "8–2", format: "آن کیمپس", fee: "5,000" },
  { course: "تفسیر", days: "منگل", time: "—", format: "آن کیمپس", fee: "3,000" },
  { course: "حدیث (ادب المفرد)", days: "بدھ", time: "—", format: "آن کیمپس", fee: "2,500 (ایک بار)" },
  { course: "تفسیر", days: "جمعرات", time: "—", format: "آن کیمپس", fee: "2,000" },
  { course: "تخصص فی القرآن", days: "بدھ", time: "3–6", format: "آن کیمپس", fee: "2,500" },
  { course: "درسِ نظامی", days: "پیر–ہفتہ", time: "—", format: "آن کیمپس", fee: "3,000" },
  { course: "درسِ نظامی", days: "ہفتہ", time: "12–2", format: "آن کیمپس", fee: "3,000" },
  { course: "درسِ نظامی", days: "پیر–جمعہ", time: "5:30–8:30", format: "آن لائن", fee: "3,000" },
  { course: "عربی زبان", days: "پیر، منگل، جمعرات", time: "3–4", format: "آن لائن", fee: "1,500" },
  { course: "احکامِ شریعت", days: "ہفتہ", time: "11–1", format: "آن کیمپس", fee: "500" },
  { course: "سیرت", days: "پیر", time: "3:30–4:30", format: "آن کیمپس", fee: "2,000" },
  { course: "شمائلِ شریف", days: "پیر", time: "4:30–5:30", format: "آن کیمپس", fee: "1,000" },
  { course: "تفسیر", days: "ہفتہ", time: "3 بجے شام", format: "آن لائن", fee: "2,000" },
];

const FOOTER_NAVIGATE = [
  { href: "#about", label: "تعارف" },
  { href: "#programs", label: "پروگرامز" },
  { href: "#dars-e-nizami", label: "درسِ نظامی" },
  { href: "#admissions", label: "داخلہ" },
  { href: "#gallery", label: "گیلری" },
];

const FOOTER_PROGRAMS = [
  "قرآن پروگرامز",
  "اسلامی علوم",
  "خصوصی پروگرامز",
  "بچوں کے پروگرامز",
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

export function ReferenceUrduPage() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langPressed, setLangPressed] = useState<"en" | "ur">("ur");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const prevLang = html.lang;
    const prevDir = html.dir;
    html.lang = "ur";
    html.dir = "rtl";
    return () => {
      html.lang = prevLang;
      html.dir = prevDir;
    };
  }, []);

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
    <div dir="rtl" lang="ur" className="ur-page">
      <a href="#main" className="skip-link">
        مواد پر جائیں
      </a>

      <header className="site-header" id="siteHeader" ref={headerRef}>
        <div className="header-inner">
          <a
            href="#home"
            className="brand"
            aria-label="مدینۃ العلم اسلامک کالج — ہوم"
          >
            <img src={LOGO} alt="" />
          </a>
          <nav className="main-nav" aria-label="مرکزی">
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
            <div className="lang-toggle" role="group" aria-label="زبان">
              <button
                type="button"
                aria-pressed={langPressed === "en"}
                onClick={() => {
                  setLangPressed("en");
                  router.push("/");
                }}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={langPressed === "ur"}
                lang="ur"
                onClick={() => setLangPressed("ur")}
              >
                اردو
              </button>
            </div>
            <a href="#admissions" className="btn btn-primary">
              ابھی داخلہ کریں
            </a>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="مینو کھولیں"
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
          <button className="close-drawer" id="closeDrawer" aria-label="مینو بند کریں" onClick={closeDrawer}>
            &times;
          </button>
        </div>
        <nav aria-label="موبائل">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeDrawer}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="drawer-actions">
          <a href="#admissions" className="btn btn-primary" onClick={closeDrawer}>
            ابھی داخلہ کریں
          </a>
          <a href="#programs" className="btn btn-ghost" onClick={closeDrawer}>
            پروگرام دیکھیں
          </a>
        </div>
      </div>

      <main id="main">
        {/* 01 HERO */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow fade-up d1">مدینۃ العلم اسلامک کالج</p>
              <h1 className="fade-up d2">
                خواتین اور بچیوں کے لیے مستند اسلامی تعلیم
              </h1>
              <p className="hero-lede fade-up d3">
                قرآن، سنت اور اسلامی علوم میں مضبوط بنیاد قائم کریں — منظم تعلیم،
                تربیت اور کردار کی نشوونما کے ذریعے۔
              </p>
              <div className="hero-ctas fade-up d4">
                <a href="#programs" className="btn btn-primary">
                  پروگرام دیکھیں
                </a>
                <a href="#admissions" className="btn btn-ghost">
                  ابھی داخلہ کریں
                </a>
              </div>
              <div className="hero-tag fade-up d4">
                <span className="dot"></span> قیام 2016{"\u00A0"}{"\u00B7"}
                {"\u00A0"}آن کیمپس + آن لائن
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
                  y="500"
                  textAnchor="middle"
                  fontFamily="Noto Nastaliq Urdu, sans-serif"
                  fontSize="17"
                  fontWeight="700"
                  fill="#68736D"
                >
                  سالِ تربیت
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
                <p className="eyebrow">ہمارا تعارف</p>
                <h2>علم، فہم اور تربیت کے ساتھ دین سیکھیں</h2>
              </div>
              <div className="intro-copy">
                <p>
                  مدینۃ العلم اسلامک کالج ایک خواتین کے لیے مختص تعلیمی ادارہ ہے
                  جو 2016ء میں اس وژن کے ساتھ قائم ہوا کہ مستند اسلامی تعلیم کو
                  قابلِ رسائی، منظم اور آج کی نسل کی ضروریات سے ہم آہنگ بنایا
                  جائے۔
                </p>
                <p>
                  ہم ایک دانشورانہ اور حوصلہ افزا ماحول فراہم کرتے ہیں جہاں
                  طالبات قرآن، سنت اور مستند علمی روایت پر مبنی منظم طریقے سے
                  اسلامی علم حاصل کرتی ہیں — ایسی باشعور، اصول پسند اور روحانی
                  بنیادوں پر مضبوط شخصیات کی پرورش جو اپنے علم کو اپنے خاندانوں،
                  برادریوں اور معاشرے تک پہنچائیں۔
                </p>
                <p>
                  آج ادارہ آن کیمپس اور آن لائن تعلیم دونوں کے ذریعے اپنی تعلیمی
                  رسائی بڑھا رہا ہے، جس سے زندگی کے مختلف مراحل میں خواتین کے
                  لیے اسلامی تعلیم کے مواقع پیدا ہو رہے ہیں۔
                </p>
              </div>
            </div>
            <div className="meta-row">
              <div className="meta-item">
                <div className="meta-num">2016</div>
                <div className="meta-label">بنیاد</div>
              </div>
              <div className="meta-item">
                <div className="meta-num">آن کیمپس + آن لائن</div>
                <div className="meta-label">طریقہ تعلیم</div>
              </div>
              <div className="meta-item">
                <div className="meta-num">خواتین کے لیے</div>
                <div className="meta-label">تعلیم</div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 WHY MADINA-TUL-ILM */}
        <section style={{ background: "var(--beige)", paddingTop: "100px", paddingBottom: "100px" }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">کیوں مدینۃ العلم</p>
              <h2>اسلامی تعلیم کا منظم راستہ</h2>
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
              <p className="eyebrow">پروگرامز</p>
              <h2>ہمارے پروگرام دیکھیں</h2>
              <p>
                قرآن، اسلامی علوم، خصوصی اور بچوں کے پروگرامز کا منظم نظام —
                سیکھنے کے ہر مرحلے کے لیے۔
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
              <p className="eyebrow feature-eyebrow">فلیگ شپ پروگرام</p>
              <h2>درسِ نظامی عالمہ پروگرام</h2>
              <p>
                ایک جامع عالمہ کورس جو روایتی اسلامی علم کو عصری تعلیم کے ساتھ
                یکجا کرتا ہے — قرآن، حدیث، عربی، فقہ اور دیگر اسلامی علوم میں
                مضبوط بنیاد فراہم کرتے ہوئے عصری چیلنجز اور عملی ضروریات پر بھی
                توجہ دیتا ہے۔
              </p>
              <p>
                یہ پروگرام ان بچیوں اور خواتین کے لیے ہے جو منظم اسلامی تعلیم
                حاصل کرنا چاہتی ہیں، اپنے دین کی سمجھ گہری کرنا چاہتی ہیں اور
                عربی اور تحقیقی مہارتیں پیدا کرنا چاہتی ہیں — ان کے لیے جو کالج
                کے داخلہ کے تقاضے پورا کریں۔
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
                  درسِ نظامی دیکھیں
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
                کلاس کے اوقات اور فیسیں ٹریک کے لحاظ سے مختلف ہوتی ہیں — نیچے
                داخلہ کا شیڈول دیکھیں یا موجودہ داخلے کے لیے واٹس ایپ پر رابطہ
                کریں۔
              </p>
            </div>
          </div>
        </section>

        {/* 06 LEARNING PHILOSOPHY */}
        <section className="philosophy">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              ہمارا طریقہ
            </p>
            <h2>وہ علم جو کردار سنوارتا ہے</h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: "52ch",
                margin: "16px auto 0",
              }}
            >
              مدینۃ العلم میں اسلامی تعلیم محض معلومات کا حصول نہیں — یہ ایک
              سلسلہ ہے جو علم کو روزمرہ کے کردار تک پہنچاتا ہے۔
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
              <p className="eyebrow">ہماری تاریخ</p>
              <h2>ادارے کا سفر</h2>
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
              <p className="founder-role">بانی اور پرنسپل</p>
              <h2 className="founder-name">صافیہ قادری</h2>
              <blockquote>
                مستند اسلامی علم کو تعلیم کے منظم اور عصری انداز کے ساتھ یکجا
                کرنا۔
              </blockquote>
              <p className="bio">
                صافیہ قادری مدینۃ العلم اسلامک کالج کی بانی اور پرنسپل ہیں اور
                ایک مستعد معلمہ ہیں جو خواتین میں اسلامی علوم اور تعلیم کو مضبوط
                بنانے کے لیے پرعزم ہیں۔ اسلامی علوم میں تعلیمی قابلیت اور برسوں
                کی تعلیمی قیادت کے ساتھ انہوں نے اس ادارے کی بنیاد اس وژن کے
                ساتھ رکھی کہ مستند اسلامی علم کو تعلیم کے منظم اور عصری انداز کے
                ساتھ یکجا کیا جائے۔
              </p>
              <p className="bio">
                ان کی قیادت میں مدینۃ العلم علمی برتری، روحانی نشوونما، کردار کی
                تعمیر اور نوجوان نسل میں عشقِ مصطفٰی ﷺ کے جذبے کی آبیاری کے
                پلیٹ فارم کے طور پر ترقی کر چکا ہے۔
              </p>
            </div>
          </div>
        </section>

        {/* 09 GALLERY */}
        <section id="gallery" style={{ background: "var(--beige)" }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">گیلری</p>
              <h2>مدینۃ العلم میں زندگی</h2>
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
              حقیقی کیمپس اور تقریبات کی تصاویر جلد شامل کی جائیں گی — دکھائے
              گئے پلیس ہولڈر فراہم کردہ زمروں کی عکاسی کرتے ہیں۔
            </p>
          </div>
        </section>

        {/* 10 ADMISSIONS */}
        <section id="admissions">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">داخلہ</p>
              <h2>کلاس شیڈول اور فیسیں</h2>
              <p>
                موجودہ کلاسز کا ایک جائزہ۔ اوقات اور داخلہ بدل سکتے ہیں —
                داخلے سے پہلے واٹس ایپ پر تازہ ترین شیڈول کی تصدیق کریں۔
              </p>
            </div>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>کورس</th>
                    <th>ایام</th>
                    <th>وقت</th>
                    <th>طرز</th>
                    <th>فیس (روپے)</th>
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
              اہلیت یا اوقات کے بارے میں سوالات ہیں؟{" "}
              <a href="#contact">ہماری داخلہ ٹیم سے رابطہ کریں</a> یا واٹس ایپ
              کے ذریعے براہِ راست داخلہ لیں۔
            </p>
          </div>
        </section>

        {/* 11 FINAL CTA */}
        <section className="final-cta">
          <div className="wrap">
            <h2>اسلامی تعلیم کا سفر شروع کریں</h2>
            <p>
              منظم قرآن اور اسلامی علوم، جن کے مرکز میں تربیت اور کردار ہے —
              بہادرآباد کیمپس میں یا آن لائن، جہاں بھی آپ ہوں۔
            </p>
            <div className="hero-ctas">
              <a href="#programs" className="btn btn-ghost">
                پروگرام دیکھیں
              </a>
              <a href="#admissions" className="btn btn-primary">
                ابھی داخلہ کریں
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
              2016ء سے علم، فہم اور تربیت کی پرورش کرنے والا خواتین کے لیے مختص
              اسلامی تعلیمی ادارہ۔
            </p>
          </div>
          <div>
            <h5>روابط</h5>
            <ul>
              {FOOTER_NAVIGATE.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>پروگرامز</h5>
            <ul>
              {FOOTER_PROGRAMS.map((label) => (
                <li key={label}>
                  <a href="#programs">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>رابطہ</h5>
            <ul>
              <li>
                گھر نمبر 238، بلاک 3، اسٹریٹ 13، بہادر شاہ ظفر روڈ، B-Y-J-C-H-S،
                رشید سی فوڈ کے سامنے، عسکری بینک کے ساتھ، بہادرآباد، کراچی
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
            © <span id="year">{new Date().getFullYear()}</span> مدینۃ العلم
            اسلامک کالج۔ جملہ حقوق محفوظ ہیں۔
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
    </div>
  );
}