import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorFollower } from "@/components/cursor-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kiro-powers.dev"),
  title: {
    default: "Kiro Powers | CTO-in-a-box for SaaS Founders by Kamlesh Choudhary",
    template: "%s | Kiro Powers",
  },
  description: "3 Production-Grade Kiro Powers for Full Stack Development. Web Intelligence, Full Stack Architect, and UI Designer powers. Open source development tools for startups, enterprises, and agencies. Built by Kamlesh Choudhary (@devxkamlesh)",
  keywords: [
    "kiro powers",
    "full stack development",
    "web intelligence",
    "ui design tools",
    "saas development",
    "developer tools",
    "open source",
    "react development",
    "nextjs tools",
    "typescript",
    "kamlesh choudhary",
    "devxkamlesh",
    "production grade code",
    "enterprise architecture",
    "startup development",
    "agency tools",
    "ai integration",
    "rag systems",
    "vector databases",
    "microservices",
    "system design",
    "cto tools",
    "kiro ai",
    "kiro ide",
  ],
  authors: [{ name: "Kamlesh Choudhary", url: "https://linkedin.com/in/devxkamlesh" }],
  creator: "Kamlesh Choudhary (@devxkamlesh)",
  publisher: "Kamlesh Choudhary",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kiro-powers.dev",
    title: "Kiro Powers | CTO-in-a-box for SaaS Founders",
    description: "3 Production-Grade Kiro Powers for Full Stack Development. Open source tools for startups and enterprises.",
    siteName: "Kiro Powers by Kamlesh Choudhary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kiro Powers - Production-Grade Development Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiro Powers | CTO-in-a-box for SaaS Founders",
    description: "3 Production-Grade Kiro Powers for Full Stack Development",
    creator: "@devxkamlesh",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kiro-powers.dev",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kiro Powers",
  description: "Production-grade development tools for full stack applications",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Kamlesh Choudhary",
    url: "https://linkedin.com/in/devxkamlesh",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://kiro-powers.dev" />
        <meta name="theme-color" content="#9046ff" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <SmoothScroll />
        <CursorFollower />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
