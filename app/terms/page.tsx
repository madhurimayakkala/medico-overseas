import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Read the terms and conditions for using the Medico Overseas website and our MBBS abroad consultancy services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: August 2026</p>

        <div className="mt-8 space-y-8 text-slate-700">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2 leading-relaxed">
              By accessing and using this website, you agree to be bound by
              these Terms of Use. If you do not agree with any part of these
              terms, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Nature of Information Provided
            </h2>
            <p className="mt-2 leading-relaxed">
              Information on university fees, eligibility criteria, admission
              processes, and exam details is provided for general guidance
              only and may change without notice. We recommend confirming
              current details directly with us or the relevant university
              before making any decisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              3. No Guarantee of Admission
            </h2>
            <p className="mt-2 leading-relaxed">
              While we make every effort to guide students accurately,
              admission to any university is subject to that university&apos;s
              own eligibility criteria and decision-making process. Medico
              Overseas does not guarantee admission, visa approval, or any
              specific outcome.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Use of Forms
            </h2>
            <p className="mt-2 leading-relaxed">
              When you submit an enquiry or contact form, you confirm that
              the information provided is accurate to the best of your
              knowledge. Submitting false information may delay or affect
              our ability to assist you.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Intellectual Property
            </h2>
            <p className="mt-2 leading-relaxed">
              All content on this website, including text, graphics, logos,
              and layout, is the property of Medico Overseas unless otherwise
              stated, and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p className="mt-2 leading-relaxed">
              Medico Overseas is not liable for any loss or damage arising
              from reliance on information provided on this website. Students
              are encouraged to independently verify university recognition
              status (NMC/WHO) before enrollment.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Changes to These Terms
            </h2>
            <p className="mt-2 leading-relaxed">
              We may revise these Terms of Use at any time. Continued use of
              the website after changes are posted constitutes acceptance of
              the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              8. Contact Us
            </h2>
            <p className="mt-2 leading-relaxed">
              For questions about these terms, contact us at{" "}
              {siteConfig.phone} or {siteConfig.email}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}