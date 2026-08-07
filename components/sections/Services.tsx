import {
  MessageCircle,
  GraduationCap,
  FileText,
  Plane,
  ClipboardCheck,
  BookOpen,
  LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/content/services";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  GraduationCap,
  FileText,
  Plane,
  ClipboardCheck,
  BookOpen,
};

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="What We Offer"
          title="End-to-End MBBS Abroad Support"
          description="From your first counselling call to your final year exam prep, we're with you at every step."
          className="mx-0"
        />

        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? MessageCircle;
            const isEven = index % 2 === 0;
            return (
              <AnimatedSection key={service.title} delay={index * 0.05}>
                <div
                  className={`flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-8 ${
                    isEven ? "" : "sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  <span
                    className={`font-heading shrink-0 text-6xl font-bold leading-none text-brand-navy-light sm:text-7xl`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={`flex flex-1 items-start gap-4 ${
                      isEven ? "" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-coral-light text-brand-coral">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}