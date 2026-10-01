import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/content/page-hero";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the wood-fired vegetarian cooking philosophy behind Wood & Smoke Co. in Patiala.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        title="A kitchen shaped by heat."
        description="Vegetarian food built around texture, preparation, and the character of a wood-fired oven."
        image="/images/kitchen.png"
      />
      <section className="section-shell about-intro section-pad">
        <div>
          <p className="kicker">The point of view</p>
          <h2 className="section-title">Fire should add character.</h2>
        </div>
        <p className="body-copy">
          The restaurant pairs a completely vegetarian menu with the depth and
          theatre of wood-fired cooking. The goal is simple: familiar food,
          treated with more care and finished with real heat.
        </p>
      </section>
      <section className="about-feature" id="experience">
        <div className="section-shell about-feature-grid">
          <div className="about-feature-image">
            <Image
              src="/images/pizza.png"
              alt="Wood-fired vegetarian pizza with a blistered crust"
              fill
              sizes="(min-width: 768px) 52vw, 100vw"
            />
          </div>
          <div className="about-feature-copy">
            <h2 className="section-title">From ember to table.</h2>
            <p className="body-copy">
              Ingredients stay recognisable. Dough keeps its structure. Herbs
              land fresh. The oven contributes char and warmth without turning
              every plate into a stunt.
            </p>
            <Link
              href="/menu"
              className={buttonVariants({ variant: "primary" })}
            >
              Explore the menu
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-shell principles-section section-pad">
        <h2 className="section-title">Three things stay clear.</h2>
        <div className="principles-grid">
          <article>
            <strong>Vegetarian throughout</strong>
            <p>
              The complete menu is positioned as vegetarian, from pizza and
              pasta to burgers, wraps, and refreshers.
            </p>
          </article>
          <article>
            <strong>Craft over spectacle</strong>
            <p>
              Fire is treated as a cooking material, not a theme-park effect.
            </p>
          </article>
          <article>
            <strong>Details before claims</strong>
            <p>
              Team stories, sourcing commitments, and historical dates will be
              published only after owner approval.
            </p>
          </article>
        </div>
      </section>
      <section className="section-shell owner-content-state">
        <h2>People and timeline</h2>
        <p>
          Chef profiles, founding dates, and sustainability commitments are
          intentionally withheld until the restaurant supplies verified
          details.
        </p>
      </section>
    </main>
  );
}
