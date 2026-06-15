import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { GoogleAds } from "@/components/tracking/GoogleAds";
import { AnalyticsProvider } from "@/components/tracking/AnalyticsProvider";
import { GTM, GoogleAnalytics, MetaPixel, MicrosoftClarity } from "@/components/tracking/GTM";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, faqSchema } from "@/lib/schema";
import { buildHomeMetadata } from "@/lib/seo";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = buildHomeMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body
        className={`${cairo.className} min-h-screen flex flex-col pb-20 md:pb-0 antialiased`}
        style={{ marginTop: 0 }}
      >
        <GTM />
        <GoogleAnalytics />
        <GoogleAds />
        <MetaPixel />
        <MicrosoftClarity />
        <JsonLd data={[organizationSchema(), faqSchema()]} />
        <AnalyticsProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyCTA />
          <WhatsAppFloat />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
