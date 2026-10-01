export const faqs = [
  {
    question: "Is the complete menu vegetarian?",
    answer:
      "Yes. Wood & Smoke Co. is presented as a 100% vegetarian kitchen. Please tell the team about allergies before ordering.",
    category: "Menu",
  },
  {
    question: "Can I reserve a table online?",
    answer:
      "Use the reservation page to call the restaurant with your preferred date, time, and party size. A table is confirmed only when the team accepts it.",
    category: "Reservations",
  },
  {
    question: "Where can I order online?",
    answer:
      "Public ordering listings are available on Swiggy and Zomato. Menu availability and pricing may differ by platform.",
    category: "Delivery",
  },
  {
    question: "Do you accommodate food allergies?",
    answer:
      "Share every allergy or dietary requirement with the restaurant before ordering. Ingredient and cross-contact details require confirmation from the kitchen.",
    category: "Allergies",
  },
  {
    question: "Where is the restaurant?",
    answer:
      "Shop No. 12, Mansarovar Complex, below O2 Gym, 22 No. Phatak, Bhupindra Road, Patiala.",
    category: "Dining",
  },
  {
    question: "What are the opening hours?",
    answer:
      "Public listings currently disagree about opening hours. Call the restaurant before making a special trip.",
    category: "Dining",
  },
] as const;

export const kitchenSteps = [
  {
    title: "Fresh dough",
    text: "Prepared for a light centre and crisp, charred edge.",
  },
  {
    title: "Hand-shaped",
    text: "Opened gently so the dough keeps its structure.",
  },
  {
    title: "Wood-fired oven",
    text: "Intense heat builds blister, smoke, and colour.",
  },
  {
    title: "Premium cheese",
    text: "Added for a rich melt without weighing down the crust.",
  },
  {
    title: "Fresh herbs",
    text: "A final aromatic layer lands after the bake.",
  },
  {
    title: "Served hot",
    text: "Finished for the table while the crust is still alive.",
  },
] as const;

export const galleryItems = [
  {
    src: "/images/pizza.png",
    alt: "Wood-fired vegetarian pizza with a blistered crust",
    title: "Wood-fired pizza",
    category: "Food",
  },
  {
    src: "/images/kitchen.png",
    alt: "Hands shaping fresh pizza dough beside an oven",
    title: "Hand-shaped dough",
    category: "Kitchen",
  },
  {
    src: "/images/pasta.png",
    alt: "Artisanal vegetarian pasta served in dark stoneware",
    title: "Artisanal pasta",
    category: "Food",
  },
  {
    src: "/images/burger.png",
    alt: "Premium vegetarian burger served with fries",
    title: "Gourmet burger",
    category: "Food",
  },
] as const;
