"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  X,
} from "lucide-react";

import { primaryNavigation, restaurant } from "@/data/restaurant";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("page-top-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "site-header site-header-home",
        isScrolled && "site-header-scrolled",
      )}
    >
      <a
        href="#main-content"
        className="skip-link focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
      >
        Skip to content
      </a>
      <div className="nav-shell">
        <Link href="/" className="brand-lockup" aria-label="Wood and Smoke Co. home">
          <span>WOOD &amp; SMOKE CO.</span>
          <small>100% vegetarian</small>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "nav-link",
                pathname === item.href && "nav-link-active",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-home-actions">
          <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" size={17} />
            Patiala
          </a>
          <span aria-hidden="true" />
          <a
            href={restaurant.swiggy}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary", size: "sm" })}
          >
            <ShoppingBag aria-hidden="true" size={16} />
            Order on Swiggy
          </a>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              className="mobile-menu-trigger"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" size={24} strokeWidth={1.8} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="mobile-menu-sheet">
              <div className="mobile-menu-top">
                <Dialog.Title className="font-heading text-xl font-bold">
                  Wood &amp; Smoke Co.
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="icon-button" aria-label="Close navigation menu">
                    <X aria-hidden="true" size={24} />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="text-sm text-[var(--text-muted)]">
                Premium vegetarian wood-fired cooking in Patiala.
              </Dialog.Description>
              <nav className="mobile-menu-links" aria-label="Mobile navigation">
                {primaryNavigation.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                      <ArrowUpRight aria-hidden="true" size={19} />
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>
              <div className="mobile-menu-actions">
                <a href={`tel:${restaurant.phone}`}>
                  <Phone aria-hidden="true" size={19} />
                  Call
                </a>
                <a href={restaurant.swiggy} target="_blank" rel="noreferrer">
                  <ShoppingBag aria-hidden="true" size={19} />
                  Order on Swiggy
                </a>
              </div>
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                {restaurant.hoursLabel}. Call before making a special trip.
              </p>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
