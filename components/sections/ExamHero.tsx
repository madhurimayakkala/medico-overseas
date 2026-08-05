import { Exam } from "@/types/exam";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export function ExamHero({ exam }: { exam: Exam }) {
  return (
    <section className="bg-brand-navy-light py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Badge variant="coral">{exam.fullName}</Badge>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {exam.name} Exam Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          {exam.tagline}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <QuickFact label="Conducted By" value={exam.quickFacts.conductedBy} />
          <QuickFact label="Frequency" value={exam.quickFacts.frequency} />
          <QuickFact label="Mode" value={exam.quickFacts.mode} />
          <QuickFact
            label="Passing Criteria"
            value={exam.quickFacts.passingCriteria}
          />
        </div>

        <div className="mt-8">
          <ButtonLink href="#lead-form" size="lg">
            Get {exam.name} Guidance
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-3 shadow-sm">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}