# Inievo Technologies — Marketing & Studio Site

A premium marketing site for **Inievo Technologies**, a Bangladesh-based IT
studio. Built on TanStack Start (React 19 + Vite 7), styled with Tailwind v4,
and animated with Framer Motion.

## Stack

- **Framework:** TanStack Start v1 (file-based routing, SSR-ready)
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS v4 (`src/styles.css` with `@theme` tokens)
- **UI primitives:** shadcn/ui + Radix
- **Animation:** Framer Motion
- **Forms:** react-hook-form + zod
- **Icons:** lucide-react

## Run locally

```bash
bun install
bun run dev          # start dev server
bun run build        # production build
```

The dev server hot-reloads. Routes auto-register from `src/routes/`.

## Environment variables

The marketing site has no required runtime env vars. If/when Lovable Cloud
(Supabase) is enabled, the standard `VITE_SUPABASE_*` and server
`SUPABASE_*` variables are wired automatically — see the Lovable docs.

## File structure

```text
src/
├── routes/                    # File-based routes
│   ├── __root.tsx             # Root shell, fonts, metadata, providers
│   ├── index.tsx              # Homepage
│   ├── about.tsx              # /about
│   ├── labs.tsx               # /labs
│   ├── blog.tsx               # /blog (listing)
│   ├── blog.$slug.tsx         # /blog/:slug (article)
│   ├── contact.tsx            # /contact (form)
│   ├── services.*.tsx         # /services/* deep-dive pages
│   └── sitemap[.]xml.ts       # Dynamic sitemap
├── components/
│   ├── layout/                # SiteHeader, SiteFooter
│   ├── sections/              # Homepage sections (Hero, Trust, Services, …)
│   ├── ui/                    # Reusable building blocks (CTABanner, …)
│   └── providers/             # ThemeProvider
├── lib/
│   ├── constants.ts           # All copy, nav, brand tokens, blog/team data
│   ├── service-pages.ts       # Service-page content
│   ├── types.ts               # Shared TS interfaces
│   └── utils.ts
├── hooks/                     # Custom React hooks
└── styles.css                 # Tailwind v4 tokens, animations
```

## How to add a new service page

1. Add an entry to `SERVICE_LINKS` (and optionally `NAV_LINKS`) in
   `src/lib/constants.ts`.
2. Add a content entry to `src/lib/service-pages.ts` describing the page.
3. Create `src/routes/services.<slug>.tsx`, mirroring an existing service
   route (e.g. `services.custom-software.tsx`). Use `ServicePageHero`,
   `FAQAccordion`, and `CTABanner` from `src/components/ui/` for
   consistency.
4. Add the new path to the sitemap entries in `src/routes/sitemap[.]xml.ts`.

## How to update brand colors

Brand colors live in two places that must stay in sync:

- **CSS tokens:** `src/styles.css` — update the `--brand`, `--brand-deep`,
  `--brand-foreground`, etc. tokens (defined in `oklch`).
- **Runtime references:** `BRAND_COLORS` in `src/lib/constants.ts` — used
  by inline SVG, charts, and any element that needs the literal hex.

Change both, then verify in light and dark mode.

## Deployment

The project targets Cloudflare Workers via the TanStack Start Vite plugin.
On Lovable, click **Publish** in the editor — frontend changes go live after
clicking **Update** in the publish dialog.

For self-hosting on Cloudflare:

```bash
bun run build
# deploy /dist as configured in wrangler.jsonc
```

## Notes

- All user-facing copy lives in `src/lib/constants.ts` and
  `src/lib/service-pages.ts`. Components stay declarative.
- Color usage flows through Tailwind semantic tokens (`text-foreground`,
  `bg-brand`, …) — never hard-coded hex in components.
- Animations use `transform` and `opacity` only, and respect
  `prefers-reduced-motion` (see `src/hooks/use-counter.ts`).
