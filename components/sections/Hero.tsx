import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { trustStats } from "@/content/site";
import { countries } from "@/content/countries";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy pb-28 pt-16 sm:pb-36 sm:pt-24">
      {/* Coral accent glow, off-center */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-coral/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80">
            Trusted by 2,000+ Medical Aspirants
          </span>

          <h1 className="font-heading mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Missed a seat
            <br />
            in India?{" "}
            <span className="text-brand-coral">Go global.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            We guide NEET-qualified students into NMC &amp; WHO approved
            medical universities abroad, with transparent fees, zero
            donation, and support that doesn&apos;t stop at admission.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#lead-form" size="lg">
              Get Free Counselling
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/countries/russia"
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10"
              variant="ghost"
            >
              Explore Countries
            </ButtonLink>
          </div>
        </AnimatedSection>

        {/* Destination strip - offset cards, not a symmetric grid */}
        <div className="mt-16 flex gap-4 overflow-x-auto pb-4 sm:mt-20 sm:overflow-visible">
          {countries.map((country, i) => (
            <AnimatedSection
              key={country.slug}
              delay={0.15 + i * 0.06}
              direction="up"
              className={`shrink-0 ${i % 2 === 1 ? "sm:translate-y-5" : ""}`}
            >
              <a
                href={`/countries/${country.slug}`}
                className="group flex w-40 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10 sm:w-44"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{country.flagEmoji}</span>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-colors group-hover:text-brand-coral" />
                </div>
                <div className="mt-6">
                  <p className="font-heading text-base font-semibold text-white">
                    {country.name}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    From {country.quickFacts.avgTuitionPerYear}/yr
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Stat strip */}
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {trustStats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.4 + i * 0.08} direction="up">
              <p className="font-heading text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Diagonal cut into the next (white) section */}
      <svg
        className="absolute -bottom-px left-0 h-16 w-full text-white sm:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,100 1440,40 1440,100" fill="currentColor" />
      </svg>
    </section>
  );
}