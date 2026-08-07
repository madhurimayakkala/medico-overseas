import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the Medico Overseas privacy policy to understand how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: August 2026</p>

        <div className="mt-8 space-y-8 text-slate-700">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Information We Collect
            </h2>
            <p className="mt-2 leading-relaxed">
              When you fill out an enquiry or contact form on our website, we
              collect information you provide directly, such as your name,
              phone number, email address, preferred study destination,
              educational qualification, and any message you send us. We do
              not collect this information through any other means without
              your knowledge.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-2 leading-relaxed">
              We use the information you provide solely to respond to your
              enquiry, offer counselling related to MBBS admissions abroad,
              and share relevant updates about universities, admissions, and
              exam preparation. We do not sell, rent, or trade your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              3. Data Storage &amp; Security
            </h2>
            <p className="mt-2 leading-relaxed">
              Form submissions are transmitted securely and stored only for
              the purpose of following up on your enquiry. We take reasonable
              measures to protect your data from unauthorized access,
              alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Cookies
            </h2>
            <p className="mt-2 leading-relaxed">
              Our website may use basic cookies to improve site performance
              and understand how visitors use our pages. These do not
              contain personally identifiable information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Third-Party Services
            </h2>
            <p className="mt-2 leading-relaxed">
              We may use third-party services such as Google Maps, WhatsApp,
              and spam-protection tools (like reCAPTCHA) to operate parts of
              this website. These services have their own privacy policies
              governing the use of your information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Your Rights
            </h2>
            <p className="mt-2 leading-relaxed">
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-navy underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Changes to This Policy
            </h2>
            <p className="mt-2 leading-relaxed">
              We may update this privacy policy from time to time. Changes
              will be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              8. Contact Us
            </h2>
            <p className="mt-2 leading-relaxed">
              If you have questions about this privacy policy, reach out to
              us at {siteConfig.phone} or {siteConfig.email}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}