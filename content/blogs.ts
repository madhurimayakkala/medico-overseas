import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "best-countries-for-mbbs-abroad-2026",
    title: "Best Countries for MBBS Abroad in 2026",
    excerpt:
      "A comparison of the top MBBS destinations for Indian students based on fees, recognition, and quality of education.",
    content: `Choosing the right country for MBBS abroad is one of the most important decisions in a medical aspirant's journey. Factors like tuition fees, NMC recognition, climate, and medium of instruction all play a role.

Russia and Georgia remain the most popular choices due to their affordable fees and century-old medical universities. Kyrgyzstan and Uzbekistan offer some of the lowest overall costs, making them ideal for budget-conscious students. Armenia stands out for its academic legacy, while Vietnam is an emerging option with modern hospital infrastructure.

Before finalizing a country, students should verify the university's NMC approval status, check the FMGE/NExT pass rate of past graduates, and factor in the total cost of the 6-year program including living expenses. Speaking with current students or alumni can also provide valuable first-hand insight into campus life and academic quality.`,
    coverImage: "/images/blogs/best-countries-mbbs.jpg",
    category: "Country Guide",
    author: "Medico Overseas Team",
    publishedAt: "2026-07-15",
    readTime: "5 min read",
    metaTitle: "Best Countries for MBBS Abroad in 2026 | Medico Overseas",
    metaDescription:
      "Compare the top MBBS abroad destinations for Indian students in 2026 based on fees, recognition, and education quality.",
  },
  {
    slug: "fmge-exam-preparation-tips",
    title: "FMGE Exam Preparation Tips for MBBS Graduates",
    excerpt:
      "Practical strategies to help foreign medical graduates clear the FMGE screening test on their first attempt.",
    content: `The Foreign Medical Graduate Examination (FMGE) is a mandatory screening test for Indian students who complete their MBBS abroad and wish to practice in India. With a historically low pass percentage, structured preparation is essential.

Start early. Ideally, FMGE preparation should begin during the clinical years of MBBS rather than after graduation. Focus on high-yield subjects like Pharmacology, Pathology, and Community Medicine, which carry significant weightage in the exam pattern.

Practicing with previous years' question papers helps identify recurring themes and question styles. Joining a structured coaching program or study group can also provide accountability and access to updated study material. Time management during the actual exam is equally important, so regular timed mock tests should be part of the preparation routine in the final months before the exam.`,
    coverImage: "/images/blogs/fmge-preparation.jpg",
    category: "Exam Guide",
    author: "Medico Overseas Team",
    publishedAt: "2026-07-20",
    readTime: "6 min read",
    metaTitle: "FMGE Exam Preparation Tips 2026 | Medico Overseas",
    metaDescription:
      "Effective preparation strategies for Indian MBBS graduates preparing to clear the FMGE screening exam.",
  },
  {
    slug: "student-visa-guide-mbbs-abroad",
    title: "Student Visa Guide for MBBS Abroad Aspirants",
    excerpt:
      "A step-by-step overview of the student visa process for Indian students pursuing MBBS in popular destination countries.",
    content: `Securing a student visa is one of the final and most important steps before departing for MBBS abroad. While the exact process varies by country, most follow a similar general structure.

After receiving an official invitation letter from the university, students submit their visa application along with supporting documents such as academic transcripts, passport copies, medical fitness certificates, and proof of fee payment. Processing times typically range from two to four weeks depending on the country and embassy workload.

Common reasons for visa delays include incomplete documentation, discrepancies between submitted records, or missing medical certificates. Working with an experienced consultancy can help avoid these pitfalls by ensuring every document is verified before submission. Students should also begin the visa process well in advance of the intake date to account for any unexpected delays.`,
    coverImage: "/images/blogs/student-visa-guide.jpg",
    category: "Visa & Documentation",
    author: "Medico Overseas Team",
    publishedAt: "2026-07-25",
    readTime: "5 min read",
    metaTitle: "Student Visa Guide for MBBS Abroad | Medico Overseas",
    metaDescription:
      "Step-by-step guide to the student visa process for Indian students pursuing MBBS abroad, including tips to avoid delays.",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((b) => b.slug);
}