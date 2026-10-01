import type { Metadata } from "next";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import "@/app/globals.css";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { Navbar } from "@/components/layout/navbar";
import { restaurant } from "@/data/restaurant";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://woodandsmoke.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${restaurant.name} | Vegetarian Wood-Fired Restaurant in Patiala`,
    template: `%s | ${restaurant.name}`,
  },
  description:
    "Explore the 100% vegetarian menu at Wood & Smoke Co., a premium wood-fired kitchen in Patiala.",
  keywords: [
    "vegetarian restaurant Patiala",
    "wood fired pizza Patiala",
    "artisan pasta Patiala",
    "cafe in Patiala",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: restaurant.name,
    description: restaurant.tagline,
    images: [{ url: "/images/hero-heart.png", width: 1672, height: 941 }],
  },
  twitter: {
    card: "summary_large_image",
    title: restaurant.name,
    description: restaurant.tagline,
    images: ["/images/hero-heart.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: restaurant.category,
    servesCuisine: ["Vegetarian", "Pizza", "Pasta"],
    telephone: restaurant.displayPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 12, Mansarovar Complex, below O2 Gym, 22 No. Phatak, Bhupindra Road",
      addressLocality: "Patiala",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.coordinates.latitude,
      longitude: restaurant.coordinates.longitude,
    },
    sameAs: [restaurant.instagram, restaurant.zomato, restaurant.swiggy],
    servesVegetarianFood: true,
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div id="page-top-sentinel" className="page-top-sentinel" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
