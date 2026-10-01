import type { Metadata } from "next";

import { LegalPage } from "@/components/content/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Development terms and conditions for the Wood & Smoke Co. website.",
};

const sections = [
  {
    id: "status",
    title: "Draft status",
    body: [
      "These development terms are not final legal advice. They must be reviewed and approved by the restaurant before launch.",
    ],
  },
  {
    id: "menu",
    title: "Menu and pricing",
    body: [
      "The digital menu is transcribed from owner-supplied printed material. Prices, availability, ingredients, and add-ons require a final restaurant review. Government taxes may apply.",
    ],
  },
  {
    id: "reservations",
    title: "Reservation requests",
    body: [
      "Reservation requests are made by calling the restaurant. A table is not confirmed until the restaurant accepts the requested date, time, and party size.",
      "Cancellation, late-arrival, seating, and event policies remain to be supplied by the business.",
    ],
  },
  {
    id: "ordering",
    title: "Third-party ordering",
    body: [
      "Swiggy and Zomato links open independent services. Their prices, availability, delivery areas, fees, policies, and terms apply on those platforms.",
    ],
  },
  {
    id: "content",
    title: "Website content",
    body: [
      "Synthetic development images are clearly identified where used and must be replaced or approved before launch. Verified business information takes priority over development copy.",
    ],
  },
  {
    id: "liability",
    title: "Liability and review",
    body: [
      "Final limits of liability, governing law, contact details, and dispute terms require review by the business and its legal adviser.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and conditions."
      description="A readable development draft covering menu, bookings, content, and third-party ordering."
      effectiveDate="Development draft: 28 July 2026"
      sections={sections}
    />
  );
}
