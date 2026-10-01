import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/content/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Call Wood & Smoke Co. in Patiala to request a table.",
};

export default function ReservationsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Ask for a table."
        description="Call the restaurant with your preferred date, time, and party size. Your table is confirmed only when the team accepts it."
        image="/images/kitchen.png"
      />
      <section className="section-shell reservation-direct-grid section-pad">
        <div className="form-media">
          <Image
            src="/images/pizza.png"
            alt="A wood-fired vegetarian pizza ready for the table"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
          />
          <div>
            <h2>Need an immediate answer?</h2>
            <p>Call the restaurant directly before making a special trip.</p>
            <a
              href={`tel:${restaurant.phone}`}
              className={buttonVariants({ variant: "primary" })}
            >
              <Phone aria-hidden="true" size={18} />
              {restaurant.displayPhone}
            </a>
          </div>
        </div>
        <div className="reservation-direct-copy">
          <p className="kicker">Reservations by phone</p>
          <h2 className="section-title">Speak to the restaurant.</h2>
          <p className="body-copy form-page-intro">
            Calling is the fastest reliable way to check availability and
            request a table.
          </p>
          <div className="reservation-call-panel">
            <span>Restaurant phone</span>
            <strong>{restaurant.displayPhone}</strong>
            <a
              href={`tel:${restaurant.phone}`}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              <Phone aria-hidden="true" size={19} />
              Call to request a table
            </a>
            <small>{restaurant.hoursLabel}.</small>
          </div>
          <ol className="reservation-steps">
            <li>
              <span>01</span>
              <div>
                <strong>Choose your preferred time</strong>
                <p>Have your date, time, and number of guests ready.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Share any special requirements</strong>
                <p>Mention accessibility, allergies, or a celebration.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Wait for confirmation</strong>
                <p>A table is booked only after the restaurant confirms it.</p>
              </div>
            </li>
          </ol>
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            <MapPin aria-hidden="true" size={18} />
            Check the location
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
