import { Country } from "@/types/country";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export function CountryHero({ country }: { country: Country }) {
  return (
    <section className="bg-brand-navy-light py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <QuickFact label="Duration" value={country.quickFacts.duration} />
          <QuickFact label="Medium" value={country.quickFacts.medium} />
          <QuickFact label="Intake" value={country.quickFacts.intake} />
          <QuickFact
            label="Tuition/yr"
            value={country.quickFacts.avgTuitionPerYear}
          />
          <QuickFact
            label="Living/yr"
            value={country.quickFacts.avgLivingCostPerYear}
          />
          <QuickFact
            label="Recognition"
            value={country.quickFacts.recognition}
          />
        </div>

        <div className="mt-8">
          <ButtonLink href="#lead-form" size="lg">
            Check Your Eligibility for {country.name}
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