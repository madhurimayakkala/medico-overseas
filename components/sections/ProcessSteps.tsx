import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { admissionProcessSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Journey, Simplified Into 6 Steps"
          description="From your first call to landing in your destination country, here's exactly what to expect."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {admissionProcessSteps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 0.06}>
              <div className="relative rounded-xl border border-slate-200 bg-white p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-white">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}