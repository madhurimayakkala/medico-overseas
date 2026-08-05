import { CheckCircle2, GraduationCap } from "lucide-react";
import { Country } from "@/types/country";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CountryDetails({ country }: { country: Country }) {
  return (
    <>
      {/* Overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Overview"
            title={`Why Study MBBS in ${country.name}?`}
          />
          <p className="text-lg leading-relaxed text-slate-600">
            {country.overview}
          </p>
        </div>
      </section>

      {/* Universities */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Partner Universities"
            title={`Top Medical Universities in ${country.name}`}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {country.universities.map((uni, index) => (
              <AnimatedSection key={uni.name} delay={index * 0.06}>
                <Card className="h-full">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy-light text-brand-navy">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {uni.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {uni.city} &middot; Est. {uni.established}
                  </p>
                  {uni.ranking && (
                    <p className="mt-2 text-sm font-medium text-brand-coral">
                      {uni.ranking}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {uni.recognition.map((r) => (
                      <span
                        key={r}
                        className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Cost Breakdown"
            title="Fee Structure & Living Costs"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">
                Tuition & University Fees
              </h3>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                {country.tuitionFees.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      i % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-semibold text-slate-900">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">
                Living Costs (Monthly)
              </h3>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                {country.livingCosts.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      i % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-semibold text-slate-900">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Eligibility"
            title={`Who Can Apply for MBBS in ${country.name}?`}
          />
          <ul className="space-y-3">
            {country.eligibility.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Step by Step"
            title="Admission & Visa Process"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {country.admissionProcess.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-slate-200 p-5"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Advantages + Climate */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">
                Documents Required
              </h3>
              <ul className="space-y-2">
                {country.documentsRequired.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-slate-900">
                Key Advantages
              </h3>
              <ul className="space-y-2">
                {country.advantages.map((adv) => (
                  <li
                    key={adv}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-coral" />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-slate-900">
                Climate & Student Life
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {country.climate}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}