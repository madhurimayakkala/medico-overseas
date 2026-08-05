import IntroWrapper from "@/components/intro/IntroWrapper";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { Destinations } from "@/components/sections/Destinations";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/forms/LeadForm";

import { generalFaqs } from "@/content/faq";

import { buildMetadata } from "@/lib/seo";
import {
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Medico Overseas - Your Trusted Partner for MBBS Abroad",
  description:
    "Get admission into NMC & WHO approved medical universities in Russia, Georgia, Kyrgyzstan, Uzbekistan, Armenia, and Vietnam. Transparent fees, zero donation, end-to-end visa support.",
  path: "/",
});

export default function Home() {
  return (
    <IntroWrapper>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema()),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(generalFaqs)),
        }}
      />

      {/* Homepage Sections */}
      <Hero />

      <WhyChooseUs />

      <Services />

      <Destinations />

      <ProcessSteps />

      <Testimonials />

      {/* Lead Form */}
      <section id="lead-form" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Get Free Counselling
            </h2>

            <p className="mt-2 text-center text-slate-600">
              Fill in your details and our counsellor will reach out within 24
              hours.
            </p>

            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={generalFaqs} />

      <CTA />
    </IntroWrapper>
  );
}