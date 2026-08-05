import { Viewport } from "next";
import { siteConfig } from "@/content/site";

export const SITE_CONTACT = {
  phone: siteConfig.phone,
  whatsapp: siteConfig.whatsapp,
  email: siteConfig.email,
  address: siteConfig.address,
};

export const siteMetadata = {
  title: {
    default: `${siteConfig.name} - Your Trusted Partner for MBBS Abroad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  applicationName: siteConfig.name,
  keywords: [
    "MBBS abroad",
    "MBBS Russia",
    "MBBS Georgia",
    "MBBS Kyrgyzstan",
    "MBBS Uzbekistan",
    "MBBS Armenia",
    "MBBS Vietnam",
    "NEET MBBS abroad",
    "study medicine abroad",
    "FMGE",
    "NMC approved medical university",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Your Trusted Partner for MBBS Abroad`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Your Trusted Partner for MBBS Abroad`,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f4c81",
};