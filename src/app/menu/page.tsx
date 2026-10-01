import type { Metadata } from "next";
import { Suspense } from "react";

import { PageHero } from "@/components/content/page-hero";
import { MenuExplorer } from "@/features/menu/menu-explorer";
import { menu } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Wood & Smoke Co.'s 100% vegetarian menu, including wood-fired pizza, pasta, burgers, wraps, sides, and refreshers.",
};

export default function MenuPage() {
  return (
    <main id="main-content">
      <PageHero
        title="The whole menu."
        description="Forty-eight vegetarian dishes from the owner-supplied printed menu, searchable by name and ingredient."
        image="/images/pizza.png"
      />
      <section className="section-shell menu-page-section">
        <Suspense fallback={<MenuSkeleton />}>
          <MenuExplorer />
        </Suspense>
        <aside className="menu-source-note">
          <p>
            {menu.taxNote}. The printed menu has no visible revision date, so
            price and availability need final restaurant confirmation. Live
            delivery-platform prices may differ.
          </p>
        </aside>
      </section>
    </main>
  );
}

function MenuSkeleton() {
  return (
    <div className="menu-skeleton" aria-label="Loading menu">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>
          <span />
          <span />
          <span />
        </div>
      ))}
    </div>
  );
}
