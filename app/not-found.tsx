import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Home, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center">
      <span className="text-7xl">🩺</span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        404 - Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Let&apos;s get you back on track.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <ButtonLink href="/" size="lg">
          <Home className="h-4 w-4" />
          Back to Home
        </ButtonLink>
        <ButtonLink
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          size="lg"
          variant="outline"
        >
          <Phone className="h-4 w-4" />
          Call Us
        </ButtonLink>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/countries/russia" className="text-brand-navy hover:underline">
          MBBS Destinations
        </Link>
        <Link href="/exams/fmge" className="text-brand-navy hover:underline">
          FMGE Exam
        </Link>
        <Link href="/blogs" className="text-brand-navy hover:underline">
          Blog
        </Link>
        <Link href="/contact" className="text-brand-navy hover:underline">
          Contact Us
        </Link>
      </div>
    </section>
  );
}