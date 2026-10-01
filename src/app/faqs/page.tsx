import type { Metadata } from "next";

import { PageHero } from "@/components/content/page-hero";
import { faqs } from "@/data/content";
import { FaqSearch } from "@/features/faqs/faq-search";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers about the vegetarian menu, ordering, reservations, location, and dining at Wood & Smoke Co.",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main id="main-content">
      <PageHero
        title="Good to know."
        description="Straight answers using only confirmed information and clearly labelled provisional details."
        image="/images/kitchen.png"
      />
      <section className="section-shell faq-page-section section-pad">
        <FaqSearch />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
