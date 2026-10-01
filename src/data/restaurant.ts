export const restaurant = {
  name: "Wood & Smoke Co.",
  tagline: "Crafted by Fire. Loved by Foodies.",
  category: "Premium 100% Vegetarian Wood-Fired Kitchen",
  phone: "+919988005945",
  displayPhone: "+91 99880 05945",
  address:
    "Shop No. 12, Mansarovar Complex, below O2 Gym, 22 No. Phatak, Bhupindra Road, Patiala",
  shortAddress: "22 No. Phatak, Bhupindra Road, Patiala",
  coordinates: {
    latitude: 30.3421235,
    longitude: 76.3795265,
  },
  mapsUrl:
    "https://www.google.com/maps/place/Wood+%26+Smoke+Co./@30.3421306,76.3795423,17z",
  instagram: "https://www.instagram.com/wood_and_smoke_co/",
  zomato: "https://www.zomato.com/patiala/wood-smoke-co-model-town",
  swiggy:
    "https://www.swiggy.com/city/patiala/wood-and-smoke-co-patiala-city-rest1266396",
  hoursLabel: "Call to confirm today's opening hours",
} as const;

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
