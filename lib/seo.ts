// lib/seo.ts
import { Metadata } from "next";
import { Country } from "@/types/country";
import { BlogPost } from "@/types/blog";
import { Exam } from "@/types/exam";
import { siteConfig } from "@/content/site";

export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `https://${siteConfig.domain}${path}`;
  const ogImage = image ?? "/images/og-image.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function buildCountryMetadata(country: Country): Metadata {
  return buildMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/countries/${country.slug}`,
    image: country.heroImage,
  });
}

export function buildBlogMetadata(post: BlogPost): Metadata {
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blogs/${post.slug}`,
    image: post.coverImage,
  });
}

export function buildExamMetadata(exam: Exam): Metadata {
  return buildMetadata({
    title: exam.metaTitle,
    description: exam.metaDescription,
    path: `/exams/${exam.slug}`,
  });
}