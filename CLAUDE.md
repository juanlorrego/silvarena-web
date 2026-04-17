@AGENTS.md

# Silvarena Web — Context for AI Assistants

## What this is
Landing page for **Silvarena Glamping**, a luxury glamping destination in the Antioquian East (near La Ceja, Colombia). Four artisanal wooden cabins with private outdoor hot tubs, valley views, and year-round gardens. Brand voice: poetic, minimal, quiet luxury ("Here, the world disappears").

## Tech Stack
- **Next.js 16** (App Router) — READ `node_modules/next/dist/docs/` before writing Next.js code
- **React 19**, **TypeScript 5** (strict)
- **Tailwind CSS 4** with PostCSS
- **Google Analytics 4** + **Meta Pixel** via `NEXT_PUBLIC_*` env vars

## Project Structure
```
app/              # Pages (App Router)
  page.tsx        # Home — assembles all section components
  layout.tsx      # Root layout: fonts, SEO, Analytics
  globals.css     # Design system: colors, animations, fonts
  contacto/       # Contact form
  galeria/        # Photo gallery
  experiencia/    # Experience details
  preguntas-frecuentes/  # FAQ
  tra/            # Guest registration (Colombian legal requirement)
  politicas/      # Legal policies
  documentos/     # Documents

components/       # One component per page section
  Nav.tsx         # Sticky nav: scroll state, lang toggle, WhatsApp CTA, hamburger
  Hero.tsx        # Full-screen hero with background image and CTA
  Cabanas.tsx     # Cabin showcase
  Experiencia.tsx # Amenities section
  Testimonios.tsx # Guest reviews
  Reservas.tsx    # Booking CTA
  Ubicacion.tsx   # Location / directions
  Footer.tsx      # Site footer
  PageLayout.tsx  # Wrapper for secondary pages (adds Nav + Footer)
  RevealOnScroll.tsx  # Scroll-triggered entrance animation utility
  Analytics.tsx   # GA4 + Meta Pixel init
  icons.tsx       # SVG icon components

lib/
  i18n.ts         # ALL UI text (ES + EN). Add content here, never inline.
  LangContext.tsx # Language provider + useLang() hook
```

## Key Conventions

### Internationalization
- **Never hardcode text in components.** Every user-visible string lives in `lib/i18n.ts`.
- Language toggled at runtime via `useLang()` from `lib/LangContext.tsx`.
- `t()` and `whatsappUrl()` are the main i18n helpers.

### Styling
- **No bold text** — brand rule: `font-weight: 400` always.
- Hairline borders: `0.5px` only.
- Fonts: EB Garamond + Cormorant (serif/editorial) + Montserrat (sans).
- Color palette (CSS vars in `globals.css`): `verde-noche`, `crema`, `helecho`, `madera`, `musgo`.
- Mobile-first responsive; custom `fadeIn` / `reveal` animations.

### Booking flow
- No payment system. WhatsApp is the primary booking channel.
- All WhatsApp links built via `whatsappUrl()` in `lib/i18n.ts`.

### Images
- Use Next.js `<Image>` with `priority` on hero, `sizes` for responsive srcsets.
- Cache: 1-year for images/fonts, 1-day for logos (configured in `next.config.ts`).

### Analytics
- IDs come from env vars only — never hardcode.
- `Analytics.tsx` initializes on mount and tracks route changes.
