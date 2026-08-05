import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/content/blogs";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Blog - MBBS Abroad Guides & Tips",
  description:
    "Read expert guides on MBBS abroad admissions, FMGE preparation, student visas, and choosing the right country for your medical education.",
  path: "/blogs",
});

export default function BlogListingPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="bg-brand-navy-light py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-navy">
            Our Blog
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            MBBS Abroad Guides & Insights
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Practical advice on destinations, exams, visas, and everything
            else you need to know before studying medicine abroad.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-44 items-center justify-center bg-brand-navy-light text-4xl">
                  📰
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <Badge variant="coral" className="mb-3 w-fit">
                    {post.category}
                  </Badge>
                  <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-navy">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}