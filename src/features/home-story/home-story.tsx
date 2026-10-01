import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  BookOpen,
  CalendarDays,
  Instagram,
  MapPin,
  Phone,
  Sprout,
} from "lucide-react";

import { FaqAccordion } from "@/components/content/faq-accordion";
import { buttonVariants } from "@/components/ui/button";
import { menuItems } from "@/data/menu";
import { galleryItems } from "@/data/content";
import { restaurant } from "@/data/restaurant";
import { formatPrice } from "@/lib/utils";

const bestSellerIds = [
  "paneer-tikka-flame",
  "classic-basil-pesto",
  "paneer-royal-stack",
];

const menuRail = [
  {
    title: "Woodfire pizzas",
    description: "Blistered crusts and open-flame character.",
    href: "/menu?category=woodfire-pizza",
    image: "/images/pizza.png",
  },
  {
    title: "Artisanal pastas",
    description: "Comforting sauces and generous bowls.",
    href: "/menu?category=artisanal-pastas",
    image: "/images/pasta.png",
  },
  {
    title: "Veggie burgers",
    description: "Stacked, smoky, and completely vegetarian.",
    href: "/menu?category=gourmet-veggie-burgers",
    image: "/images/burger.png",
  },
  {
    title: "Our kitchen",
    description: "See the craft behind the wood-fired menu.",
    href: "/about",
    image: "/images/kitchen.png",
  },
] as const;

export function HomeStory() {
  const bestSellers = bestSellerIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is (typeof menuItems)[number] => Boolean(item));

  if (bestSellers.length < 3) {
    bestSellers.push(
      ...menuItems.filter(
        (item) => !bestSellers.some((existing) => existing.id === item.id),
      ).slice(0, 3 - bestSellers.length),
    );
  }

  return (
    <div className="home-story">
      <main id="main-content" className="home-content">
        <section className="reference-landing" data-scene="ignition">
          <div className="reference-live-stage">
            <Image
              src="/images/hero-heart.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="reference-live-art"
            />
            <div className="reference-live-scrim" aria-hidden="true" />
            <div className="section-shell reference-live-copy">
              <p className="kicker">100% vegetarian wood-fired kitchen</p>
              <h1 className="display-title">
                <span>Crafted by fire.</span>
                <span>Loved by foodies.</span>
              </h1>
              <p>
                100% vegetarian wood-fired creations, inspired by tradition
                and elevated by fire.
              </p>
              <div className="hero-actions">
                <Link href="/menu" className={buttonVariants({ variant: "primary", size: "lg" })}>
                  <BookOpen aria-hidden="true" size={18} />
                  View menu
                </Link>
                <Link href="/reservations" className={buttonVariants({ variant: "cream", size: "lg" })}>
                  <CalendarDays aria-hidden="true" size={18} />
                  Request a table
                </Link>
                <a href={restaurant.swiggy} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  <Bike aria-hidden="true" size={18} />
                  Order on Swiggy
                </a>
              </div>
            </div>
          </div>

          <div className="reference-menu-rail">
            <div className="reference-rail-heading">
              <p className="kicker">From ember to table</p>
              <h2>Explore our wood-fired creations</h2>
            </div>
            <div className="reference-rail-cards">
              {menuRail.map((item) => (
                <Link key={item.title} href={item.href} className="reference-rail-card">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22vw, 72vw"
                  />
                  <span className="reference-rail-card-scrim" aria-hidden="true" />
                  <span className="reference-rail-card-copy">
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                    <ArrowRight aria-hidden="true" size={21} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          className="best-sellers section-pad"
          data-scene="assembly"
          aria-labelledby="best-sellers-title"
        >
          <div className="section-shell">
            <h2 id="best-sellers-title" className="section-title">Three good places to start.</h2>
            <p className="body-copy">
              A short edit from the printed menu, with prices shown before you
              decide.
            </p>
            <div className="best-seller-grid">
              {bestSellers.map((item, index) => (
                <article className="best-seller-card" key={item.id}>
                  <div className="best-seller-image">
                    <Image
                      src={
                        item.categoryId.includes("pasta")
                          ? "/images/pasta.png"
                          : item.categoryId.includes("burger")
                            ? "/images/burger.png"
                            : "/images/pizza.png"
                      }
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="best-seller-copy">
                    <div>
                      <span className="veg-mark" aria-label="Vegetarian">
                        <Sprout aria-hidden="true" size={15} />
                      </span>
                      {index === 0 && <span className="chef-note">House pick</span>}
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description ?? "A vegetarian favourite from our menu."}</p>
                    <div className="price-row">
                      <strong>{formatPrice(item.price, item.priceLabel)}</strong>
                      <Link href={`/menu?dish=${item.id}`}>
                        View dish
                        <ArrowRight aria-hidden="true" size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="story-section section-pad"
          data-scene="craft"
          aria-labelledby="story-title"
        >
          <div className="section-shell story-grid">
            <div className="story-image">
              <Image
                src="/images/kitchen.png"
                alt="Hands shaping fresh dough near a wood-fired oven"
                fill
                sizes="(min-width: 768px) 52vw, 100vw"
              />
            </div>
            <div className="story-copy">
              <h2 id="story-title" className="section-title">
                Heat, handled with care.
              </h2>
              <p className="body-copy">
                Wood-fired cooking is fast only at the final moment. Before the
                oven, there is dough, preparation, balance, and patient hands.
              </p>
              <dl className="story-facts">
                <div>
                  <dt>100%</dt>
                  <dd>Vegetarian kitchen</dd>
                </div>
                <div>
                  <dt>48</dt>
                  <dd>Printed-menu dishes</dd>
                </div>
                <div>
                  <dt>1</dt>
                  <dd>Wood-fired point of view</dd>
                </div>
              </dl>
              <Link
                href="/about"
                className={buttonVariants({ variant: "secondary" })}
              >
                Our story
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="social-faq-section section-pad"
          data-scene="cooling"
          aria-labelledby="social-title"
        >
          <div className="section-shell social-faq-grid">
            <div>
              <div className="social-heading">
                <h2 id="social-title" className="section-title">
                  Follow the fire.
                </h2>
                <a href={restaurant.instagram} target="_blank" rel="noreferrer">
                  <Instagram aria-hidden="true" size={20} />
                  @wood_and_smoke_co
                </a>
              </div>
              <div className="social-grid">
                {galleryItems.map((item) => (
                  <Link href="/gallery" key={`social-${item.src}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="faq-preview">
              <h2 className="font-heading text-3xl font-bold">Good to know.</h2>
              <FaqAccordion items={undefined} />
              <Link href="/faqs">
                All FAQs
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="reservation-cta"
          data-scene="final-spark"
          aria-labelledby="reservation-cta-title"
        >
          <div className="section-shell reservation-cta-inner">
            <p className="kicker">Your table</p>
            <h2 id="reservation-cta-title" className="display-title">
              Come hungry.
            </h2>
            <p>
              Call the restaurant with your preferred time and wait for the
              team to confirm your table.
            </p>
            <div className="reservation-actions">
              <Link
                href="/reservations"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Request a table
              </Link>
              <a
                href={`tel:${restaurant.phone}`}
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                <Phone aria-hidden="true" size={18} />
                Call now
              </a>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                <MapPin aria-hidden="true" size={18} />
                Directions
              </a>
            </div>
            <p className="reservation-note">{restaurant.hoursLabel}</p>
          </div>
        </section>

      </main>
    </div>
  );
}
