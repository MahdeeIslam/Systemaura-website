import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* Display face — confident, geometric, used for every headline. */
const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

/* Body face — highly readable, used for everything else. */
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteName = "SystemAura Solutions";
const tagline =
  "Custom systems, automations, apps, and websites that save you time, cut down manual work, and help you make more money.";

export const metadata: Metadata = {
  metadataBase: new URL("https://systemaura.com"),
  title: {
    default: `${siteName} — Systems That Drive Growth`,
    template: `%s | ${siteName}`,
  },
  description: tagline,
  keywords: [
    "business systems",
    "automation",
    "operations",
    "custom software",
    "Melbourne",
    "glass manufacturing",
    "cabinet making",
    "construction",
    "trades",
  ],
  openGraph: {
    title: `${siteName} — Systems That Drive Growth`,
    description: tagline,
    siteName,
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-canvas text-navy antialiased">
        {/* Accessibility: lets keyboard users jump past the nav */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-electric focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
