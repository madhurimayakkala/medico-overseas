import { Exam } from "@/types/exam";

export const exams: Exam[] = [
  {
    slug: "fmge",
    name: "FMGE",
    fullName: "Foreign Medical Graduate Examination",
    tagline:
      "The mandatory screening test every India-bound MBBS graduate from abroad must clear to practice medicine in India.",
    overview:
      "The Foreign Medical Graduate Examination (FMGE), also referred to as NExT for newer batches, is a national-level screening test conducted by the National Board of Examinations (NBE). Any Indian citizen who completes an MBBS-equivalent degree from a medical institution outside India must clear this exam before they can register with the National Medical Commission (NMC) and practice medicine or pursue postgraduate studies in India.",
    quickFacts: {
      conductedBy: "National Board of Examinations (NBE)",
      frequency: "Twice a year (June & December)",
      mode: "Computer-Based Test (CBT)",
      passingCriteria: "50% marks (150 out of 300)",
    },
    whoMustTake: [
      "Indian citizens who have completed a primary medical qualification from a college outside India",
      "Students planning to practice medicine in India after graduating from any of our destination countries",
      "Graduates who wish to pursue MD/MS or other postgraduate courses in India",
    ],
    eligibility: [
      "Completed a primary medical course of minimum 54 months plus a 12-month internship from a recognized foreign medical institution",
      "The foreign medical institution and degree must be recognized/eligible as per NMC screening test regulations",
      "Valid Eligibility Certificate obtained from the NMC before starting the course abroad",
    ],
    registrationProcess: [
      {
        step: 1,
        title: "Create NBE Account",
        description:
          "Register on the official NBE website with your personal and academic details.",
      },
      {
        step: 2,
        title: "Document Upload",
        description:
          "Upload scanned copies of your degree certificate, internship completion certificate, and eligibility certificate.",
      },
      {
        step: 3,
        title: "Fee Payment",
        description:
          "Pay the applicable exam fee online through the NBE registration portal.",
      },
      {
        step: 4,
        title: "Admit Card Download",
        description:
          "Download your admit card once registration is confirmed, ahead of the announced exam date.",
      },
      {
        step: 5,
        title: "Appear for CBT",
        description:
          "Take the computer-based test at your allotted exam centre on the scheduled date.",
      },
    ],
    examPattern: [
      {
        section: "Format",
        details: "300 multiple-choice questions, single best answer",
      },
      {
        section: "Duration",
        details: "3 hours 30 minutes",
      },
      {
        section: "Marking",
        details: "1 mark per correct answer, no negative marking",
      },
      {
        section: "Subjects Covered",
        details:
          "All MBBS subjects including Medicine, Surgery, Obstetrics & Gynaecology, Pediatrics, Pharmacology, Pathology, Microbiology, and Community Medicine",
      },
    ],
    syllabusOverview: [
      "Pre-clinical: Anatomy, Physiology, Biochemistry",
      "Para-clinical: Pathology, Pharmacology, Microbiology, Forensic Medicine",
      "Clinical: Medicine, Surgery, Obstetrics & Gynaecology, Pediatrics, ENT, Ophthalmology, Orthopedics, Psychiatry, Dermatology",
      "Community Medicine / Preventive & Social Medicine",
    ],
    importantDates: [
      { label: "June Cycle - Registration", value: "Typically opens March" },
      { label: "June Cycle - Exam Date", value: "Mid-to-late June" },
      { label: "December Cycle - Registration", value: "Typically opens September" },
      { label: "December Cycle - Exam Date", value: "Mid-to-late December" },
    ],
    preparationTips: [
      "Start revising during your final MBBS years abroad rather than waiting until after graduation",
      "Focus on high-weightage subjects: Medicine, Surgery, Pharmacology, and Pathology carry the most questions",
      "Practice previous years' question papers to get familiar with the exam pattern and recurring topics",
      "Take regular timed mock tests in the final 2-3 months before the exam to build speed and accuracy",
      "Join a structured study group or coaching batch for accountability and updated question banks",
    ],
    coachingOffered: [
      "FMGE orientation session included with every admission package",
      "Curated study material and previous years' question bank",
      "Access to recommended coaching partners for structured batches",
      "One-on-one mentorship calls with past FMGE-qualified students",
    ],
    faqs: [
      {
        question: "Is FMGE compulsory for every MBBS-abroad graduate?",
        answer:
          "Yes, every Indian citizen who completes their MBBS from a foreign medical institution must clear FMGE (or NExT, once fully rolled out) to register with the NMC and practice in India.",
      },
      {
        question: "How many attempts are allowed for FMGE?",
        answer:
          "There is currently no cap on the number of attempts. Candidates can appear in every cycle until they clear the exam.",
      },
      {
        question: "What is the difference between FMGE and NExT?",
        answer:
          "NExT (National Exit Test) is being introduced to eventually replace both the MBBS final-year exam in India and FMGE for foreign graduates, serving as a common licensing exam. Until NExT is fully implemented for foreign graduates, FMGE remains the applicable screening test — we'll guide you based on the rules applicable to your graduation year.",
      },
      {
        question: "Does Medico Overseas provide FMGE coaching?",
        answer:
          "We provide orientation, study material, and mentorship, and can connect you with trusted coaching partners for full structured batches closer to your final year.",
      },
    ],
    metaTitle: "FMGE Exam 2026 - Eligibility, Pattern, Syllabus & Prep Tips | Medico Overseas",
    metaDescription:
      "Complete guide to the FMGE (Foreign Medical Graduate Examination): eligibility, registration process, exam pattern, syllabus, important dates, and preparation tips.",
  },
  {
    slug: "nmat",
    name: "NMAT",
    fullName: "National Medical Admission Test",
    tagline:
      "A national-level medical admission/qualifying test relevant to certain MBBS-abroad pathways.",
    overview:
      "NMAT refers to a national-level medical admission or qualifying test that some destination countries and pathways require in addition to (or as an alternative gateway alongside) NEET. Requirements vary by country and by university, so our counsellors confirm the exact applicability for your chosen destination during your free consultation. (Note for content team: exact scope of this exam is pending client confirmation — see Open Questions in the requirements document.)",
    quickFacts: {
      conductedBy: "To be confirmed per destination country",
      frequency: "Varies by country/university intake cycle",
      mode: "To be confirmed",
      passingCriteria: "To be confirmed",
    },
    whoMustTake: [
      "Students applying to specific universities or countries where NMAT (or an equivalent local test) is part of the admission requirement",
      "Applicants who fall outside standard NEET-only intake routes for their chosen destination",
    ],
    eligibility: [
      "Completed 10+2 with Physics, Chemistry, and Biology as core subjects",
      "Minimum qualifying percentage as prescribed by the specific university/country (confirmed during counselling)",
      "Additional country-specific criteria communicated at the time of application",
    ],
    registrationProcess: [
      {
        step: 1,
        title: "Profile Assessment",
        description:
          "Our counsellors review your academic profile to check whether NMAT (or an equivalent test) applies to your target university.",
      },
      {
        step: 2,
        title: "Registration Guidance",
        description:
          "We walk you through the official registration process for the applicable test, including deadlines and fees.",
      },
      {
        step: 3,
        title: "Preparation Support",
        description:
          "Guidance and study resources are shared based on the specific test format required.",
      },
      {
        step: 4,
        title: "Score Submission",
        description:
          "We help you submit your test results as part of your university application package.",
      },
    ],
    examPattern: [
      {
        section: "Format",
        details: "Varies by country and university — confirmed during counselling",
      },
      {
        section: "Subjects Covered",
        details: "Physics, Chemistry, Biology (typical for medical admission tests)",
      },
    ],
    syllabusOverview: [
      "Class 11 & 12 Physics, Chemistry, and Biology (NCERT-equivalent level, typical baseline for medical admission tests)",
    ],
    importantDates: [
      { label: "Registration & Exam Windows", value: "Vary by country — confirmed during counselling" },
    ],
    preparationTips: [
      "Keep your Class 11-12 PCB fundamentals strong, since most medical admission tests draw from the same base syllabus as NEET",
      "Ask your counsellor early whether your target university requires this test, so you have adequate preparation time",
    ],
    coachingOffered: [
      "Personalized guidance on whether this test applies to your chosen destination",
      "Study resources shared once the specific test format is confirmed for your case",
    ],
    faqs: [
      {
        question: "Is NMAT the same everywhere?",
        answer:
          "No — requirements and formats vary by country and university. Our counsellors confirm the exact test, eligibility, and process that applies to your specific destination during your free consultation.",
      },
      {
        question: "Do I need to take this in addition to NEET?",
        answer:
          "This depends on your chosen country and university. For most of our standard destinations, a valid NEET score is the primary requirement — we'll tell you clearly if any additional test applies to your case.",
      },
    ],
    metaTitle: "NMAT Guidance for MBBS Abroad | Medico Overseas",
    metaDescription:
      "Guidance on NMAT and other medical admission tests relevant to select MBBS-abroad destinations. Confirm requirements for your target country with our counsellors.",
  },
];

export function getExamBySlug(slug: string): Exam | undefined {
  return exams.find((e) => e.slug === slug);
}

export function getAllExamSlugs(): string[] {
  return exams.map((e) => e.slug);
}
