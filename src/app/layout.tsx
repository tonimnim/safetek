import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Software & AI for businesses across Africa`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  applicationName: siteConfig.name,
  generator: "Next.js",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Software & AI for businesses across Africa`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Software & AI for businesses across Africa`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Software & AI for businesses across Africa`,
    description: siteConfig.shortDescription,
    images: ["/opengraph-image"],
    creator: siteConfig.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#100806" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/opengraph-image`,
  image: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  foundingDate: siteConfig.founded,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: siteConfig.name },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressCountry: siteConfig.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      areaServed: ["KE", "UG", "TZ", "RW", "AF"],
      availableLanguage: ["en", "sw"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Country", name: "Uganda" },
    { "@type": "Country", name: "Tanzania" },
    { "@type": "Country", name: "Rwanda" },
    { "@type": "Continent", name: "Africa" },
  ],
  knowsAbout: [
    "Software development",
    "Custom software engineering",
    "SaaS product development",
    "Mobile application development",
    "Web application development",
    "Backend engineering",
    "Frontend engineering",
    "Cloud infrastructure",
    "AI consultancy",
    "Machine learning engineering",
    "Large language model integration",
    "Retrieval-augmented generation",
    "Prompt engineering",
    "AI evaluation frameworks",
    "Mobility software",
    "Transit management software",
    "Matatu management software",
    "Fleet management software",
    "Logistics software",
    "Last-mile delivery software",
    "Healthcare software",
    "Telemedicine platforms",
    "M-Pesa integration",
    "Safaricom Daraja API integration",
    "Co-op Bank API integration",
    "NCBA API integration",
    "Fintech development",
    "Cloud cost optimization",
    "Performance marketing",
    "Growth strategy consulting",
  ],
  sameAs: [],
  slogan: "We build software hundreds of operators run on.",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: siteConfig.legalName },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="bottom-right" theme="dark" richColors closeButton />
      </body>
    </html>
  );
}
