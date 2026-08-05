import { notFound } from "next/navigation";
import { getCountryBySlug, getAllCountrySlugs } from "@/content/countries";
import { CountryHero } from "@/components/sections/CountryHero";
import { CountryDetails } from "@/components/sections/CountryDetails";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildCountryMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, countrySchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return buildCountryMetadata(country);
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/countries" },
    { name: `MBBS in ${country.name}`, path: `/countries/${country.slug}` },
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
          __html: JSON.stringify(countrySchema(country)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(country.faqs)),
        }}
      />

      <CountryHero country={country} />
      <CountryDetails country={country} />

      <section id="lead-form" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Check Your Eligibility for {country.name}
            </h2>
            <p className="mt-2 text-center text-slate-600">
              Fill in your details and our counsellor will reach out within
              24 hours.
            </p>
            <div className="mt-8">
              <LeadForm defaultCountry={country.name} />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={country.faqs}
        eyebrow="FAQs"
        title={`Common Questions About MBBS in ${country.name}`}
      />

      <CTA
        title={`Ready to Begin Your MBBS Journey in ${country.name}?`}
        description="Talk to our counsellors today for a free, no-obligation consultation."
      />
    </>
  );
}