import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oyik.ai"),
  title: {
    default: "Oyik.AI | The Intelligence Behind Every Real Estate Decision",
    template: "%s | Oyik.AI",
  },
  description: "AI employees for real estate teams. Instant replies, perfectly qualified leads, autonomous viewing bookings, and 24/7 engagement across web, social, email, and phone.",
  keywords: ["real estate AI", "property management automation", "AI real estate agent", "AI chatbots for real estate", "voice agents for real estate"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oyik.ai",
    title: "Oyik.AI | The Intelligence Behind Every Real Estate Decision",
    description: "AI employees for real estate teams. Autonomous lead qualification and viewing bookings 24/7.",
    siteName: "Oyik.AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oyik.AI Real Estate Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oyik.AI | The Intelligence Behind Every Real Estate Decision",
    description: "AI employees for real estate teams. Autonomous lead qualification and automated viewing bookings.",
    creator: "@oyikai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Oyik.AI",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "An AI workforce platform for real estate, providing intelligent chatbots, conversational voice agents, and lead qualification software.",
  "provider": {
    "@type": "Organization",
    "name": "Oyik.AI",
    "url": "https://oyik.ai"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontInter.variable} ${fontMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
