# Silvarena Glamping — Sitio Web

Sitio web oficial de [Silvarena Glamping](https://silvarena.co), un destino de glamping de lujo en el Oriente Antioqueño, Colombia. Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4.

## Stack

- **Next.js 16** — App Router, optimización de imágenes, caché de assets
- **React 19** + **TypeScript 5** (modo estricto)
- **Tailwind CSS 4** + PostCSS
- **Google Analytics 4** + **Meta Pixel**
- Fuentes locales: EB Garamond, Cormorant Garamond, Montserrat

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Variables de entorno

Crea un archivo `.env.local` con:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

## Despliegue

El repositorio está conectado a **Vercel**. Cada push a `main` desencadena un despliegue automático.

```bash
npm run build   # Verifica que el build pase antes de hacer push
npm run lint    # Revisa errores de ESLint
```

## Estructura

```
app/            # Páginas (App Router)
components/     # Componentes por sección
lib/            # i18n (ES/EN) y contexto de idioma
public/         # Imágenes, fuentes y logos
```

Todo el texto visible al usuario vive en `lib/i18n.ts` — nunca se hardcodea en los componentes.
