import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { aboutContent } from "@/content/about";

export function Team() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the Team"
          title="The People Guiding Your Journey"
          description="Experienced counsellors and mentors who've walked this path with thousands of students before you."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.06}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-brand-navy-light">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="mb-2 text-sm font-medium text-brand-coral">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}