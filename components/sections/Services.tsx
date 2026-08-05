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
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
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
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="End-to-End MBBS Abroad Support"
          description="From your first counselling call to your final year exam prep, we're with you at every step."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? MessageCircle;
            return (
              <AnimatedSection key={service.title} delay={index * 0.06}>
                <Card hover className="h-full bg-white">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-coral-light text-brand-coral">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}