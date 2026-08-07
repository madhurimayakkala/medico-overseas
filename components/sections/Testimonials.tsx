import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-brand-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Voices"
          title="Hear From Our Students"
          description="Real experiences from students we've guided into their MBBS abroad journey."
          className="[&_h2]:text-white [&_p]:text-slate-300 [&_span]:bg-white/10 [&_span]:text-white"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Featured large quote */}
          {featured && (
            <AnimatedSection direction="left" className="lg:col-span-3">
              <Quote className="h-10 w-10 text-brand-coral" />
              <p className="mt-4 text-2xl font-medium leading-snug text-white sm:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-coral text-brand-coral" />
                ))}
              </div>
              <p className="mt-4 font-semibold text-white">
                {featured.studentName}
              </p>
              <p className="text-sm text-slate-400">
                {featured.university}, {featured.country} &middot; Batch {featured.year}
              </p>
            </AnimatedSection>
          )}

          {/* Compact list of the rest */}
          <div className="space-y-6 border-t border-white/10 pt-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {rest.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} direction="right" delay={0.1 + index * 0.08}>
                <p className="text-sm leading-relaxed text-slate-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-white">
                  {testimonial.studentName}
                  <span className="ml-2 font-normal text-slate-400">
                    &middot; {testimonial.country}
                  </span>
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}