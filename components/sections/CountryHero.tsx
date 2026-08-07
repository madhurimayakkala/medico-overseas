import { Country } from "@/types/country";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CountryHero({ country }: { country: Country }) {
  return (
    <section className="bg-brand-navy-light py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-5xl">{country.flagEmoji}</span>
            <Badge variant="green">{country.quickFacts.recognition}</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            MBBS in {country.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            {country.tagline}
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <QuickFact label="Duration" value={country.quickFacts.duration} delay={0.1} />
          <QuickFact label="Medium" value={country.quickFacts.medium} delay={0.15} />
          <QuickFact label="Intake" value={country.quickFacts.intake} delay={0.2} />
          <QuickFact
            label="Tuition/yr"
            value={country.quickFacts.avgTuitionPerYear}
            delay={0.25}
          />
          <QuickFact
            label="Living/yr"
            value={country.quickFacts.avgLivingCostPerYear}
            delay={0.3}
          />
          <QuickFact
            label="Recognition"
            value={country.quickFacts.recognition}
            delay={0.35}
          />
        </div>

        <AnimatedSection delay={0.4} className="mt-8">
          <ButtonLink href="#lead-form" size="lg">
            Check Your Eligibility for {country.name}
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