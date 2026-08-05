export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const aboutContent = {
  storyEyebrow: "Our Story",
  storyTitle: "Helping Students Find Their Path to Medicine",
  storyBody: [
    "Medico Overseas was founded to solve a simple but painful problem: thousands of NEET-qualified Indian students miss out on an MBBS seat in India every year, not because they lack merit, but because of limited seats. Many turn to study-abroad consultants who overpromise and underdeliver, leaving families confused and anxious.",
    "We set out to be different. Our counsellors work directly with NMC and WHO approved universities, keep our fee structures completely transparent, and stay involved with students well beyond admission, through visa support, settling in, and eventually preparing for the FMGE/NExT licensing exam.",
    "Today, we've guided thousands of students into medical careers across six countries, and our approach remains the same: honest guidance first, sales pitch never.",
  ],

  mission:
    "To make quality medical education abroad accessible, transparent, and stress-free for every Indian student who dreams of becoming a doctor.",
  vision:
    "To be the most trusted name in MBBS-abroad consultancy, known for honesty, complete transparency, and genuine care for every student's journey.",

  achievements: [
    { label: "Students Placed", value: "2,000+" },
    { label: "Partner Universities", value: "50+" },
    { label: "Countries Covered", value: "6" },
    { label: "Visa Success Rate", value: "99%" },
  ],

  timeline: [
    {
      year: "2018",
      title: "Founded in Guntur, Andhra Pradesh",
      description:
        "Started with a small team of counsellors focused on Russia and Georgia admissions.",
    },
    {
      year: "2020",
      title: "Expanded to 4 New Destinations",
      description:
        "Added Kyrgyzstan, Uzbekistan, Armenia, and Vietnam to our partner university network.",
    },
    {
      year: "2022",
      title: "Crossed 1,000 Students Placed",
      description:
        "Reached a major milestone while maintaining a 99% visa success rate.",
    },
    {
      year: "2026",
      title: "2,000+ Students & Growing",
      description:
        "Continuing to expand our university partnerships and post-admission support programs.",
    },
  ] as TimelineItem[],

  team: [
    {
      name: "Dr. Ramesh Chowdary",
      role: "Founder & Chief Counsellor",
      bio: "15+ years guiding Indian students through MBBS admissions abroad, with a background in medical education consulting.",
      photo: "/images/team/founder.jpg",
    },
    {
      name: "Priyanka Nair",
      role: "Head of Admissions",
      bio: "Specializes in university selection and documentation, having personally guided over 500 successful admissions.",
      photo: "/images/team/admissions-head.jpg",
    },
    {
      name: "Arjun Mehta",
      role: "Visa & Immigration Lead",
      bio: "Manages end-to-end visa processing across all 6 destination countries with a near-perfect approval track record.",
      photo: "/images/team/visa-lead.jpg",
    },
    {
      name: "Dr. Sneha Kulkarni",
      role: "FMGE/NExT Exam Mentor",
      bio: "A licensed physician who cleared FMGE herself, now mentoring graduates through their licensing exam preparation.",
      photo: "/images/team/exam-mentor.jpg",
    },
  ] as TeamMember[],
};