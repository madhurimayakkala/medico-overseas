import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getAllCountrySlugs } from "@/content/countries";
import { getAllBlogSlugs } from "@/content/blogs";
import { getAllExamSlugs } from "@/content/exams";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = getAllCountrySlugs().map((slug) => ({
    url: `${baseUrl}/countries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const examRoutes: MetadataRoute.Sitemap = getAllExamSlugs().map((slug) => ({
    url: `${baseUrl}/exams/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...countryRoutes, ...examRoutes, ...blogRoutes];
}