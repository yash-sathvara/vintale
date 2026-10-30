# Vintale — Next.js + TypeScript + Tailwind CSS

Five screenshot-based sections, each in a separate component, imported together in `app/page.tsx`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build: `npm run build` then `npm start`.

## Component map

| Reference | Component |
| --- | --- |
| Taste Heritage | `components/HeritageHero.tsx` |
| Timeless Craft / About Vintale | `components/StorySection.tsx` |
| Delivery / Returns / Quality / Payment / Eco | `components/BenefitsSection.tsx` |
| The Vintale Vault | `components/WineVault.tsx` |
| Let the Moments Pour | `components/MomentsPromo.tsx` |

Shared elements: `Navbar`, `ShopButton`, `Icons`, `CartProvider`. Product data and prices are in `lib/products.ts`. Brand colors are in `tailwind.config.ts`. Special curved backgrounds, bottle positioning, and breakpoints are in `app/globals.css`.

## Interaction

- Shop Now scrolls to the collection.
- Product buttons add to an in-memory bag; the header cart opens a keyboard-accessible native dialog. Remove buttons update quantities and subtotal.
- Mobile menu opens and closes, and all section links work.
- No backend, payment processing, authentication, real contact endpoint, or checkout is included. Bag contents reset on refresh. Journal navigates to the craft copy; Contact navigates to the footer. The person icon links to the brand story.
- The reference's visible 25% badge is preserved as artwork; displayed prices are used as-is. No unverified discount is applied.

## Fidelity and assets

The supplied phone screenshots were the only design source. The five sections are reconstructed as editable HTML/React, not embedded screenshots. Bottle images in `public/bottles/` are cropped from those supplied screenshots, so they have limited resolution. Replace these PNGs with the original transparent Figma exports for sharper results. The hero and promo reuse the full upright bottle cutout with CSS rotation; their angles/crops approximate the screenshot. Georgia is used as a local serif approximation because the original font was not supplied. Desktop layout follows the screenshots; mobile layout is adapted for readable content.

The add-to-bag controls and small footer are functional additions to the reference. All visible brand and wine copy is from the supplied design, with minor transcription normalization.

## Validation

```bash
npm run typecheck
npm run build
```
