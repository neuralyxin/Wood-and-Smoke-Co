---
name: Wood & Smoke Co.
description: A cinematic, conversion-focused identity for a vegetarian wood-fired restaurant in Patiala.
tokens:
  colors:
    kiln-black: "#120f0d"
    charred-timber: "#1b1714"
    oven-stone: "#241e1a"
    card: "#2f2823"
    hearth-gold: "#d6a760"
    brushed-copper: "#b97738"
    hot-ember: "#e35d36"
    linen-cream: "#f6f2ec"
    ash-grey: "#c4bdb5"
  typography:
    display: "Bebas Neue"
    body: "Manrope"
  radii:
    control: "6px"
    surface: "14px"
  layout:
    content-max: "1280px"
    mobile-gutter: "20px"
    header-height: "72px"
---

# Wood & Smoke Co. Design System

## Creative North Star

**The Living Hearth**

The interface should feel like arriving at a wood-fired kitchen at dusk. Charred timber, blackened stone, brushed copper, herbs, flour, and controlled ember light form the visual world. The reference landing page contributes its dramatic scale, condensed type, asymmetric composition, and clear restaurant actions. The implementation keeps those qualities while making every control responsive and accessible.

## Brand Rules

- The fire-heart artwork is the hero focal point, not a page screenshot.
- All navigation, headings, buttons, and menu cards are live interface elements.
- Hearth Gold marks primary actions and editorial emphasis.
- Hot Ember is reserved for ordering, heat, and small motion accents.
- Linen Cream carries primary text. Ash Grey is for supporting copy.
- Food imagery must be vegetarian and either owner supplied or clearly documented as synthetic.

## Typography

- **Display and headings:** Bebas Neue, locally bundled through Fontsource.
- **Body and UI:** Manrope, locally bundled through Fontsource.
- Hero declarations are uppercase and limited to two lines on desktop.
- Body copy stays at or above 16px for reading content and uses generous line height.
- Navigation, buttons, prices, and kickers use compact uppercase labels with visible tracking.

## Layout

- Global content width: 1280px maximum.
- Mobile gutters: 20px.
- Header: the same condensed navigation on every route, transparent over hero media and backed by a dark blurred surface after scrolling.
- Hero: copy owns the left safe zone; the fire-heart artwork owns the right.
- Menu rail: one editorial heading followed by four image-led category links.
- Mobile: one clear column, horizontal category rail, no page-level horizontal overflow.

## Components

### Global navbar

Transparent over dark hero media. Brand at left, condensed route links centered, Patiala and Order Online at right. Mobile uses the same lockup inside a compact dark shell and opens an accessible dialog sheet.

### Hero CTA group

Three equal actions on desktop: View Menu, Request a Table, and Order on Swiggy. Menu uses a gold outline, reservation uses solid gold, and ordering uses an ember outline.

### Menu rail

Square-edged image panels with a left-to-right dark scrim, short category label, supporting sentence, and ember arrow. Cards enlarge imagery only slightly on hover.

### Content surfaces

Most sections are flat tonal layers. Fourteen-pixel radii are used for conventional content cards and dialogs. The landing rail stays nearly square to preserve the reference's editorial character.

### Direct actions and dialogs

Reservations and enquiries use verified direct actions rather than simulated submissions. Dish details and mobile navigation use Radix dialogs for focus management and keyboard behavior.

## Motion

- No WebGL or 3D canvas is used.
- The hero is stable and immediately readable.
- CSS view reveals use small opacity and vertical-position changes.
- The page uses native document flow without pinned scroll sections.
- Hover image scale never exceeds 1.035.
- Reduced-motion preference disables non-essential movement and smooth scrolling.

## Accessibility

- Focus rings use `#f0c982` and remain visible over dark media.
- Interactive targets are at least 44px high.
- Decorative imagery uses empty alt text; meaningful imagery has concise alt text.
- Mobile navigation traps focus and closes with Escape.
- Page landmarks and skip navigation are present.

## Content Integrity

Do not invent ratings, reviews, hours, founding dates, awards, sourcing claims, or staff biographies. Menu prices come from the supplied menu images and remain marked for final owner review. Public hours remain unpublished because current listings conflict. Reservations use the restaurant phone until an approved booking provider is connected.
