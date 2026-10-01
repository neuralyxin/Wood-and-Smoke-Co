import type { Metadata } from "next";
import {
  ArrowUpRight,
  Instagram,
  MapPin,
  Phone,
  ShoppingBag,
} from "lucide-react";

import { PageHero } from "@/components/content/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, find, or contact Wood & Smoke Co. at Bhupindra Road in Patiala.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Find the fire."
        description="Call, get directions, follow the kitchen, or order online."
        image="/images/hero-poster.png"
      />
      <section className="section-shell contact-details section-pad">
        <div className="contact-primary">
          <h2 className="section-title">Visit in Patiala.</h2>
          <address>{restaurant.address}</address>
          <p>{restaurant.hoursLabel} before making a special trip.</p>
          <div className="contact-actions">
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "primary" })}
            >
              <MapPin aria-hidden="true" size={18} />
              Get directions
            </a>
            <a
              href={`tel:${restaurant.phone}`}
              className={buttonVariants({ variant: "secondary" })}
            >
              <Phone aria-hidden="true" size={18} />
              Call
            </a>
          </div>
        </div>
        <dl className="contact-list">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${restaurant.phone}`}>{restaurant.displayPhone}</a>
            </dd>
          </div>
          <div>
            <dt>Order online</dt>
            <dd>
              <a href={restaurant.swiggy} target="_blank" rel="noreferrer">
                Swiggy
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={restaurant.instagram} target="_blank" rel="noreferrer">
                @wood_and_smoke_co
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </dd>
          </div>
        </dl>
      </section>
      <section className="map-section">
        <iframe
          title="Map showing Wood and Smoke Co. in Patiala"
          src="https://www.google.com/maps?q=30.3421235,76.3795265&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="sr-only">
          Wood &amp; Smoke Co. is at {restaurant.address}. Use the directions
          link above if the embedded map is unavailable.
        </p>
      </section>
      <section
        className="section-shell direct-enquiry section-pad"
        aria-labelledby="direct-enquiry-title"
      >
        <div className="direct-enquiry-copy">
          <p className="kicker">Direct channels</p>
          <h2 id="direct-enquiry-title" className="section-title">
            Need a quick answer?
          </h2>
          <p className="body-copy">
            Call for reservations and time-sensitive questions. Use Instagram
            for updates, or head to Swiggy to place an order.
          </p>
        </div>
        <div className="direct-enquiry-actions">
          <a
            href={`tel:${restaurant.phone}`}
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            <Phone aria-hidden="true" size={19} />
            Call {restaurant.displayPhone}
          </a>
          <a
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            <Instagram aria-hidden="true" size={19} />
            Open Instagram
          </a>
          <a
            href={restaurant.swiggy}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            <ShoppingBag aria-hidden="true" size={19} />
            Order on Swiggy
          </a>
        </div>
      </section>
    </main>
  );
}
