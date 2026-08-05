import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { aboutContent } from "@/content/about";

export function AboutStory() {
  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={aboutContent.storyEyebrow}
            title={aboutContent.storyTitle}
          />
          <div className="space-y-5">
            {aboutContent.storyBody.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="bg-white">
              <h3 className="mb-2 text-xl font-bold text-brand-navy">
                Our Mission
              </h3>
              <p className="text-slate-600">{aboutContent.mission}</p>
            </Card>
            <Card className="bg-white">
              <h3 className="mb-2 text-xl font-bold text-brand-navy">
                Our Vision
              </h3>
              <p className="text-slate-600">{aboutContent.vision}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Impact"
            title="Numbers That Reflect Our Commitment"
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {aboutContent.achievements.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl font-bold text-brand-coral">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Journey" title="How We've Grown" />
          <div className="space-y-8 border-l-2 border-brand-navy-light pl-8">
            {aboutContent.timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.06}>
                <div className="relative">
                  <span className="absolute -left-[38px] flex h-4 w-4 items-center justify-center rounded-full bg-brand-coral" />
                  <p className="text-sm font-semibold text-brand-coral">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}