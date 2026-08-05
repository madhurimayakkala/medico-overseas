import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { whyChooseUs } from "@/content/site";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Medico Overseas"
          title="The Right Guidance Makes All the Difference"
          description="We've helped thousands of students navigate their MBBS abroad journey with clarity, honesty, and complete support."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((point, index) => (
            <AnimatedSection key={point} delay={index * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-navy" />
                <p className="font-medium text-slate-800">{point}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}