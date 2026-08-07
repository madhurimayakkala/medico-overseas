import { Exam } from "@/types/exam";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ExamHero({ exam }: { exam: Exam }) {
  return (
    <section className="bg-brand-navy-light py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Badge variant="coral">{exam.fullName}</Badge>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {exam.name} Exam Guide
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            {exam.tagline}
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <QuickFact label="Conducted By" value={exam.quickFacts.conductedBy} delay={0.1} />
          <QuickFact label="Frequency" value={exam.quickFacts.frequency} delay={0.15} />
          <QuickFact label="Mode" value={exam.quickFacts.mode} delay={0.2} />
          <QuickFact
            label="Passing Criteria"
            value={exam.quickFacts.passingCriteria}
            delay={0.25}
          />
        </div>

        <AnimatedSection delay={0.3} className="mt-8">
          <ButtonLink href="#lead-form" size="lg">
            Get {exam.name} Guidance
          </ButtonLink>
        </AnimatedSection>
      </div>
    </section>
  );
}

function QuickFact({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-slate-900">{value}</p>
      </div>
    </AnimatedSection>
  );
}