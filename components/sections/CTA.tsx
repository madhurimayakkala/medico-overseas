import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

interface CTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTA({
  title = "Ready to Start Your MBBS Abroad Journey?",
  description = "Book a free counselling session with our experts today. No fees, no obligation, just honest guidance.",
  primaryLabel = "Get Free Counselling",
  primaryHref = "#lead-form",
}: CTAProps) {
  return (
    <section className="bg-brand-navy py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-navy-light">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href={primaryHref}
            size="lg"
            className="bg-brand-coral hover:bg-brand-coral-dark"
          >
            {primaryLabel}
          </ButtonLink>
          <ButtonLink
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-brand-navy-dark"
          >
            Call {siteConfig.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}