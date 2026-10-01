# Motion and Responsive QA

## Motion contract

- The landing hero does not animate or depend on WebGL.
- The category rail uses a small image-scale hover only.
- Editorial sections use short CSS view reveals where supported.
- The homepage uses native document flow without pinned scroll sequences.
- `prefers-reduced-motion: reduce` disables non-essential animation and smooth scrolling.

## Verified

- ESLint passes.
- Next.js production compilation and TypeScript checks pass.
- All 13 application routes prerender successfully.
- Home route responds with HTTP 200 from the local development server.
- Desktop landing page checked at 1440 by 1200.
- Compact responsive landing page checked with the mobile navigation and fixed action bar.
- Hero navigation, menu CTA, reservation CTA, order CTA, and category rail are live links.
- The same navbar component is rendered on every route.
- No WebGL or 3D code is included in the application bundle.

## Launch checks

- Replace synthetic images with owner-approved photography if available.
- Verify menu prices against the restaurant's current printed menu.
- Confirm hours and all external order links.
- Confirm dine-in and reservation policies; connect a booking provider only if the restaurant wants online requests.
- Test the final deployment on iOS Safari and Android Chrome.
