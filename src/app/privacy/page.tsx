import type { Metadata } from "next";

import { LegalPage } from "@/components/content/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Development privacy notice for the Wood & Smoke Co. website.",
};

const sections = [
  {
    id: "status",
    title: "Draft status",
    body: [
      "This development policy is not final legal advice. The restaurant must review and approve the wording before launch.",
      "The current website does not collect reservation or contact form submissions. Visitors use direct call, Maps, Instagram, and ordering links.",
    ],
  },
  {
    id: "information",
    title: "Information collection",
    body: [
      "No website account, reservation form, contact form, payment form, or newsletter form is currently provided.",
      "Analytics and consent tools have not been selected. Their behavior must be documented here before they are enabled.",
    ],
  },
  {
    id: "use",
    title: "Future services",
    body: [
      "If a booking, enquiry, analytics, or newsletter service is added later, this policy must be updated before the service is enabled.",
    ],
  },
  {
    id: "services",
    title: "Third-party services",
    body: [
      "Ordering, maps, Instagram, and phone links open or invoke third-party services. Their privacy practices apply when you use them.",
    ],
  },
  {
    id: "rights",
    title: "Questions and requests",
    body: [
      "A confirmed business email and privacy contact must be added before launch. Until then, call the restaurant using the public number on the Contact page.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy."
      description="A transparent development draft. Final legal wording and providers still require business review."
      effectiveDate="Development draft: 28 July 2026"
      sections={sections}
    />
  );
}
