import {
  MapPin,
  BookOpen,
  Phone,
  ShoppingBag,
} from "lucide-react";

import { restaurant } from "@/data/restaurant";

const actions = [
  {
    href: `tel:${restaurant.phone}`,
    label: "Call",
    icon: Phone,
  },
  {
    href: "/menu",
    label: "Menu",
    icon: BookOpen,
  },
  {
    href: restaurant.mapsUrl,
    label: "Directions",
    icon: MapPin,
    external: true,
  },
  {
    href: restaurant.swiggy,
    label: "Swiggy",
    icon: ShoppingBag,
    external: true,
  },
] as const;

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Restaurant actions">
      {actions.map((action) => {
        const Icon = action.icon;
        const opensExternal = "external" in action && action.external;
        return (
          <a
            key={action.label}
            href={action.href}
            target={opensExternal ? "_blank" : undefined}
            rel={opensExternal ? "noreferrer" : undefined}
          >
            <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
            <span>{action.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
