import { ButtonLink } from "@/components/ui/Button";
import { trustStats } from "@/content/site";
import { countries } from "@/content/countries";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-light via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-navy-light px-4 py-1.5 text-sm font-semibold text-brand-navy-dark">
            🎓 Trusted by 2,000+ Medical Aspirants
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your Trusted Partner for{" "}
            <span className="text-brand-navy">MBBS Abroad</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Get admission into NMC & WHO approved medical universities abroad
            with transparent fees, zero donation, and end-to-end visa
            support.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="#lead-form" size="lg">
              Get Free Counselling
            </ButtonLink>
            <ButtonLink href="/countries/russia" size="lg" variant="outline">
              Explore Countries
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {countries.map((country) => (
              <span
                key={country.slug}
                className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <span>{country.flagEmoji}</span>
                {country.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}