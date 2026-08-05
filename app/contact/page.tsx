import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Us - Medico Overseas",
  description:
    "Get in touch with Medico Overseas for free counselling on MBBS abroad admissions. Call, WhatsApp, or send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="bg-brand-navy-light py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-navy">
            Contact Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            We&apos;re Here to Help, Reach Out Anytime
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions about MBBS abroad? Our counsellors are just a
            call, message, or visit away.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <SectionHeading
                align="left"
                eyebrow="Get In Touch"
                title="Contact Information"
              />
              <div className="space-y-5">
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Office Address"
                  value={siteConfig.address}
                />
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={siteConfig.phone}
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                />
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactItem
                  icon={<Clock className="h-5 w-5" />}
                  label="Office Hours"
                  value="Mon - Sat: 9:00 AM - 7:00 PM"
                />
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  title="Medico Overseas Office Location"
                  src="https://www.google.com/maps?q=Chebrolu,Guntur,Andhra+Pradesh&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <SectionHeading
                align="left"
                eyebrow="Send a Message"
                title="Have a Question? Write to Us"
              />
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy-light text-brand-navy">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="mt-0.5 font-medium text-slate-900">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}