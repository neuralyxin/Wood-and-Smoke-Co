# Wood & Smoke Co. — Enhanced Product Requirements Document

**Document version:** 2.2

**Product:** Production-ready restaurant website

**Brand:** Wood & Smoke Co.

**Location:** Patiala, Punjab, India

**Tagline:** Crafted by Fire. Loved by Foodies.

---

## 1. Product Vision

Design and develop a complete, production-ready website for **Wood & Smoke Co.**, a premium **100% vegetarian wood-fired restaurant** in Patiala.

The experience should feel like entering the restaurant at dusk: warm firelight, dark natural materials, handcrafted food, quiet confidence, and moments of theatre. The website must combine editorial hospitality design with fast, intuitive restaurant actions.

This is not a landing-page mockup. It is a complete, responsive, accessible, SEO-ready website with reusable architecture, realistic content, working navigation, validated forms, media galleries, and carefully controlled motion.

### Primary user goals

Users should be able to:

1. Understand the restaurant concept within five seconds.
2. Browse the menu and prices without downloading a PDF.
3. Book a table quickly on any device.
4. Call, message, order, or get directions with minimal friction.
5. Judge food quality and ambience through strong visual storytelling.
6. Find opening hours, contact details, and policies easily.

### Business goals

- Establish Wood & Smoke Co. as a premium vegetarian dining destination.
- Increase table reservations and direct enquiries.
- Increase menu discovery and online-order clicks.
- Improve discovery for restaurant and cuisine searches in Patiala.
- Create a scalable foundation for ordering, loyalty, CMS, and multiple locations.

---

## 2. Success Criteria

The finished website must:

- Be complete and production-ready, not a UI prototype.
- Be fully responsive from 320px to 1920px and beyond.
- Use realistic restaurant content with no lorem ipsum.
- Present a distinctive, premium visual identity rather than a generic template.
- Deliver one continuous 3D Ember Core narrative from the landing hero to the final reservation CTA.
- Use motion to reinforce hierarchy, craft, and spatial continuity.
- Preserve native scrolling; never hijack or delay user input.
- Meet WCAG 2.2 AA requirements.
- Respect `prefers-reduced-motion`.
- Use semantic HTML and complete keyboard navigation.
- Use clean, reusable, strictly typed code.
- Follow modern Next.js App Router and React best practices.
- Achieve strong Core Web Vitals on realistic mobile hardware.
- Require minimal manual editing after generation.

### Target quality metrics

- Lighthouse Performance: **95+**
- Lighthouse Accessibility: **100**
- Lighthouse SEO: **100**
- Lighthouse Best Practices: **95+**
- Largest Contentful Paint: **under 2.5 seconds**
- Interaction to Next Paint: **under 200 milliseconds**
- Cumulative Layout Shift: **under 0.1**
- No long animation task should block the main thread for more than one frame.

---

## 3. Audience

### Primary audiences

- Diners in Patiala searching for premium vegetarian food.
- Families and groups planning lunch or dinner.
- Young diners interested in wood-fired pizza, pasta, and social dining.
- Visitors comparing restaurants through images, ratings, and menus.

### Usage context

- Most users will arrive from search, Maps, Instagram, or a shared link.
- A significant portion of traffic will be mobile and action-oriented.
- Users may be outdoors or on slow mobile networks.
- Menu, booking, calling, WhatsApp, and directions must remain usable even when rich media is slow.

---

## 4. Brand and Experience Direction

### Brand personality

- Premium
- Warm
- Artisan
- Authentic
- Modern
- Minimal
- Textural
- Confident
- Welcoming

### Creative concept: “From Ember to Table”

The visual story follows the journey of a dish:

**raw ingredients → preparation → flame → finishing → shared table**

This concept should influence image selection, section transitions, microcopy, and motion. Fire is treated as a material and a craft—not as a loud visual gimmick.

### Relationship to the supplied style reference

The supplied Impossible Foods reference is inspiration for **energy and composition**, not a source to copy literally.

Retain:

- Viewport-filling condensed display typography.
- Full-bleed dark section canvases.
- Flat, high-contrast interface surfaces.
- Irregular mask-cut food photography.
- Asymmetrical layouts with disciplined negative space.
- A single dominant action colour.
- Sticky navigation and bold section openers.

Translate for Wood & Smoke Co.:

- Replace branded wine/red colours with charcoal, copper, cream, and controlled ember orange.
- Replace punk-butcher language with artisan fire, craft, ingredients, and hospitality.
- Replace packaged-product photography with wood-fired food, kitchen process, and restaurant ambience.
- Replace flat-only imagery with the approved Ember Core 3D narrative.
- Preserve premium restraint around forms, reviews, legal content, and conversion actions.

The new 3D direction explicitly supersedes the reference document’s “no 3D renders” instruction.

### Visual inspiration

- Wood-fired ovens and glowing embers
- Copper utensils and warm reflected light
- Charred crust and handmade dough
- Marble, stone, dark timber, and linen
- Fresh herbs, vegetables, and melted cheese
- Smoke, shallow depth of field, and restaurant ambience
- Editorial food photography and cinematic close-ups

### Avoid

- Fast-food visual language
- Bright primary colours
- Cartoon illustrations
- Cheap or high-saturation gradients
- Excessive glassmorphism
- Neon glow
- Over-rounded “app-like” cards
- Busy collage layouts
- Generic stock photography
- Constant animation
- Scroll-jacking or forced horizontal scrolling
- Fire particles, sparks, or smoke effects over readable text

---

## 5. UI Design System

### 5.1 Colour palette

Use semantic design tokens. Do not hardcode raw colours inside components.

| Role | Token | Value | Usage |
|---|---|---:|---|
| Canvas | `--background` | `#1B1714` | Main page background |
| Deep canvas | `--background-deep` | `#120F0D` | Hero and cinematic sections |
| Surface | `--surface` | `#241E1A` | Elevated content areas |
| Card | `--card` | `#2F2823` | Cards and panels |
| Card hover | `--card-hover` | `#372E28` | Hover and selected card state |
| Primary accent | `--accent` | `#D6A760` | Primary actions and emphasis |
| Copper | `--copper` | `#B97738` | Decorative details and secondary emphasis |
| Hot ember | `--ember-hot` | `#E35D36` | Fire emission and rare kinetic emphasis only |
| Cream | `--cream` | `#F6F2EC` | Light editorial sections |
| Text primary | `--text-primary` | `#FFFFFF` | Primary dark-surface text |
| Text on cream | `--text-dark` | `#211B17` | Text on light surfaces |
| Text muted | `--text-muted` | `#B9B2AA` | Supporting text |
| Border | `--border` | `rgba(255,255,255,.10)` | Dividers and outlines |
| Focus | `--focus` | `#F0C982` | Accessible focus ring |
| Success | `--success` | `#7FA36A` | Confirmations |
| Error | `--error` | `#E78A7B` | Form errors |

Requirements:

- Body copy must meet a contrast ratio of at least 4.5:1.
- Large display text must meet at least 3:1.
- Copper should not be used for small body text on dark backgrounds unless contrast is verified.
- Hot ember is reserved for emissive 3D details, active scroll progress, and rare display punctuation; it is not a body-text colour.
- Colour must never be the only indication of state.

### 5.2 Typography

Assign one clear role to each font:

- **Bebas Neue:** large cinematic display text, short phrases, numerals.
- **League Spartan:** page titles, section headings, navigation, and card titles.
- **Manrope:** body copy, form labels, buttons, prices, and UI text.
- **Inter:** optional system-oriented fallback for dense utility content only.

Use `next/font` and load only the required weights.

Suggested fluid type scale:

| Style | Mobile | Desktop | Line height |
|---|---:|---:|---:|
| Display XL | 56px | 176px | 0.80–0.92 |
| Display L | 44px | 88px | 0.95 |
| H1 | 40px | 72px | 1.0 |
| H2 | 32px | 56px | 1.05 |
| H3 | 24px | 34px | 1.15 |
| Body L | 18px | 20px | 1.6 |
| Body | 16px | 18px | 1.6 |
| Label | 13px | 14px | 1.3 |

Rules:

- Use uppercase display text sparingly.
- The homepage hero may use a special fluid display size up to 220px on very wide screens when line breaks and contrast remain stable.
- Keep paragraph measure between 55 and 72 characters on desktop.
- Body text must not be smaller than 16px on mobile.
- Use tabular figures for prices, times, and statistics.
- Avoid placing long text over detailed images.

### 5.3 Spacing and layout

Use an 8px spacing system with 4px half-steps:

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128`

Layout requirements:

- Mobile gutters: 20px.
- Tablet gutters: 32px.
- Desktop gutters: 48–72px.
- Standard content max width: 1280px.
- Reading content max width: 760px.
- Section spacing: 80px mobile, 128–160px desktop.
- Use editorial asymmetry on large screens while preserving logical reading order.
- Avoid more than two competing visual columns.
- Reserve media aspect ratios before assets load to prevent layout shift.

### 5.4 Shape, border, and elevation

- Buttons: 4–8px radius; avoid pill buttons except filters and status chips.
- Content cards: 12–20px radius depending on scale.
- Images: 8–16px radius or intentionally square editorial crops.
- Borders: quiet 1px translucent borders.
- Shadows: soft, warm, and low-opacity; avoid floating dashboard-style cards.
- Glass blur may be used only for the navigation bar or modal backdrop.

### 5.5 Iconography

- Use Lucide icons exclusively for interface actions.
- Maintain a consistent 1.5–2px stroke.
- Standard icon sizes: 16px, 20px, and 24px.
- Every icon-only control requires an accessible name.
- Do not use emoji as interface icons.
- Food and category identity should come from photography, not clip art.

### 5.6 Photography and video

Photography is the strongest visual asset and must feel real.

- Prefer tight, tactile food shots with directional warm light.
- Include hands and preparation details to show craft.
- Balance food, interior, kitchen, chef, and guest imagery.
- Avoid inconsistent colour temperature across a single grid.
- Use AVIF or WebP for images with responsive `sizes`.
- Always set intrinsic dimensions or an aspect ratio.
- Hero video should have a high-quality poster image and graceful static fallback.
- Do not autoplay video when the user requests reduced motion or data saving.

---

## 6. Motion and Scroll System

### 6.1 Motion thesis

The homepage is one continuous transformation from **ember → ingredients → dish → oven → shared table**. The 3D scene carries that transformation; DOM motion remains quiet and supports reading.

The focal moment is the **Live Kitchen bake sequence**. It is the only desktop section that pins. Other chapters advance through normal vertical scrolling without stopping or redirecting the user.

Motion must:

- Preserve continuity between chapters.
- Explain how raw ingredients become a finished dish.
- Keep the primary CTA and content immediately usable.
- Respond correctly when users scroll forward, backward, or rapidly.
- Become progressively calmer after the Live Kitchen climax.

Avoid independent spectacle in every section. There is one authored 3D narrative, one supporting DOM reveal language, and routine interaction feedback.

### 6.2 Motion system responsibilities

- **CSS transitions:** hover, focus, press, colour, underline, and simple opacity states.
- **Framer Motion:** dialogs, accordions, gallery/filter transitions, and bounded component state changes.
- **GSAP + ScrollTrigger:** one homepage story controller, DOM chapter cues, and the Live Kitchen pin.
- **React Three Fiber + Three.js:** one fixed decorative WebGL canvas and the Ember Core scene.
- **Drei:** GLTF loading, environment helpers, adaptive DPR, and carefully bounded post-processing.
- Do not use premium GSAP plugins that require a paid licence.
- Do not add Lenis, Locomotive Scroll, or another scroll-normalisation layer.
- Do not run GSAP and Framer Motion against the same property on the same element.
- Register ScrollTrigger once and create timelines inside `useGSAP` with a scoped root.
- Revert GSAP contexts, match-media handlers, observers, and Three.js resources on unmount.
- ScrollTrigger writes numeric targets into mutable scene refs; it must not call React state setters on every scroll frame.
- React Three Fiber’s `useFrame` interpolates toward those targets with delta-time damping so fast scroll input remains smooth and reversible.

### 6.3 Motion tokens

| Token | Duration | Use |
|---|---:|---|
| Instant | 100ms | Press feedback |
| Fast | 180ms | Hover, focus, icon change |
| Standard | 280ms | Menu, filter, accordion |
| Reveal | 450ms | Section and card entrance |
| Cinematic | 700ms | Hero and major image reveal |

Recommended easing:

- Enter: `cubic-bezier(0.16, 1, 0.3, 1)`
- Exit: `cubic-bezier(0.7, 0, 0.84, 0)`
- Standard: `cubic-bezier(0.22, 1, 0.36, 1)`
- Scroll-linked scene targets: linear mapping from native scroll progress
- Three.js scene interpolation: delta-time damping, never CSS easing

Exit motion should be approximately 60–70% of the corresponding entrance duration.

### 6.4 Scroll architecture

Preserve native browser scrolling. The document remains the only scroll container.

Implementation contract:

- Wrap the homepage narrative, from Hero through Reservation CTA, in one `HomeStory` boundary.
- Mount one fixed canvas inside that boundary using `position: fixed; inset: 0; pointer-events: none`.
- Place the canvas at the decorative layer, overlays above it, and semantic DOM content at the highest content layer.
- Register each chapter with a stable `data-scene` value; do not calculate scene changes from brittle card coordinates.
- Derive chapter start and end points from the actual section offsets after fonts and critical media settle.
- Use `gsap.matchMedia()` for desktop, touch, and reduced-motion variants.
- Use `scrub: 0.8` for the master scene relationship so the camera follows scroll without feeling detached.
- Use `invalidateOnRefresh: true` and refresh after the hero model and fonts are ready.
- Do not use scroll snapping.
- Do not smooth wheel/touch input, replace the scrollbar, or prevent default scroll behavior.
- Do not create nested scroll containers or forced horizontal scrolling.
- Only the Live Kitchen chapter may pin on desktop at widths of 1024px and above.
- No content pins on mobile or reduced-motion mode.
- Restore normal document flow and remove pin spacers on route unmount.
- Preserve normal browser history and scroll restoration.

### 6.5 Global page-load sequence

The hero must render meaningful content before the 3D runtime is ready:

1. Render the hero poster, headline, supporting copy, and CTAs on the server.
2. Begin the DOM entrance immediately; never wait for WebGL.
3. Load the lightweight ignition scene after critical HTML and the poster are visible.
4. Crossfade from poster to canvas only after the first correct 3D frame is rendered.
5. Keep the poster underneath the canvas until scene readiness is confirmed.
6. Reveal the scroll cue last.

Hero DOM entrance:

- Eyebrow: 280ms opacity.
- Headline: two masked line reveals, 500–650ms total.
- Supporting copy and CTA group: 420ms, beginning before the headline fully completes.
- Maximum total authored entrance: 900ms.
- Buttons must be interactive from first paint.

Do not run hero video behind the WebGL canvas. The poster is the media fallback and the 3D scene is the moving hero layer.

Returning visits use a 200ms crossfade and do not replay the complete ignition entrance.

### 6.6 Route transitions

- Use a subtle opacity crossfade with a maximum 250ms duration.
- Never cover the screen with a long branded loader.
- After navigation, move keyboard and screen-reader focus to the new page’s main heading.
- Preserve user state when returning to menu or gallery pages.
- Route transitions must not delay navigation or data rendering.

### 6.7 Scroll reveal patterns

Use only two supporting DOM reveal patterns:

1. **Editorial reveal:** opacity 0→1 and translateY 16px→0.
2. **Image reveal:** a bounded mask opens while the image scales 1.025→1.

Rules:

- Reveal section headings and media, not every paragraph and card.
- Trigger around 82% of viewport height.
- Play supporting reveals once.
- If a list genuinely enters as a group, stagger by 35ms and cap total stagger time at 210ms.
- Content must remain visible when JavaScript is unavailable.
- Never animate body paragraphs word-by-word or character-by-character.
- Do not hide SEO content with initial inline opacity styles.
- Do not combine fade, large translate, blur, scale, and rotation on the same reveal.

### 6.8 Parallax

- The Ember Core scene provides the primary sense of depth.
- Apply additional DOM parallax only to one decorative image layer in Restaurant Story.
- Limit DOM parallax to a 5% movement range.
- Never apply parallax to body copy, buttons, forms, or navigation.
- Clip parallax layers within their container.
- Disable DOM parallax on touch-first devices.
- Remove or reduce `will-change` after an animation settles.

### 6.9 Reduced-motion mode

When `prefers-reduced-motion: reduce` is active:

- Do not initialise Three.js or ScrollTrigger.
- Render static chapter artwork through normal responsive images.
- Remove pinning, scrub, parallax, marquee movement, counters, and image zoom.
- Show content immediately or use a maximum 150ms opacity transition for direct interaction feedback.
- Use instant anchor navigation.
- Keep all content and controls in the same visual order.
- Do not remove functional feedback such as validation or loading states.
- Treat the user-facing Reduce Effects setting the same as reduced motion and persist it locally.

### 6.10 Motion performance guardrails

- Animate `transform` and `opacity` wherever possible.
- Avoid continuous blur, filter, box-shadow, width, height, top, or left animation.
- Keep total main-thread animation work under 8ms per frame, leaving time for browser rendering.
- Use one master ScrollTrigger plus one Live Kitchen pin timeline.
- Avoid one ScrollTrigger per card.
- Refresh ScrollTrigger once after fonts and the ignition model settle, then only on meaningful layout changes.
- Test on a mid-tier Android device, not only a desktop browser.
- Pause the render loop when the story is not visible, the document is hidden, or the route changes.
- Avoid simultaneous WebGL, autoplay video, and continuous DOM marquee motion.

### 6.11 Persistent 3D experience: “The Ember Core”

The homepage includes one scroll-directed 3D narrative that begins in the hero, reaches its visual climax in Live Kitchen, and resolves at the Reservation CTA.

Use **one fixed WebGL canvas** instead of separate canvases per section. The scene contains the **Ember Core**: a stylised glowing oven heart surrounded by charred wood, copper, flour, herbs, dough, and controlled smoke.

The Ember Core is not a mascot or a game object. It is an abstract, photoreal, material-led expression of fire and craft.

Core requirements:

- Canvas layer: `z-index: 0`, `pointer-events: none`, excluded from the accessibility tree.
- Contrast/scrim layer: `z-index: 1`, controlled per section but never animated over controls.
- Semantic content layer: `z-index: 2` or higher.
- Navigation, dialogs, mobile action bar, and focus indicators always render above the scene.
- Each chapter defines camera, model transform, light, emissive strength, particle density, and safe-zone targets.
- Scroll sets target values; the render loop damps current values toward targets.
- Transitions remain continuous in both directions and contain no hard scene cuts.
- The object uses three logical composition zones—left, centre, and right—rather than chasing exact DOM coordinates.
- 3D motion must never pass directly behind body copy at high contrast.
- Every chapter has one art-directed AVIF/WebP fallback frame using the same crop and lighting.
- The canvas begins fading during the final CTA and is fully removed before the footer.
- A persistent **Reduce Effects** control appears after the first viewport, remains keyboard accessible, and remembers the user’s choice.

### 6.12 3D scroll chapters

Progress is measured across the `HomeStory` boundary. Percentages are art-direction targets; implementation derives exact starts and ends from section offsets instead of hardcoded document pixels.

| Progress | Chapter | Approx. scroll length | 3D direction | Content behaviour |
|---:|---|---:|---|---|
| 0–10% | Hero — Ignition | 100dvh | Camera moves toward the oven mouth; the core wakes from near-black to copper heat. | Headline occupies the left safe zone; CTAs remain fixed in normal flow and fully readable. |
| 10–24% | Categories — Ingredients | 120–140vh | The core opens into one controlled ingredient ring; individual ingredients rotate forward as the chapter advances. | Category cards enter normally. The 3D ring stays in the opposite composition zone and does not follow individual cards. |
| 24–36% | Best Sellers — Assembly | 110–130vh | Dough, cheese, vegetables, and herbs converge into one signature dish. | Product grid remains stable; only the section heading and lead image receive DOM reveals. |
| 36–45% | Story — Craft | 90–110vh | The dish recedes into a brushed-copper oven aperture; light reveals material details. | Copy alternates to the clear side of the composition. Statistics appear without repeated count-up loops. |
| 45–66% | Live Kitchen — Fire | 180vh pinned desktop | Dough enters the oven, rotates once, bakes, chars, receives herbs, and exits. | Six process labels advance at equal intervals. This is the only pinned chapter. |
| 66–76% | Gallery — The Pass | 100–120vh | Camera exits into a dark serving pass; the hot dish settles and depth opens behind it. | Gallery images reveal in the DOM. 3D elements do not attempt pixel-perfect alignment with masonry cells. |
| 76–84% | Reviews — Shared Table | 90–110vh | Scene becomes a low table glow; flame and particle motion slow by at least 60%. | Reviews prioritise reading and manual controls. No competing auto-marquee. |
| 84–92% | Instagram + FAQ — Cooling | 100–120vh | Embers cool; smoke and particles settle; camera movement becomes nearly imperceptible. | Accordions and social content use routine interaction motion only. |
| 92–98% | Reservation CTA — Final Spark | 100dvh | One ember traces a restrained brand mark and settles into a table centre light. | CTA reaches maximum contrast and remains stationary throughout interaction. |
| 98–100% | Exit — Rest | 24–32vh | Canvas opacity falls to zero and the renderer suspends. | Footer enters on a static charcoal surface with no WebGL behind it. |

Fast scrolling may skip intermediate visual detail, but it must always land on the correct chapter state. Do not queue missed animations.

### 6.13 3D art direction

- Use PBR materials with restrained roughness variation: charred wood, brushed copper, stone, flour, herbs, and baked crust.
- Lighting should progress from near-black ember light to warm oven light and back to a calm table glow.
- Use physically plausible shadows selectively; do not enable expensive real-time shadows on every object.
- Smoke should use lightweight shader planes or baked flipbooks, not a CPU-heavy fluid simulation.
- Flames should use a compact shader or animated texture atlas, not thousands of transparent particles.
- Use a maximum of 600 visible particles on Tier A and 220 on Tier B.
- Keep the initial visible scene below 300,000 triangles and 90 draw calls.
- Depth of field, bloom, and heat distortion must be subtle and disabled on lower performance tiers.
- Bloom must affect only emissive fire elements and must never soften text or UI.
- Use one hero material idea—heat and ember light—throughout; do not stack unrelated liquid, chrome, holographic, or glitch effects.
- Do not use chrome, neon, sci-fi holograms, cartoon food, or arcade-like effects.

### 6.14 Progressive enhancement and quality tiers

Select a quality tier after capability checks; do not identify devices only by user-agent strings.

**Tier A — High**

- Intended for capable desktop/laptop GPUs.
- Full 3D models and chapter transitions.
- Capped device pixel ratio of 1.5.
- Selective bloom, soft shadows, smoke, and heat distortion.
- Target 60 FPS.

**Tier B — Balanced**

- Default for tablets and capable mobile devices.
- Simplified geometry and textures.
- Capped device pixel ratio of 1.25.
- No depth of field or heat distortion.
- Reduced particles and shadow resolution.
- Target a stable 45–60 FPS.

**Tier C — Fallback**

- Pre-rendered AVIF/WebP chapter frames with DOM/CSS crossfades.
- No WebGL dependency in the critical interaction path.
- Used for reduced motion, data saving, weak GPU, WebGL failure, or sustained low frame rate.

Quality selection requirements:

- Choose the starting tier from WebGL capability, viewport, device memory when available, Data Saver, and reduced-motion preferences.
- Measure a rolling two-second frame sample while the story is active.
- Step down one tier if average frame rate remains below 45 FPS.
- Switch to Tier C if average frame rate remains below 30 FPS after downgrade, the WebGL context is lost twice, or a critical model fails.
- Never automatically step back up during the same visit.
- Store only the user’s explicit Reduce Effects preference; do not permanently store automatic hardware downgrades.

### 6.15 Scene controller contract

The homepage implementation must provide:

- A single `HomeStoryController` that owns chapter registration and progress.
- A stable scene configuration per chapter: camera position, camera target, object transform, light temperature, emissive intensity, effects, and composition zone.
- Mutable targets outside React render state.
- Delta-time damping in `useFrame` so scene motion is frame-rate independent.
- Clamped progress values from 0 to 1.
- `gsap.matchMedia()` variants for desktop, touch, and reduced motion.
- `invalidateOnRefresh: true`, `anticipatePin: 1`, and normal `pinSpacing`.
- Cleanup that restores all pin spacing and disposes Three.js resources on navigation.
- A development-only scroll debug mode showing chapter name, local progress, FPS, draw calls, and active quality tier.

The controller must not:

- Create a ScrollTrigger for every 3D object.
- Update React component state on each scroll event.
- Use absolute DOM coordinates as permanent 3D targets.
- Queue animations when a user scrolls quickly.
- Animate the camera independently from the active chapter state.

---

## 7. Global Interface

### 7.1 Announcement strip

Optional slim strip above the primary navigation for:

- Today’s opening status.
- Special event or seasonal menu.
- Direct reservation link.

It must be dismissible, keyboard accessible, and remembered for the session.

### 7.2 Desktop navigation

The navigation begins transparent over the hero and becomes a warm dark surface after scrolling.

Include:

- Logo
- Home
- Menu
- About
- Gallery
- Reservations
- Contact
- Primary “Book a Table” CTA

Behaviour:

- Sticky after initial scroll.
- Height condenses slightly from 88px to 72px.
- Active route is visibly indicated.
- Dropdowns, if any, open on click as well as keyboard input.
- Focus rings must remain visible on dark surfaces.

### 7.3 Mobile navigation

Use:

- A compact top bar with logo and menu button.
- A full-height menu sheet with navigation, hours, and key actions.
- A fixed bottom action bar for **Call**, **WhatsApp**, **Directions**, and **Order**.

The bottom action bar must:

- Respect device safe areas.
- Use icons and visible labels.
- Reserve page padding so it never covers content.
- Use at least 44×44px touch targets with 8px spacing.

### 7.4 Buttons

Button hierarchy:

1. Primary: cream or accent fill on dark surfaces.
2. Secondary: transparent with visible border.
3. Tertiary: text with directional arrow.
4. Utility: icon and label.

Interactions:

- Hover: slight background shift and icon translation of no more than 4px.
- Press: scale to 0.98 for 100ms without moving nearby layout.
- Focus: 2–3px high-contrast ring with offset.
- Loading: preserve width, show progress, and disable duplicate submission.
- Disabled: semantic `disabled`, lower emphasis, no pointer action.

### 7.5 Cursor and hover behaviour

- Use the standard pointer cursor on interactive desktop elements.
- Hover effects may enhance but never reveal essential content.
- On touch devices, controls must work without hover.
- Food-card quick actions should always have a visible mobile equivalent.

### 7.6 Floating WhatsApp action

- Display above the mobile bottom bar and within safe-area constraints.
- Use the official WhatsApp mark without distorting it.
- Include an accessible label and tooltip on desktop.
- Hide or merge it into the mobile action bar to avoid duplicate actions.

### 7.7 Reduce Effects control

- Label the control **Reduce effects**; do not use an ambiguous icon-only button.
- On desktop, place it near the lower-right edge after the first viewport without overlapping WhatsApp or navigation.
- On mobile, include it in the menu sheet and expose a compact labelled version above the bottom action bar while effects are active.
- Activating it must immediately switch to Tier C without reloading or changing scroll position.
- Persist the explicit choice in local storage.
- Offer **Enable effects** after effects are reduced.
- Announce the state change through a polite live region.

---

## 8. Page Requirements and Scroll Choreography

## 8.1 Home

### Hero

Fullscreen cinematic section using `min-height: 100dvh`.

Content:

- Eyebrow: “100% Vegetarian · Patiala”
- Headline: “Crafted by Fire. Loved by Foodies.”
- Supporting copy: “Premium wood-fired vegetarian cooking, handmade in Patiala.”
- CTAs: Explore Menu, Book a Table, Order Online
- Opening-status indicator
- Animated scroll cue

Media:

- The persistent 3D Ember Core scene is the primary hero visual.
- Use one art-directed ignition poster as the SSR, loading, Data Saver, reduced-motion, and WebGL-failure fallback.
- Use a directional scrim that guarantees text contrast without obscuring the ember.
- Do not run background video beneath the live 3D scene.
- Provide the persistent Reduce Effects control rather than a hero-only media control.

Scroll effect:

- During the first 65% of the hero, camera distance closes by no more than 18% and ember intensity rises.
- During the final 35%, the core moves from centre-right toward the right safe zone to prepare the Categories composition.
- Hero copy translates upward by no more than 16px and remains above 0.7 opacity until its final 15% of progress.
- The CTA group never scales, rotates, blurs, or leaves the interaction area.
- A thin copper progress line reflects local hero progress.

### Signature categories

Categories:

- Wood-Fired Pizza
- Artisan Pasta
- Gourmet Burgers
- Wraps
- Sandwiches
- Bowls
- Refreshers

Each card includes:

- Strong image
- Category name
- One-sentence description
- Dish count or short cue
- View Category CTA

UI:

- Desktop: asymmetrical editorial grid with one featured large card.
- Tablet: two-column grid.
- Mobile: single-column cards; no forced horizontal swipe.

Motion:

- Hover zoom is limited to 1.03.
- Overlay and arrow transition within 180–280ms.
- Reveal the section heading and the first visible row only; later cards render normally as users reach them.
- The 3D core opens into one ingredient ring with a maximum of five visible hero ingredients.
- The ingredient ring rotates through curated states but does not chase, highlight, or track individual cards.

### Best sellers

Each food card includes:

- Dish image
- Name
- Short description
- Price
- Veg badge
- Preparation time
- Chef’s Special badge where relevant
- Quick View

UI:

- Use a clean grid with generous space rather than crowded carousel cards.
- If a mobile carousel is used, show part of the next card as a swipe affordance and include visible controls.
- Prices must remain visible without hover.

Motion:

- Image crossfade/zoom on hover.
- Quick View opens from the card into an accessible dialog.
- Filter or carousel transitions should use shared layout motion, not abrupt replacement.
- The ingredient ring collapses into one signature dish over the full section progress.
- Keep the dish in the opposite composition zone from card titles and prices.

### Restaurant story

Split editorial layout:

- Restaurant or chef image.
- Concise origin story.
- Link to About.
- Statistics: 100% Vegetarian, 30+ Signature Dishes, Premium Ingredients, Wood-Fired Oven.

Scroll effect:

- The image receives the homepage’s only DOM parallax effect, capped at 5%.
- Statistics appear once without repeating on reverse scroll; screen readers receive final values immediately.
- Body text remains stationary after a simple editorial reveal.
- The 3D dish transforms into a brushed-copper plate or oven aperture; lighting highlights one milestone at a time.

### Live Kitchen — signature scroll story

This is the primary pinned storytelling moment.

Steps:

1. Fresh dough
2. Hand-shaped
3. Wood-fired oven
4. Premium cheese
5. Fresh herbs
6. Served hot

Desktop behaviour:

- Pin the section for 180vh of scroll with normal pin spacing.
- Keep the live 3D oven and dish sequence on one side.
- Allocate an equal 30vh of scroll to each of the six steps.
- Progressively highlight one step at a time; completed steps remain visible at lower emphasis.
- A fine copper line fills as the process advances.
- Camera and ingredient animation are directly synchronised to each step.
- The dish enters the oven, bakes, chars, receives herbs, and exits ready to serve.
- User scrolling controls progression in both directions; the sequence must not play ahead of scroll.
- Pinning begins only after the section heading is fully visible and ends with the finished dish in the serving position.

Mobile and reduced-motion behaviour:

- Do not pin.
- Render a vertical timeline using six pre-rendered sequence frames with each step in document order.
- Keep all steps readable without animation.

### Gallery preview

- Responsive masonry-inspired layout with predictable reserved dimensions.
- Categories represented: Food, Restaurant, Kitchen, and Events.
- Hover overlay includes title and View icon.
- Selecting an image opens a full-screen accessible lightbox.

Motion:

- Reveal only the lead image and first gallery row.
- Use shared image transition into the lightbox where supported.
- Avoid animating the complete masonry layout on every resize.
- The 3D camera exits the oven into the serving pass and increases depth behind the DOM gallery.
- Do not align 3D frames to masonry cells or recalculate the 3D layout from gallery coordinates.

### Reviews

- Rating summary
- Review count
- Google-style review cards
- Reviewer name, rating, date, and concise review

Motion:

- Do not auto-scroll reviews while the 3D scene is active.
- Provide previous/next buttons.
- Use a manual carousel on small screens and a static grid on larger screens.
- Do not fabricate a “Google verified” state.
- The persistent scene slows into a warm table-light composition so moving 3D elements do not compete with review text.

### Instagram preview

- Responsive image grid with account handle and follow CTA.
- Use curated local data until a real feed integration is configured.
- Do not make page rendering dependent on the Instagram API.

Motion:

- Hover reveals caption preview and icon.
- Tap opens a lightbox or the original post.
- Do not add a marquee, continuous bounce, or floating icon loop.
- 3D particles and smoke settle almost completely in this chapter.

### FAQ preview

- Show the six most useful questions.
- Use an accessible accordion with clear open/closed indicators.
- Allow only one open item on small screens if it improves scanability.
- Animate disclosure within 280ms and preserve keyboard focus.

### Reservation CTA

- Large food or interior image.
- Heading and one-line reassurance.
- Book Table, Call Now, and WhatsApp actions.
- Opening hours displayed nearby.

Scroll effect:

- The final ember traces the brand mark once as the CTA enters, then settles into a stationary table-centre light.
- The trace must be scroll-reversible before completion and must not replay after it settles unless the user leaves and re-enters the chapter.
- A stable scrim reaches its final contrast before the CTA becomes the primary focal point.
- Fade the canvas from 1→0 only during the last 20% of the chapter.
- CTA controls themselves remain stable and easy to select.

---

## 8.2 Menu

Create a digital HTML menu; do not use a PDF.

Features:

- Search by dish name or ingredient.
- Sticky category navigation.
- Category filters.
- Clear active-filter state.
- Results count.
- Quick View.
- Dish details.
- Shareable URLs for menu categories or dishes.
- Empty state with reset action.

Dish information:

- Image
- Description
- Ingredients
- Price
- Calories, where accurate
- Preparation time
- Veg badge
- Allergens
- Spice indicator, where relevant
- Available add-ons

UI behaviour:

- Search remains reachable without covering category navigation.
- Sticky controls must offset the primary navbar.
- On mobile, category chips may horizontally scroll, but the page itself must not.
- Returning from a dish detail must restore scroll and filter state.

Motion:

- Filtered cards crossfade and reposition with layout animation.
- Search results should not stagger on every keystroke.
- Quick View opens as a centred dialog on desktop and bottom sheet on mobile.
- Skeletons reserve card dimensions while data loads.

---

## 8.3 About

Include:

- Restaurant origin story
- Mission
- Vision
- Wood-fired tradition
- Ingredient philosophy
- Meet the chefs
- Restaurant timeline
- Sustainability or sourcing commitments, if verified
- CTA to book or view menu

UI:

- Use a long-form editorial layout with alternating light and dark sections.
- Chef cards should feel personal and restrained, not corporate.
- Timeline should be vertical on mobile and alternating on desktop.

Motion:

- Use image reveals and subtle timeline progress.
- Avoid pinning multiple text-heavy sections.
- Do not animate long paragraphs.

---

## 8.4 Gallery

Categories:

- Food
- Restaurant
- Kitchen
- Events
- Videos

Features:

- Filterable media grid.
- Accessible full-screen lightbox.
- Keyboard previous/next navigation.
- Swipe support with visible button alternatives.
- Captions and descriptive alt text.
- Lazy loading.
- Video controls.
- URL-addressable selected item where practical.

Motion:

- Filter changes use a short crossfade and layout transition.
- Lightbox media enters from the selected thumbnail when possible.
- Disable shared transitions in reduced-motion mode.

---

## 8.5 Reservations

Fields:

- Name
- Phone
- Email
- Number of guests
- Date
- Time
- Occasion, optional
- Message, optional

Requirements:

- React Hook Form with Zod validation.
- Visible labels; placeholders are examples only.
- Validate on blur and again on submit.
- Show errors next to the affected field.
- Focus the first invalid field after submission.
- Use semantic input types and mobile-friendly keyboards.
- Prevent duplicate submission.
- Include loading, success, error, and retry states.
- Success state must clearly repeat the reservation request details.
- Clarify that a request is not confirmed until accepted by the restaurant.

UI:

- Desktop: form paired with atmospheric image and booking information.
- Mobile: one-column form with large controls and persistent contact alternative.
- Use native date/time inputs where they provide the best accessible experience.

Motion:

- Form steps or field groups enter once, without distracting stagger.
- Success state uses a concise checkmark and crossfade.
- Errors should not shake the form.

---

## 8.6 Contact

Include:

- Restaurant name and full address
- Phone
- WhatsApp
- Email
- Opening hours
- Opening status
- Social links
- Contact form
- Map
- Directions CTA
- Parking or landmark information, if available

Requirements:

- Map must have an accessible text alternative.
- Contact details must use clickable `tel:`, `mailto:`, and appropriate external links.
- External map and social links should clearly indicate they open another service.
- Contact form follows the same validation and feedback standards as Reservations.

---

## 8.7 FAQs

- Searchable or clearly grouped accordion list.
- Suggested categories: Dining, Menu, Allergies, Reservations, Delivery, Events, and Accessibility.
- Link answers to relevant pages and actions.
- Include FAQ structured data only for questions visible on the page.

---

## 8.8 Privacy Policy

- Readable long-form layout.
- Sticky table of contents on desktop.
- Clear effective date.
- Contact information for privacy questions.
- No decorative animation within legal content.

---

## 8.9 Terms and Conditions

- Readable long-form layout.
- Sticky table of contents on desktop.
- Clear effective date.
- Cover bookings, cancellations, content, third-party ordering, and liability as applicable.
- Final legal wording must be reviewed by the business.

---

## 8.10 404

- On-brand short message.
- Useful actions: Return Home, Explore Menu, Book a Table.
- Optional static oven or table image.
- Keep animation subtle and ensure links are immediately usable.

---

## 9. Reusable Components

Create reusable, composable components including:

- AnnouncementBar
- Navbar
- MobileMenu
- MobileActionBar
- Footer
- Hero
- PageHero
- SectionHeading
- Button variants
- FoodCard
- CategoryCard
- GalleryCard
- ReviewCard
- ChefCard
- StatCard
- Badge
- FilterChips
- SearchField
- EmptyState
- Skeleton
- Accordion
- Dialog
- BottomSheet
- Carousel
- Lightbox
- Timeline
- ReservationForm
- ContactForm
- OpeningStatus
- Breadcrumbs
- SocialLinks
- FloatingWhatsAppButton
- ScrollProgress
- MotionReveal
- EmberCanvas
- EmberScene
- SceneChapter
- WebGLCapabilityGate
- EffectsPreferenceControl
- ThreeDFallbackFrame

Components must support:

- Keyboard navigation.
- Visible focus.
- Loading, empty, error, disabled, and success states where relevant.
- Reduced-motion variants.
- Responsive content.
- Server rendering wherever client state is not necessary.

---

## 10. Content and Data

Use structured mock data rather than embedding content inside page components.

Suggested models:

- Menu category
- Dish
- Add-on
- Allergen
- Gallery item
- Review
- FAQ
- Chef
- Timeline event
- Opening hours
- Contact method
- Social link

Content rules:

- No lorem ipsum.
- No unverifiable awards, review counts, or claims.
- Keep descriptions sensory but concise.
- Use Indian rupee formatting.
- Clearly mark sample data that requires business confirmation.
- Centralise restaurant contact details and opening hours to avoid inconsistencies.
- Treat `PRODUCT.md` as the durable source for operational facts and evidence status.

### Business data status

Owner-supplied printed-menu data:

- Address: `Shop No. 12, Mansarovar Complex, below O2 Gym, 22 No. Phatak, Bhupindra Road, Patiala`
- Order phone: `+91 99880 05945`
- Structured menu source: `data/menu.json`
- The supplied menu contains 48 entries across nine categories.
- Government taxes apply.

Provisional public-listing data:

- Coordinates: `30.3421235, 76.3795265`
- Public ordering is available through Zomato and Swiggy listings.
- Official Instagram: `https://www.instagram.com/wood_and_smoke_co/`
- Public listings support the vegetarian-only positioning.

Do not publish opening hours, WhatsApp availability, seating or reservation availability, ratings, review totals, price estimates, or an FSSAI licence number until the restaurant confirms them. Current public sources conflict on these details.

Use the owner-supplied printed menu over third-party menu text. The print has no visible revision date, so prices and availability must still receive a final restaurant review before launch.

---

## 11. Technology Stack

Build using:

- Next.js App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS v4
- shadcn/ui primitives
- Framer Motion
- GSAP and ScrollTrigger, used minimally
- `@gsap/react`
- Three.js
- React Three Fiber
- Drei
- `@react-three/postprocessing`, Tier A only
- GLTF/GLB models with Meshopt or Draco compression
- Lucide icons
- React Hook Form
- Zod
- `next/image`
- `next/font`

Architecture requirements:

- Use Server Components by default.
- Add Client Components only for interaction or browser APIs.
- Keep animation boundaries small so entire pages do not become Client Components.
- Mount the homepage canvas in one isolated Client Component.
- Keep scene state outside React render cycles where possible.
- Dynamically import the WebGL experience with server rendering disabled and show the hero fallback immediately.
- Keep the poster as the LCP candidate; canvas readiness must not redefine or delay LCP.
- No inline styles.
- No duplicated business data.
- No monolithic page files.
- Avoid unnecessary global providers.
- Dynamically import heavy interactive media such as lightboxes when appropriate.

---

## 12. Project Structure

```text
app/
  (marketing)/
  api/
  menu/
  about/
  gallery/
  reservations/
  contact/
  faqs/
  privacy/
  terms/
components/
  layout/
  navigation/
  ui/
  motion/
  three/
  forms/
features/
  home-story/
  menu/
  gallery/
  reservations/
  contact/
hooks/
lib/
services/
types/
utils/
data/
public/
  images/
  models/
  textures/
  sequences/
  video/
styles/
```

Folder names may be adapted to the final codebase, but feature ownership must remain clear.

---

## 13. Accessibility

Meet WCAG 2.2 AA.

Required:

- Semantic landmarks and HTML elements.
- Skip-to-content link.
- Logical heading structure.
- Complete keyboard navigation.
- Visible focus indicators.
- Meaningful alt text.
- Empty alt text for decorative images.
- Accessible names for icon-only controls.
- Dialog focus trapping and focus return.
- Escape-key dismissal for dialogs and lightboxes.
- Screen-reader announcements for form status.
- Error summary for forms with multiple errors.
- Minimum 44×44px target size.
- At least 8px between adjacent touch targets.
- No information available only on hover.
- No state communicated only by colour.
- Zoom must not be disabled.
- Reduced-motion support.
- A visible in-page control to reduce or restore decorative effects.
- The WebGL canvas must be decorative, excluded from the accessibility tree, and must not contain the only version of any information.
- Every 3D chapter must have an equivalent DOM heading, copy, and static visual fallback.
- 3D effects must not interfere with screen magnification, text selection, or focus visibility.
- Pinned sections must preserve DOM reading order and must not trap keyboard or screen-reader navigation.
- The user can reduce effects without reloading, losing focus, or changing scroll position.
- The Reduce Effects state change is announced through `aria-live="polite"`.
- Video pause controls and no unexpected audio.
- Captions for meaningful spoken video.
- Route-change focus management.

---

## 14. SEO and Local Discovery

Implement:

- Next.js Metadata API.
- Unique page titles and descriptions.
- Canonical URLs.
- Open Graph metadata.
- Twitter Cards.
- Restaurant schema.
- LocalBusiness schema.
- Menu schema where appropriate.
- FAQ schema.
- Breadcrumb schema.
- XML sitemap.
- `robots.txt`.
- Descriptive image filenames and alt text.
- Local address and contact consistency.

Target topics:

- Best Vegetarian Restaurant in Patiala
- Wood Fired Pizza Patiala
- Best Pizza in Patiala
- Cafe in Patiala
- Vegetarian Restaurant Patiala
- Artisan Pasta Patiala

SEO copy must remain natural and never repeat keywords unnaturally.

---

## 15. Performance

### Media

- Use AVIF/WebP where supported.
- Use responsive image sizes.
- Preload only the hero poster or true LCP asset.
- Lazy-load below-fold media.
- Pause off-screen videos.
- Provide video poster and low-bandwidth fallback.
- Do not load the Instagram API in the critical path.

### Fonts

- Use `next/font`.
- Load only used subsets and weights.
- Prefer variable fonts when they reduce transfer size.
- Reserve text space to reduce layout shift.

### JavaScript and motion

- Keep Server Components as the default.
- Dynamically load gallery/lightbox and noncritical motion.
- Keep Three.js and the 3D experience out of non-homepage route bundles.
- Use one master ScrollTrigger and one pinned timeline.
- Keep scroll targets in mutable refs; never render React on each progress update.
- Use `gsap.matchMedia()` to avoid creating desktop timelines on mobile or reduced-motion paths.
- Clean up observers, event listeners, and animation contexts.
- Do not ship unused GSAP plugins.
- Do not initialise WebGL for reduced motion or Data Saver.

### 3D assets and rendering

- Use one WebGL canvas and one renderer for the homepage.
- Keep the initial compressed 3D payload under **2.5 MB** and the complete lazy-loaded 3D payload under **8 MB**.
- Keep the initial hero GLB under **2.5 MB** where feasible.
- Use GLB with Meshopt or Draco geometry compression.
- Use KTX2/Basis compressed textures where supported.
- Prefer texture atlases and shared materials.
- Use no more than two 2K textures in the initial scene; use 1K or smaller for most assets.
- Keep the visible scene below 300,000 triangles and 90 draw calls on Tier A; Tier B must be lower.
- Reduce draw calls through instancing, atlases, and merged static geometry.
- Load the next chapter’s assets while the previous chapter is active; never wait until a chapter is already visible.
- Use adaptive DPR and cap it at 1.5.
- Run the render loop only while the HomeStory is visible and motion has not settled.
- Suspend rendering when the document is hidden, effects are reduced, the canvas exits the story, or the route changes.
- Dispose geometries, materials, textures, render targets, and animation mixers on teardown.
- Avoid real-time reflections, volumetric simulation, and large transparent particle layers.
- Handle WebGL context loss and model failure by switching to the matching fallback frame without changing layout.
- Do not show a numeric or full-screen 3D loading indicator.

### Loading states

- Show skeletons when an operation is expected to exceed 300ms.
- Skeleton dimensions must match final content.
- Never display a blank page while media or form actions load.
- The 3D loader must never replace the hero content; show the static poster and progressively crossfade into WebGL when ready.

---

## 16. Forms, Security, and Reliability

- Perform client and server validation.
- Sanitise and normalise submitted data.
- Add a honeypot or equivalent anti-spam protection.
- Add reasonable rate limiting when a backend is connected.
- Never expose secrets to the browser.
- Do not claim a booking is confirmed unless the backend confirms it.
- Provide clear fallback phone and WhatsApp actions when submission fails.
- Include privacy consent text where required.
- External service integrations must be isolated behind adapters.

---

## 17. Responsive Behaviour

Test explicitly at:

- 320px
- 375px
- 480px
- 768px
- 1024px
- 1440px
- 1920px

Also test:

- Mobile landscape.
- Tablet portrait and landscape.
- 200% browser zoom.
- Large text settings.
- Touch and keyboard input.
- Slow network.
- Data Saver mode.
- WebGL disabled or unavailable.
- Simulated weak GPU and sustained low frame rate.
- Browser tab backgrounding and return.
- Reduced-motion mode.

Responsive requirements:

- No page-level horizontal scroll.
- Fixed elements must not cover content.
- Use `dvh` units for viewport-height sections.
- Collapse complex editorial layouts into logical document order.
- Enable Live Kitchen pinning only at 1024px and above when reduced motion is off.
- Use normal-flow chapter progress on tablets and mobile.
- Default to Tier B 3D on capable mobile hardware and step down automatically when required.
- Recompose the Ember Core into centre, upper, or lower safe zones on narrow screens; never place it behind headings or fixed actions.
- Use pre-rendered frames instead of live 3D on devices that cannot maintain a stable experience.
- Keep primary actions visible and reachable.

---

## 18. Footer

Include:

- Logo and short brand statement
- Primary navigation
- Menu-category links
- Opening hours
- Location
- Call, WhatsApp, email, and directions
- Newsletter form
- Social links
- Privacy Policy
- Terms and Conditions
- Copyright

Newsletter requirements:

- Visible email label.
- Consent copy.
- Loading, success, and error feedback.
- No misleading success response when no provider is connected.

---

## 19. Future Scalability

Architecture should support:

- Headless CMS.
- Online ordering.
- Razorpay.
- Reservation backend.
- Loyalty programme.
- Gift cards.
- Customer accounts.
- Admin dashboard.
- Multiple restaurant locations.
- Event bookings.
- Seasonal menus.
- Delivery-zone logic.

Do not build these features now unless separately requested, but avoid architectural decisions that make them difficult later.

---

## 20. Deliverables

Generate:

1. Complete Next.js project.
2. Production-ready folder structure.
3. All required routes and unique metadata.
4. Responsive desktop, tablet, and mobile layouts.
5. Reusable UI and motion components.
6. Structured mock restaurant data.
7. Digital menu with filters, search, and dish details.
8. Accessible gallery and lightbox.
9. Validated reservation and contact forms.
10. SEO metadata and structured data.
11. Sitemap and robots configuration.
12. Image and video placeholders with descriptive filenames.
13. Reduced-motion fallbacks.
14. Loading, empty, error, and success states.
15. README with setup, content, asset, and deployment instructions.
16. Persistent homepage 3D Ember Core experience.
17. Optimised GLB models, compressed textures, and pre-rendered chapter fallbacks.
18. High, balanced, and fallback visual quality tiers.
19. A user-facing Reduce Effects control.
20. A 3D asset manifest documenting model size, texture size, licences, and fallback frames.
21. A chapter configuration documenting camera, object, lighting, effects, and safe-zone targets.
22. Motion QA evidence covering forward, reverse, fast-scroll, resize, reduced-motion, and WebGL-failure paths.

The project must run after:

```bash
npm install
npm run dev
```

No required UI section may be left as an unimplemented placeholder.

---

## 21. Acceptance Criteria

### Visual quality

- The site feels specific to a premium wood-fired restaurant.
- Typography, colour, spacing, iconography, and image treatment are consistent.
- Every page has a clear primary action.
- Mobile layouts feel intentionally designed, not merely stacked desktop sections.
- Food imagery remains the visual focus.

### Motion quality

- Scroll remains native and responsive.
- No animation prevents immediate interaction.
- Live Kitchen is the only pinned homepage chapter, and pinning is disabled below 1024px.
- Motion patterns are consistent across pages.
- The Ember Core forms one continuous visual story from hero to final CTA without hard scene cuts.
- 3D chapter transitions remain synchronised when scrolling forward, backward, or rapidly.
- Jumping rapidly from Hero to Reservation CTA lands on the correct final scene without replaying queued intermediate motion.
- Reversing through Live Kitchen reverses the bake state and process labels without flicker or discontinuity.
- Resizing, rotating a device, or changing browser zoom refreshes scene offsets without leaving stale pin spacing.
- CTA buttons, forms, navigation, and text never move with the camera or become difficult to select.
- Reduced-motion mode removes live 3D, parallax, pinning, autoplay, and marquee motion.
- Animations do not introduce layout shift or visible jank.

### Functional quality

- All routes and navigation links work.
- Menu search and filtering work.
- Dialogs and lightboxes work with mouse, touch, and keyboard.
- Forms validate correctly and expose accurate status.
- Mobile call, WhatsApp, order, and direction actions work.
- Back navigation restores relevant menu/gallery state.

### Accessibility quality

- Automated accessibility checks pass.
- A complete keyboard-only journey is possible.
- Focus is visible and predictable.
- Colour contrast passes WCAG AA.
- Screen-reader labels and form announcements are meaningful.
- Content remains usable at 200% zoom and with reduced motion.
- The complete story and every action remain understandable when the canvas is hidden.
- The Reduce Effects control is keyboard accessible and persists the user’s preference.
- Reducing effects preserves the current focus and scroll position.
- The pinned chapter does not change semantic reading order or trap focus.

### Performance quality

- Core Web Vitals targets are met with production assets.
- Hero media has a fast poster fallback.
- Below-fold images are lazy-loaded.
- There are no major content shifts.
- Scroll animations remain smooth on representative mobile hardware.
- Tier A targets 60 FPS; Tier B must remain stable above 45 FPS on supported hardware.
- The initial compressed 3D payload is no larger than 2.5 MB and the complete lazy-loaded payload is no larger than 8 MB.
- The visible Tier A scene remains below 300,000 triangles and 90 draw calls.
- The experience steps down when sustained frame rate is below 45 FPS and uses Tier C below 30 FPS after downgrade.
- WebGL failure produces no blank hero, blocked controls, or broken page state.
- Three.js is absent from non-homepage route bundles.
- The renderer pauses when the tab is hidden or the story is offscreen and is disposed after leaving the homepage.

---

## 22. Final Experience Standard

The final website should feel bold, tactile, cinematic, and appetising. The user should experience one surprising 3D journey from ember to table while always remaining in control. They should remember the warmth of the fire and the quality of the food—not the animation framework.

Motion should guide, not perform.

The menu should be effortless to browse.

Reservations should feel reassuring.

Every interface decision should support trust, appetite, and action.
