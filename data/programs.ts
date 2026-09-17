import type { Program } from "./types";

export const programs: Program[] = [
  {
    slug: "quranic-education",
    title: "Quranic Education",
    tagline: "Recite, memorise and live the Book of Allah",
    shortDescription:
      "Nazra with Tajweed, Hifz ul Quran and Qira'at programmes delivered step by step by qualified Hafiz and Qari teachers.",
    description: [
      "Our Quranic Education programme is the heart of the college. Students begin with sound foundations in Noorani Qaida and move progressively through Nazra with full rules of Tajweed, then on to complete memorisation of the Holy Quran under the supervision of certified Huffaz.",
      "Every student recites daily in front of a teacher, benefiting from personal correction of pronunciation (Makharij) and rules of recitation. Memorisation is consolidated through regular revision (Murraja'ah), ensuring the Quran is preserved in both heart and practice.",
      "Advanced students may pursue specialised Qira'at, including the ten recognised styles of recitation, and earn an Ijazah certifying their mastery of the Holy Quran.",
    ],
    icon: "quran",
    image: "/images/quran-education.svg",
    duration: "3 - 7 years",
    level: "Beginner to Advanced (Hifz)",
    intake: "Boys & Girls (separate sections)",
    mode: "Full-time & Weekend tracks",
    teachers: "Qari & Hafiz certified faculty",
    curriculum: [
      "Noorani Qaida and foundations of reading",
      "Nazra with Makharij and full Tajweed rules",
      "Sifaat, rules of stopping and starting (Waqf)",
      "Systematic Hifz with daily Murraja'ah",
      "Weekly revision circles and peer review",
      "Introduction to the sciences of the Quran (Ulum ul Quran)",
      "Advanced Qira'at (beginner level)",
    ],
    outcomes: [
      "Recite the Quran fluently with correct Tajweed",
      "Memorise the full Quran with long-term retention",
      "Understand key themes and lessons of the Quran",
      "Lead in prayer and teach others to recite confidently",
    ],
    featured: true,
  },
  {
    slug: "islamic-studies",
    title: "Islamic Studies",
    tagline: "A complete foundation in faith and practice",
    shortDescription:
      "A structured syllabus covering Aqeedah, Fiqh, Seerah, Akhlaq and Islamic history for a balanced understanding of Islam.",
    description: [
      "The Islamic Studies programme provides students with a broad, structured foundation in the main branches of Islamic knowledge. Classes are arranged by age and ability so every learner progresses at a comfortable yet challenging pace.",
      "The syllabus balances core beliefs (Aqeedah), practical worship (Fiqh), the biography of the Prophet (peace be upon him), and the ethics of daily life (Akhlaq). Students also study contemporary issues from an Islamic perspective.",
      "Interactive lessons, projects and weekly quizzes make the learning engaging and help students apply Islamic knowledge to their everyday decisions and relationships.",
    ],
    icon: "academic",
    image: "/images/islamic-studies.svg",
    duration: "4 years (Levels 1 - 4)",
    level: "Primary to Advanced",
    intake: "Boys & Girls (separate sections)",
    mode: "Full-time & Weekend tracks",
    teachers: "Graduate Islamic Studies faculty",
    curriculum: [
      "Aqeedah: Belief in Allah, angels, books, messengers and the last day",
      "Fiqh of worship: Taharah, Salah, Zakat, Sawm and Hajj",
      "Seerah: The life of the Prophet (peace and blessings be upon him)",
      "Akhlaq: Manners, honesty, kindness and family responsibilities",
      "Islamic history and civilisation",
      "Contemporary Fiqh issues for students",
      "Daily Adhkar, Duas and etiquettes",
    ],
    outcomes: [
      "Explain the core beliefs and practices of Islam clearly",
      "Perform acts of worship correctly with understanding",
      "Demonstrate good character in school and community",
      "Relate Islamic teachings to modern life with confidence",
    ],
    featured: true,
  },
  {
    slug: "tafseer-hadith",
    title: "Tafseer & Hadith",
    tagline: "Understand the Quran deeply and the Sunnah precisely",
    shortDescription:
      "In-depth study of the meaning of the Quran and the science of Hadith, with classical texts studied under qualified scholars.",
    description: [
      "This specialised programme is designed for senior students who wish to go beyond recitation and study the meaning of the Quran and the authentic traditions of the Prophet (peace be upon him).",
      "Students study Tafseer of major chapters (Surah) including Juz Amma and larger portions, learning the context of revelation, key themes and lessons. In Hadith studies, they examine the collection and authentication of narrations together with classical collections such as the Forty Hadith of Imam an-Nawawi and Riyad us-Saliheen.",
      "Classes are seminar-style, encouraging students to ask questions, reflect, and connect the texts to their own lives. Graduates are well prepared for further study in recognised Islamic institutions.",
    ],
    icon: "scroll",
    image: "/images/tafseer-hadith.svg",
    duration: "3 years",
    level: "Senior / Advanced",
    intake: "Boys & Girls (separate sections)",
    mode: "Full-time & Weekend tracks",
    teachers: "Mufti & Shaikh qualified faculty",
    curriculum: [
      "Tafseer of Juz Amma and selected Surahs",
      "Principles of Tafseer and causes of revelation (Asbab an-Nuzul)",
      "The Forty Hadith of Imam an-Nawawi with commentary",
      "Riyad us-Saliheen: selected chapters",
      "Introduction to Mustalah al-Hadith (Hadith sciences)",
      "Differences among scholars and etiquette of difference",
    ],
    outcomes: [
      "Interpret the Quran and Hadith with sound scholarly method",
      "Distinguish authentic narrations from weak ones",
      "Apply Prophetic guidance to modern scenarios",
      "Teach others and pursue advanced Islamic scholarship",
    ],
    featured: true,
  },
  {
    slug: "seerah-islamic-history",
    title: "Seerah & Islamic History",
    tagline: "Lessons from the life of the Prophet and our glorious past",
    shortDescription:
      "A journey through the life of the Prophet (peace be upon him) and the golden age of Islamic civilisation and scholarship.",
    description: [
      "History is a great teacher, and our Seerah programme brings it to life. Students study the life of the Prophet Muhammad (peace be upon him) in detail — from the Makkan and Madinan periods to the establishment of the first Muslim community.",
      "The course continues with the rightly-guided Caliphs, the great Islamic dynasties, and the contributions of Muslim scientists, physicians, mathematicians and scholars to world civilisation.",
      "Through storytelling, timelines, maps and projects, students learn enduring lessons of leadership, patience, justice and unity that inspire them to become leaders in their own communities.",
    ],
    icon: "history",
    image: "/images/seerah-history.svg",
    duration: "2 years",
    level: "Intermediate",
    intake: "Boys & Girls (separate sections)",
    mode: "Full-time & Weekend tracks",
    teachers: "Islamic History specialists",
    curriculum: [
      "Makkan period: early life and first revelation",
      "Madinan period: building the first community",
      "The battles and treaties of the Prophet (peace be upon him)",
      "The Rightly-Guided Caliphs: leadership and expansion",
      "The golden age of Islamic science and culture",
      "Muslim Spain, the Ottoman world and beyond",
      "Contemporary Muslim communities and global Ummah",
    ],
    outcomes: [
      "Narrate the major events of Seerah with accuracy",
      "Extract practical leadership and life lessons from history",
      "Appreciate the contribution of Muslim civilisation to the world",
      "Explain current Muslim affairs with historical context",
    ],
    featured: false,
  },
  {
    slug: "fiqh-aqeedah",
    title: "Fiqh & Aqeedah",
    tagline: "Correct belief and confident practice of worship",
    shortDescription:
      "Systematic study of Islamic law (Fiqh) and the foundations of creed (Aqeedah), enabling sound worship and clarity of faith.",
    description: [
      "Sound knowledge of worship (Fiqh) and correct belief (Aqeedah) are essential for every Muslim. This programme offers a structured, age-appropriate study of both disciplines, following widely accepted classical texts.",
      "In Fiqh, students master the rulings of purification, prayer, fasting, Zakat and Hajj, together with the Fiqh of transactions and family life. In Aqeedah, they study the foundations of faith — Tawheed in its three categories, Iman in the unseen and the lives of the rightly-guided predecessors.",
      "Lessons combine classical texts with practical, contemporary application. Students learn the etiquette of differences between schools of thought and how to seek reliable scholarly guidance.",
    ],
    icon: "shield",
    image: "/images/fiqh-aqeedah.svg",
    duration: "3 years",
    level: "Intermediate to Advanced",
    intake: "Boys & Girls (separate sections)",
    mode: "Full-time & Weekend tracks",
    teachers: "Mufti qualified faculty",
    curriculum: [
      "The three categories of Tawheed",
      "Scholarly creed texts with commentary",
      "Fiqh of Taharah, Salah, Sawm, Zakat and Hajj",
      "Fiqh of transactions (Muamalat) and business ethics",
      "Fiqh of the family and daily life",
      "Etiquette of differences among scholars",
      "Following scholarship without blind imitation",
    ],
    outcomes: [
      "Perform all acts of worship with confidence and correct rulings",
      "Articulate sound Islamic belief with evidence",
      "Handle everyday questions of practice with reliable sources",
      "Respect the classical schools of Islamic law",
    ],
    featured: false,
  },
  {
    slug: "tarbiyah",
    title: "Tarbiyah",
    tagline: "Character, spirituality and service of others",
    shortDescription:
      "A holistic programme for moral and spiritual development — manners, mindfulness, community service and leadership.",
    description: [
      "Tarbiyah — the nurturing of the soul — is woven through everything we do at Madina Tul Ilm. This dedicated programme helps students develop excellent character, spiritual awareness and a heart of service.",
      "Sessions cover the purification of the heart, overcoming bad habits, gratitude, patience, honesty, and the rights of parents, relatives, neighbours and colleagues. Students also build practical life skills in leadership, public speaking, teamwork and community service.",
      "Students participate in regular service projects: visiting the elderly, distributing charity, environmental clean-ups and supporting local mosques. These experiences turn Islamic values into lived realities.",
    ],
    icon: "sprout",
    image: "/images/tarbiyah.svg",
    duration: "Ongoing (all levels)",
    level: "Every level",
    intake: "Boys & Girls (separate sections)",
    mode: "Integrated across all programmes",
    teachers: "Dedicated Tarbiyah coordinators",
    curriculum: [
      "Purification of the heart: sincerity, humility, gratitude, patience",
      "Etiquette of dealing with parents, teachers and peers",
      "Mindfulness of Allah (Taqwa) and daily remembrance",
      "Leadership, teamwork and public speaking skills",
      "Community service and volunteering projects",
      "Healthy lifestyle, digital etiquette and time management",
      "Preparing responsible citizens of the Ummah",
    ],
    outcomes: [
      "Demonstrate strong character in conduct and speech",
      "Balance spirituality with practical daily responsibilities",
      "Lead community service initiatives with initiative",
      "Carry Islamic values confidently into professional life",
    ],
    featured: false,
  },
];

export function getAllPrograms(): Program[] {
  return programs;
}

export function getFeaturedPrograms(): Program[] {
  return programs.filter((program) => program.featured);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}