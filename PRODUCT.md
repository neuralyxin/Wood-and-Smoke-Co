# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are local diners in Patiala and people visiting the city who are deciding where to eat. They commonly arrive through mobile search, Maps, social media, or a shared link.

Their core jobs are to:

- Understand the restaurant concept and determine whether it suits their group.
- Browse the current menu, prices, ingredients, and dietary information.
- Request a table reservation.
- Start an online order.
- Find the restaurant, check current opening hours by phone, call, or follow it on Instagram.

Important audiences include families, groups, vegetarian diners, and younger diners interested in wood-fired pizza, pasta, and social dining.

## Product Purpose

The website is the digital front door for an operating restaurant. It should establish trust, communicate the quality and character of the food, and make the next action easy.

Reservations, online orders, and physical visits are equally important conversion outcomes. Success means that users can confidently choose the restaurant and complete any of those actions without unnecessary friction.

## Positioning

Wood & Smoke Co. is positioned as a premium, 100% vegetarian wood-fired restaurant in Patiala, Punjab.

Its durable distinction is the combination of vegetarian dining with an artisan wood-fired cooking process. The experience should make the preparation craft, premium ingredients, and restaurant atmosphere credible without resembling a fast-food brand or generic restaurant template.

## Operating Context

- The restaurant is currently operating.
- Most discovery and action-oriented usage is expected to happen on mobile.
- Users may be outdoors, travelling, or using a slow mobile connection.
- Menu, reservation, ordering, calling, Instagram, and directions must remain available when rich media is unavailable.
- Users should browse the menu as responsive HTML rather than downloading a PDF.
- A reservation request is not confirmed until the restaurant accepts it.
- The printed restaurant menu gives the address as Shop No. 12, Mansarovar Complex, below O2 Gym, 22 No. Phatak, Bhupindra Road, Patiala.
- The printed restaurant menu gives the order phone as `+91 99880 05945`.
- The user-supplied Google Maps listing resolves to approximately `30.3421235, 76.3795265`.
- Ordering, Maps, phone, and social destinations connect to verified public restaurant services. A future booking or enquiry provider requires owner approval.

## Capabilities and Constraints

Confirmed website capabilities:

- Complete public pages for Home, Menu, About, Gallery, Reservations, Contact, FAQs, Privacy Policy, Terms and Conditions, and 404.
- Searchable and filterable digital menu with dish details.
- Direct phone-based reservation requests without a simulated success state.
- Direct actions for online ordering, calling, Instagram, and directions.
- Restaurant gallery, FAQs, call-to-confirm opening information, and local contact details.
- Local and restaurant SEO, structured data, sitemap, and metadata.
- Responsive behavior from small mobile screens through large desktop displays.
- WCAG 2.2 AA accessibility and reduced-motion support.
- A cinematic image-led homepage with restrained native scrolling and bounded CSS motion.

Confirmed technical constraints:

- Next.js App Router, React 19, strict TypeScript, Tailwind CSS v4, and shadcn/ui.
- Server Components by default, with isolated client boundaries for filters, lightboxes, dialogs, and navigation state.
- CSS transitions and view-timeline reveals for bounded motion, with no WebGL dependency.
- Core content and actions must work without JavaScript-driven motion.
- The project should run after `npm install` and `npm run dev`.

Open integration decisions:

- Reservation delivery provider or backend.
- Whether the primary online-ordering destination should be Swiggy, Zomato, or both.
- Contact-form delivery provider.
- Newsletter provider.
- CMS and menu-management workflow.
- Analytics, consent, and operational monitoring providers.

### Owner-supplied operational details

The following information comes from the owner-supplied front and back menu images and is the current primary source:

- Address: `Shop No. 12, Mansarovar Complex, below O2 Gym, 22 No. Phatak, Bhupindra Road, Patiala`
- Order phone: `+91 99880 05945`
- Menu: 48 entries across gourmet veggie burgers, fries, bruschettas and garlic bread, artisanal pastas, sandwiches, bowls and sides, 10-inch wood-fired pizza, signature wraps, and signature refreshers.
- Burger, sandwich, and wrap prices include fries where stated on the printed menu.
- Government taxes apply.

Structured transcription: `data/menu.json`.

### Provisional public listing details

The following information comes from the user-supplied Google Maps place and corroborating public restaurant listings:

- Coordinates: `30.3421235, 76.3795265`
- Zomato listing: `https://www.zomato.com/patiala/wood-smoke-co-model-town`
- Swiggy listing: `https://www.swiggy.com/city/patiala/wood-and-smoke-co-patiala-city-rest1266396`
- Official Instagram: `https://www.instagram.com/wood_and_smoke_co/`
- Public listings describe the outlet as vegetarian-only and offering online delivery or takeaway.

### Unconfirmed operational details

- Opening hours conflict across public sources and must not be published until confirmed by the restaurant.
- Seating information conflicts: one public listing says no seating, while the product brief includes table reservations and physical dining. Do not activate production reservations until dine-in and seating availability are confirmed.
- Do not assume that the listed phone number accepts WhatsApp; no WhatsApp action is currently shown.
- Official email address, website, cancellation policy, accessibility details, and reservation policy remain unknown.
- The printed menu has no visible revision date. Treat it as the current baseline, but recheck prices and availability before launch.
- Public listings expose different FSSAI licence numbers. Do not publish either number until the restaurant supplies the official certificate.

Before production launch, replace or confirm all provisional contact information, opening hours, menu items and prices, ordering links, seating status, staff biographies, social links, policies, licences, and media.

## Brand Commitments

- Name: **Wood & Smoke Co.**
- Tagline: **Crafted by Fire. Loved by Foodies.**
- Category: **Premium 100% Vegetarian Wood-Fired Kitchen**
- Location: **Patiala, Punjab, India**
- The 100% vegetarian claim must remain clear and consistent.
- Brand voice should remain premium, warm, artisan, authentic, modern, confident, and welcoming.
- Fire should represent cooking craft and material warmth rather than aggression or novelty.
- Do not use unverified awards, certifications, review totals, customer claims, or ingredient-sourcing claims.

## Evidence on Hand

- Product and implementation requirements: `PRD-ENHANCED.md`.
- The user confirmed that Wood & Smoke Co. is an operating restaurant.
- The user confirmed that reservations, online orders, and physical visits are all priority outcomes.
- The user authorised temporary mock operational details until approved data is supplied.
- The user supplied the Google Maps place listing for Wood & Smoke Co., including coordinates `30.3421235, 76.3795265`.
- The user supplied the official Instagram account: `https://www.instagram.com/wood_and_smoke_co/`.
- The user supplied the printed front and back menu images: `first_page_menu.png` and `second_page_menu.png`.
- The printed menu confirms the address, order phone, menu categories, dish descriptions, and listed prices transcribed into `data/menu.json`.
- Zomato and Swiggy corroborate the Model Town outlet, Shop No. 12 address, vegetarian menu, and online-order availability.
- Zomato publicly lists the phone number `+91 99880 05945`.
- Third-party menu data is secondary to the owner-supplied printed menu.
- Opening hours, seating availability, ratings, price estimates, and FSSAI licence numbers conflict across public sources and remain unconfirmed.
- A reference design brief exists outside the project at `/Users/saurav/Downloads/DESIGN.md`; it is visual inspiration, not evidence of restaurant operations.
- No separate owner-approved logo asset, restaurant photography, opening hours, email, WhatsApp confirmation, chef biographies, reviews, awards, policies, or licence certificate currently exist in the project.
- Future work must not present placeholder reviews, awards, ratings, or operational details as verified facts.

## Product Principles

1. **Make every visit actionable.** Menu, reservation, ordering, calling, Instagram, and directions should be easy to find and use.
2. **Show craft without creating friction.** Rich storytelling may earn attention, but it must never delay or obscure restaurant actions.
3. **Design mobile and local first.** The experience must work for people making an immediate dining decision on a phone.
4. **Remain honest about evidence.** Mock data must be clearly replaceable, and social proof or operational claims must not be fabricated.
5. **Progressively enhance.** Core content and conversion paths must survive slow networks, reduced motion, missing WebGL, and integration failures.

## Accessibility & Inclusion

- Meet WCAG 2.2 AA.
- Support complete keyboard navigation, visible focus, semantic HTML, screen readers, zoom, and large text.
- Respect `prefers-reduced-motion` and provide a user-facing Reduce Effects control.
- Keep touch targets at least 44×44px with adequate spacing.
- Do not make information or actions dependent on colour, hover, animation, or video.
- Preserve usable menu, reservation, ordering, contact, and directions paths on low-bandwidth and low-capability devices.
