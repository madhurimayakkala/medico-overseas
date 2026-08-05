// lib/schema.ts
import { Country } from "@/types/country";
import { BlogPost } from "@/types/blog";
import { Exam } from "@/types/exam";
import { siteConfig } from "@/content/site";

const SITE_URL = `https://${siteConfig.domain}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo.png`,
    description: siteConfig.description,
    address: { "@type": "PostalAddress", streetAddress: siteConfig.address },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blogs?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.coverImage}`,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/logo.png` },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blogs/${post.slug}` },
  };
}

export function countrySchema(country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: `MBBS in ${country.name}`,
    description: country.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: SITE_URL,
    },
    occupationalCategory: "Medicine",
    programType: "MBBS",
  };
}

export function examSchema(exam: Exam) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: exam.fullName,
    alternateName: exam.name,
    description: exam.overview,
    credentialCategory: "Licensing Examination",
    recognizedBy: { "@type": "Organization", name: exam.quickFacts.conductedBy },
  };
}