export interface University {
  name: string;
  city: string;
  established: number;
  ranking?: string;
  recognition: string[];
}

export interface FeeItem {
  label: string;
  amount: string;
  note?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
}

export interface Country {
  slug: string;
  name: string;
  flagEmoji: string;
  heroImage: string;
  tagline: string;
  overview: string;

  quickFacts: {
    duration: string;
    medium: string;
    intake: string;
    recognition: string;
    avgTuitionPerYear: string;
    avgLivingCostPerYear: string;
  };

  universities: University[];

  tuitionFees: FeeItem[];
  livingCosts: FeeItem[];

  eligibility: string[];

  admissionProcess: AdmissionStep[];

  documentsRequired: string[];

  advantages: string[];

  climate: string;

  faqs: FAQItem[];

  metaTitle: string;
  metaDescription: string;
}