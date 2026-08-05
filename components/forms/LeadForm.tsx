"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { countries } from "@/content/countries";
import { CheckCircle2 } from "lucide-react";

interface LeadFormProps {
  defaultCountry?: string;
}

export function LeadForm({ defaultCountry }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      interestedCountry: defaultCountry ?? "",
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setServerMessage(result.message);
        reset();
      } else {
        setStatus("error");
        setServerMessage(result.message ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
        <p className="font-semibold text-green-800">{serverMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-brand-navy underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* honeypot field - hidden from real users */}
      <input
        type="text"
        {...register("website")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
            placeholder="9876543210"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="interestedCountry" className="mb-1 block text-sm font-medium text-slate-700">
            Interested Country
          </label>
          <select
            id="interestedCountry"
            {...register("interestedCountry")}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          >
            <option value="">Select a country</option>
            {countries.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.flagEmoji} {c.name}
              </option>
            ))}
          </select>
          {errors.interestedCountry && (
            <p className="mt-1 text-xs text-red-600">{errors.interestedCountry.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredIntake" className="mb-1 block text-sm font-medium text-slate-700">
            Preferred Intake
          </label>
          <select
            id="preferredIntake"
            {...register("preferredIntake")}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          >
            <option value="">Select intake</option>
            <option value="September 2026">September 2026</option>
            <option value="February 2027">February 2027</option>
            <option value="September 2027">September 2027</option>
          </select>
          {errors.preferredIntake && (
            <p className="mt-1 text-xs text-red-600">{errors.preferredIntake.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="qualification" className="mb-1 block text-sm font-medium text-slate-700">
          Qualification
        </label>
        <select
          id="qualification"
          {...register("qualification")}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
        >
          <option value="">Select qualification</option>
          <option value="Completed 12th">Completed 12th</option>
          <option value="Appearing for 12th">Appearing for 12th</option>
          <option value="Qualified NEET">Qualified NEET</option>
        </select>
        {errors.qualification && (
          <p className="mt-1 text-xs text-red-600">{errors.qualification.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          placeholder="Any specific questions?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{serverMessage}</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? <LoadingSpinner size="sm" /> : "Get Free Counselling"}
      </Button>
    </form>
  );
}