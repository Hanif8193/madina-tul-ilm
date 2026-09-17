import type { AdmissionStep, DirectorMember, FaqItem } from "./types";

export const admissionSteps: AdmissionStep[] = [
  {
    step: "01",
    title: "Visit & Enquiry",
    description:
      "Book a campus tour, speak with our admissions team and pick the right programme for your child.",
  },
  {
    step: "02",
    title: "Submit Application",
    description:
      "Complete the application form and attach the required documents, including prior academic records.",
  },
  {
    step: "03",
    title: "Assessment & Interview",
    description:
      "Candidates attend a short assessment and a friendly meeting with the admissions panel.",
  },
  {
    step: "04",
    title: "Offer of Admission",
    description:
      "Successful applicants receive an offer letter with details of fees, timings and orientation.",
  },
  {
    step: "05",
    title: "Enrolment & Orientation",
    description:
      "Confirm your seat, attend welcome week and begin your journey at Madina Tul Ilm.",
  },
];

export const admissionFaqs: FaqItem[] = [
  {
    question: "At what age can a child join?",
    answer:
      "Children can join from age five for our primary Islamic Studies programme. The Hifz track typically begins at age seven, and senior programmes are open to teenagers and adults.",
  },
  {
    question: "Are weekend classes available?",
    answer:
      "Yes. In addition to full-time weekday classes we offer weekend tracks for working adults and school students who wish to learn part-time.",
  },
  {
    question: "Do boys and girls study together?",
    answer:
      "All classes are offered in separate sections for boys and girls, each taught by qualified teachers of the same gender.",
  },
  {
    question: "Is boarding accommodation available?",
    answer:
      "Limited boarding accommodation is available for senior Hifz students. Please contact the admissions office for availability and requirements.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes. We offer need-based scholarships and discounts for families with multiple children. Please mention your situation during the enquiry stage.",
  },
];

export const admissionsNote =
  "Fees, dates and scholarship details shown on this website are sample placeholders. Contact our admissions office for current information.";

export const directorMembers: DirectorMember[] = [
  {
    name: "Dr. Syed Khalid Mahmood",
    role: "Principal",
    quote:
      "Knowledge is a light. Our mission is to pass that light on — with sincerity, patience and love.",
  },
  {
    name: "Qari Abdul Wahid",
    role: "Head of Quranic Sciences",
    quote:
      "Every letter a child recites with correct Tajweed is a seed that will grow into gardens of reward.",
  },
  {
    name: "Mufti Zafar Iqbal",
    role: "Head of Fiqh & Aqeedah",
    quote:
      "We teach our students to worship with knowledge, not mere imitation, and to serve with humility.",
  },
];