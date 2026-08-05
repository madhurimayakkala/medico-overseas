"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi! I'm interested in MBBS abroad admissions. Can you help me?"
  );
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
    </a>
  );
}