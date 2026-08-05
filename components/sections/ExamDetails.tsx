import { CheckCircle2, CalendarDays, BookOpen } from "lucide-react";
import { Exam } from "@/types/exam";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ExamDetails({ exam }: { exam: Exam }) {
  return (
    <>
      {/* Overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Overview"
            title={`What is ${exam.name}?`}
          />
          <p className="text-lg leading-relaxed text-slate-600">
            {exam.overview}
          </p>
        </div>
      </section>

      {/* Who Must Take */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Applicability"
            title="Who Must Take This Exam?"
          />
          <ul className="space-y-3">
            {exam.whoMustTake.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Eligibility"
            title="Eligibility Criteria"
          />
          <ul className="space-y-3">
            {exam.eligibility.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Step by Step"
            title="Registration Process"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {exam.registrationProcess.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-slate-200 bg-white p-5"
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

      {/* Exam Pattern */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Exam Pattern"
            title={`How the ${exam.name} Exam Works`}
          />
          <div className="overflow-hidden rounded-lg border border-slate-200">
            {exam.examPattern.map((item, i) => (
              <div
                key={item.section}
                className={`flex flex-col gap-1 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between ${
                  i % 2 === 0 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <span className="font-semibold text-slate-900">
                  {item.section}
                </span>
                <span className="text-slate-600">{item.details}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus + Important Dates */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <Card className="h-full">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy-light text-brand-navy">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-semibold text-slate-900">
                  Syllabus Overview
                </h3>
                <ul className="space-y-2">
                  {exam.syllabusOverview.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <Card className="h-full">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-coral-light text-brand-coral">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-semibold text-slate-900">
                  Important Dates
                </h3>
                <div className="space-y-2">
                  {exam.importantDates.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-semibold text-slate-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Preparation Tips + Coaching */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">
                Preparation Tips
              </h3>
              <ul className="space-y-2">
                {exam.preparationTips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-coral" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-slate-900">
                How Medico Overseas Helps
              </h3>
              <ul className="space-y-2">
                {exam.coachingOffered.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}