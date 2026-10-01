# Wood & Smoke Co.

A responsive website for the operating vegetarian wood-fired restaurant in Patiala. The implementation follows the supplied landing-page art direction while keeping the navigation, hero copy, CTAs, category cards, menu, and dialogs as real interface elements.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Production checks:

```bash
npm run lint
npm run build
npm start
```

No environment variables are required for local development.

## Content that still needs owner confirmation

- Restaurant hours
- Live email address
- WhatsApp availability
- Dine-in and reservation policies
- Listing ownership for the verified order-platform links
- Ratings, reviews, staff profiles, history, and sourcing claims
- Final menu and price review
- Privacy and terms review

The site intentionally labels or withholds these details instead of presenting dummy information as fact.

## Replace restaurant details

- Business details and external links: `src/data/restaurant.ts`
- Menu categories, dishes, descriptions, and prices: `data/menu.json`
- FAQ, gallery, and kitchen-step content: `src/data/content.ts`
- Generated development images: `public/images`
- SEO metadata and Restaurant schema: `src/app/layout.tsx`

The hero artwork and food images are synthetic development assets. Replace them with owner-approved photography before launch while preserving the same aspect ratios and vegetarian content.

## Main routes

- `/` landing page
- `/menu` searchable and filterable menu
- `/about` restaurant point of view
- `/gallery` filterable gallery and lightbox
- `/reservations` direct phone reservation path
- `/contact` verified phone, location, Instagram, and Swiggy actions
- `/faqs` searchable FAQ
- `/privacy` and `/terms` clearly marked legal drafts

## Reservation and contact behavior

The website does not simulate successful submissions. Reservations route to the public restaurant phone, and contact actions use the confirmed phone, Maps, Instagram, and Swiggy destinations. Add a real booking or enquiry provider only after the restaurant supplies and approves it.

## Design and QA

- Design contract: `DESIGN.md`
- Motion and responsive QA: `docs/MOTION-QA.md`
- Asset manifest: `docs/ASSET-MANIFEST.md`
