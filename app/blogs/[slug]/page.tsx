import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Clock, ArrowLeft, User } from "lucide-react";
import { blogPosts, getBlogBySlug, getAllBlogSlugs } from "@/content/blogs";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { formatDate } from "@/lib/utils";
import { buildBlogMetadata } from "@/lib/seo";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return buildBlogMetadata(post);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: post.title, path: `/blogs/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post)),
        }}
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <Badge variant="coral" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-6 flex h-56 items-center justify-center rounded-xl bg-brand-navy-light text-5xl sm:h-72">
            📰
          </div>

          <div className="prose prose-slate mt-8 max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-5 leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-14 border-t border-slate-200 pt-10">
              <h2 className="mb-5 text-lg font-semibold text-slate-900">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blogs/${related.slug}`}
                    className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-brand-navy"
                  >
                    <p className="font-medium text-slate-900">
                      {related.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {related.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTA />
    </>
  );
}