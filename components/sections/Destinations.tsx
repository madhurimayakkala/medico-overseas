import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { countries } from "@/content/countries";

export function Destinations() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Study Destinations"
          title="Explore MBBS Abroad Destinations"
          description="Compare fees, universities, and eligibility across our 6 partner countries to find your best fit."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <AnimatedSection key={country.slug} delay={index * 0.05}>
              <Link
                href={`/countries/${country.slug}`}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl">{country.flagEmoji}</span>
                  <Badge variant="green">{country.quickFacts.recognition}</Badge>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  MBBS in {country.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {country.tagline}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                  <div>
                    <p className="text-slate-500">Tuition/yr</p>
                    <p className="font-semibold text-slate-900">
                      {country.quickFacts.avgTuitionPerYear}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Duration</p>
                    <p className="font-semibold text-slate-900">
                      {country.quickFacts.duration}
                    </p>
                  </div>
                </div>

                <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}