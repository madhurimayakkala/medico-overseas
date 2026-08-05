import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import IntroWrapper from "@/components/intro/IntroWrapper";

import { siteMetadata, siteViewport } from "@/lib/metadata";

export const metadata: Metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Runs before first paint. Adds "intro-active" to <html> if the
            intro hasn't been seen this session yet, which the CSS rule in
            globals.css uses to hide #site-content until the intro
            finishes — this is what prevents a flash of page content. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!sessionStorage.getItem("introSeen")) {
                  document.documentElement.classList.add("intro-active");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ViewTransitions>
          <IntroWrapper>
            <div id="site-content" className="flex min-h-full flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
          </IntroWrapper>
        </ViewTransitions>
      </body>
    </html>
  );
}