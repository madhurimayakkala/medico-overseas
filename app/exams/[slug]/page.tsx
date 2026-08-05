import { notFound } from "next/navigation";
import { getExamBySlug, getAllExamSlugs } from "@/content/exams";
import { ExamHero } from "@/components/sections/ExamHero";
import { ExamDetails } from "@/components/sections/ExamDetails";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildExamMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, examSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllExamSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = getExamBySlug(slug);
  if (!exam) return {};
  return buildExamMetadata(exam);
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = getExamBySlug(slug);

  if (!exam) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Exams", path: "/exams" },
    { name: `${exam.name} Exam`, path: `/exams/${exam.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examSchema(exam)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(exam.faqs)),
        }}
      />

      <ExamHero exam={exam} />
      <ExamDetails exam={exam} />

      <section id="lead-form" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Get Guidance for {exam.name}
            </h2>
            <p className="mt-2 text-center text-slate-600">
              Fill in your details and our counsellor will reach out within
              24 hours.
            </p>
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={exam.faqs}
        eyebrow="FAQs"
        title={`Common Questions About ${exam.name}`}
      />

      <CTA
        title={`Have Questions About ${exam.name}?`}
        description="Talk to our counsellors today for a free, no-obligation consultation."
      />
    </>
  );
}