"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
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
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <input
        type="text"
        {...register("website")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="c-fullName" className="mb-1 block text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          id="c-fullName"
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
          <label htmlFor="c-phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="c-phone"
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
          <label htmlFor="c-email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="c-email"
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

      <div>
        <label htmlFor="c-message" className="mb-1 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="c-message"
          {...register("message")}
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{serverMessage}</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? <LoadingSpinner size="sm" /> : "Send Message"}
      </Button>
    </form>
  );
}