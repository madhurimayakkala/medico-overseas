import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Voices"
          title="Hear From Our Students"
          description="Real experiences from students we've guided into their MBBS abroad journey."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.studentName} delay={index * 0.06}>
              <Card className="h-full bg-white">
                <Quote className="mb-3 h-7 w-7 text-brand-navy-light" />
                <p className="text-slate-700">{testimonial.quote}</p>

                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-coral text-brand-coral"
                    />
                  ))}
                </div>

                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900">
                    {testimonial.studentName}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.university}, {testimonial.country}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}