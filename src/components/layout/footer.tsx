import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

import { menu } from "@/data/menu";
import { primaryNavigation, restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <span className="font-display text-4xl tracking-wide">
            WOOD &amp; SMOKE CO.
          </span>
          <p>
            Premium vegetarian cooking shaped by heat, craft, and good company.
          </p>
          <div className="footer-socials">
            <a href={`tel:${restaurant.phone}`}>
              <Phone aria-hidden="true" size={18} />
              {restaurant.displayPhone}
            </a>
            <a href={restaurant.instagram} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" size={18} />
              Instagram
            </a>
            <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" size={18} />
              Directions
            </a>
          </div>
        </div>

        <div>
          <h2>Visit</h2>
          <address>{restaurant.address}</address>
          <p>{restaurant.hoursLabel}</p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            {primaryNavigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Menu</h2>
          <ul>
            {menu.categories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link href={`/menu?category=${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <p>© {new Date().getFullYear()} Wood &amp; Smoke Co.</p>
        <p className="data-note">Menu prices require final restaurant review.</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
