import { FAQItem, AdmissionStep } from "@/types/country";

export interface ExamPatternItem {
  section: string;
  details: string;
}

export interface ImportantDate {
  label: string;
  value: string;
}

export interface Exam {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  overview: string;

  quickFacts: {
    conductedBy: string;
    frequency: string;
    mode: string;
    passingCriteria: string;
  };

  whoMustTake: string[];

  eligibility: string[];

  registrationProcess: AdmissionStep[];

  examPattern: ExamPatternItem[];

  syllabusOverview: string[];

  importantDates: ImportantDate[];

  preparationTips: string[];

  coachingOffered: string[];

  faqs: FAQItem[];

  metaTitle: string;
  metaDescription: string;
}