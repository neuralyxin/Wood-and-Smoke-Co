import type { Metadata } from "next";

import { PageHero } from "@/components/content/page-hero";
import { GalleryExplorer } from "@/features/gallery/gallery-explorer";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the food and kitchen visual direction for Wood & Smoke Co. in Patiala.",
};

export default function GalleryPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Fire, plated."
        description="A development gallery showing the intended food and kitchen art direction."
        image="/images/pasta.png"
      />
      <section className="section-shell gallery-page-section section-pad">
        <aside className="development-notice">
          These are synthetic development images. Replace them with
          owner-approved restaurant photography before launch.
        </aside>
        <GalleryExplorer />
      </section>
    </main>
  );
}
