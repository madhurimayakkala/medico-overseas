"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { countries } from "@/content/countries";

const examLinks = [
  { name: "FMGE Exam", href: "/exams/fmge" },
  { name: "NMAT Exam", href: "/exams/nmat" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [mobileExamOpen, setMobileExamOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-brand-navy">
            Medico<span className="text-brand-coral">Overseas</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-brand-navy"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 hover:text-brand-navy"
          >
            About
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-navy">
              Destinations <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full w-56 rounded-lg border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/countries/${country.slug}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-brand-navy-light hover:text-brand-navy"
                >
                  <span>{country.flagEmoji}</span>
                  {country.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-navy">
              Exams <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full w-44 rounded-lg border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {examLinks.map((exam) => (
                <Link
                  key={exam.href}
                  href={exam.href}
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-navy-light hover:text-brand-navy"
                >
                  {exam.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blogs"
            className="text-sm font-medium text-slate-700 hover:text-brand-navy"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 hover:text-brand-navy"
          >
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <ButtonLink href="#lead-form" size="sm">
            Free Counselling
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-slate-800" />
          ) : (
            <Menu className="h-6 w-6 text-slate-800" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <button
              className="flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileDestOpen(!mobileDestOpen)}
            >
              Destinations
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileDestOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileDestOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                {countries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {country.flagEmoji} {country.name}
                  </Link>
                ))}
              </div>
            )}

            <button
              className="flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileExamOpen(!mobileExamOpen)}
            >
              Exams
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileExamOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExamOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                {examLinks.map((exam) => (
                  <Link
                    key={exam.href}
                    href={exam.href}
                    className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {exam.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/blogs"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <ButtonLink href="#lead-form" size="sm" onClick={() => setMobileOpen(false)}>
                Free Counselling
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}