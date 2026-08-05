export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Free Counselling",
    description:
      "Personalized guidance based on your NEET score, budget, and preferred country to find the right university fit.",
    icon: "MessageCircle",
  },
  {
    title: "University Selection",
    description:
      "Access to 50+ NMC and WHO approved partner universities across 6 countries, matched to your profile.",
    icon: "GraduationCap",
  },
  {
    title: "Document Assistance",
    description:
      "End-to-end help preparing, verifying, and submitting all required admission documents.",
    icon: "FileText",
  },
  {
    title: "Visa Support",
    description:
      "Complete visa filing and tracking support with a proven track record of successful approvals.",
    icon: "Plane",
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "Orientation covering university rules, climate, currency, accommodation, and emergency contacts.",
    icon: "ClipboardCheck",
  },
  {
    title: "FMGE/NExT Guidance",
    description:
      "Ongoing exam preparation support to help you clear the licensing exam and practice in India.",
    icon: "BookOpen",
  },
];