import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "./seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Yoga Cure Institute",
    template: "%s | Yoga Cure Institute",
  },
  description:
    "Yoga Cure Institute, established in 1937, continues the tradition of therapeutic yoga through yoga practice, education and healing.",
  metadataBase: siteUrl,
  applicationName: "Yoga Cure Institute",
  keywords: [
    "Yoga Cure Institute",
    "yoga therapy in Kolkata",
    "therapeutic yoga",
    "Hatha Yoga",
    "yoga education",
    "New Alipore yoga",
  ],
  authors: [{ name: "Yoga Cure Institute" }],
  creator: "Yoga Cure Institute",
  publisher: "Yoga Cure Institute",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Yoga Cure Institute | Therapeutic Yoga in Kolkata",
    description:
      "Authentic therapeutic yoga, education and healing rooted in a legacy established in 1937.",
    url: siteUrl,
    siteName: "Yoga Cure Institute",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Yoga practice at Yoga Cure Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Cure Institute | Therapeutic Yoga in Kolkata",
    description:
      "Authentic therapeutic yoga, education and healing rooted in a legacy established in 1937.",
    images: ["/images/home/home-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "LocalBusiness"],
              "@id": `${siteUrl}#organization`,
              name: "Yoga Cure Institute",
              url: siteUrl,
              logo: `${siteUrl}/Yoga_Cure_Institute_Logo.png`,
              image: `${siteUrl}/images/home/home-hero.jpg`,
              description:
                "Yoga Cure Institute provides authentic therapeutic yoga, education and healing in Kolkata.",
              foundingDate: "1937",
              telephone: "+91 9830966003",
              email: "info@yogacureinstitute.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "P-43B, Block H, New Alipore",
                addressLocality: "Kolkata",
                postalCode: "700053",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Kolkata",
              },
              knowsAbout: [
                "Therapeutic yoga",
                "Hatha Yoga",
                "Yoga education",
              ],
            }),
          }}
        />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
