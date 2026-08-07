import { ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { admissionProcessSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <section className="bg-brand-navy-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Journey, Simplified Into 6 Steps"
          description="From your first call to landing in your destination country, here's exactly what to expect."
        />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible lg:grid-cols-6">
          {admissionProcessSteps.map((item, index) => (
            <AnimatedSection
              key={item.step}
              delay={index * 0.06}
              className="relative w-64 shrink-0 snap-start sm:w-auto"
            >
              <div className="flex h-full flex-col rounded-2xl bg-white p-5">
                <span className="font-heading text-4xl font-extrabold text-brand-coral/25">
                  {String(item.step).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              {index < admissionProcessSteps.length - 1 && (
                <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-navy/30 lg:block" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}