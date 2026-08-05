import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  email: z.string().trim().email("Enter a valid email address"),
  interestedCountry: z
    .string()
    .min(1, "Please select a country you're interested in"),
  preferredIntake: z.string().min(1, "Please select a preferred intake"),
  qualification: z.string().min(1, "Please select your qualification"),
  message: z.string().max(500, "Message is too long").optional(),
  // honeypot field - should always be empty, bots tend to fill it
  website: z.string().max(0, "Spam detected").optional(),
});

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message is too long"),
  website: z.string().max(0, "Spam detected").optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type NewsletterValues = z.infer<typeof newsletterSchema>;