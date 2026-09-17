export type Locale = "en" | "ur";

export interface ContactInfo {
  phone: string;
  phoneLabel: string;
  email: string;
  address: string;
  hours: string;
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
}

export interface SiteInfo {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  defaultLocale: Locale;
  supportedLocales: Locale[];
  contact: ContactInfo;
  social: SocialLinks;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface Program {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  icon: string;
  image: string;
  duration: string;
  level: string;
  intake: string;
  mode: string;
  teachers: string;
  curriculum: string[];
  outcomes: string[];
  featured: boolean;
}

export interface EventItem {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  image: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AdmissionStep {
  step: string;
  title: string;
  description: string;
}

export interface DirectorMember {
  name: string;
  role: string;
  quote: string;
}