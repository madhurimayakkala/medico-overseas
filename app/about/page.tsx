import { AboutStory } from "@/components/sections/AboutStory";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Us - Medico Overseas",
  description:
    "Learn about Medico Overseas's mission, team, and journey helping 2,000+ Indian students secure MBBS admissions abroad with transparent, honest guidance.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
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
            About Medico Overseas
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Guiding Students Toward Their Medical Dreams Since 2018
          </h1>
        </div>
      </section>

      <AboutStory />
      <Team />
      <CTA
        title="Have Questions About Your MBBS Abroad Journey?"
        description="Our counsellors are here to help, no pressure, just honest answers."
      />
    </>
  );
}