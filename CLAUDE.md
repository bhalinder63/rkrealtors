# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — serve the production build locally
- `npm run lint` — run Oxlint (config in `.oxlintrc.json`, plugins: `react`, `oxc`)

There is no test suite configured in this project.

## Architecture

This is a single-page marketing site for CH Real Estate (a property consultancy), built with React 19 + Vite + Tailwind CSS v4. There is no router and no backend — `App.jsx` renders one long page by composing section components in order:

```
Header → Hero → About → Services → Listings → Team → Contact → Footer
```

Each section is an anchor target (`#home`, `#about`, `#services`, `#listings`, `#team`, `#contact`) that the Header nav and Footer links scroll to via native anchor links (`html { scroll-behavior: smooth }` in `src/index.css`).

### Content is data-driven

All copy that repeats (services, listings, team members, nav links, contact numbers) lives in `src/data/content.js`, not hardcoded in components. When updating site content (prices, phone numbers, listings, service descriptions), edit that file rather than the components. It also exports a small `unsplash()` helper that builds Unsplash source URLs — all imagery on the site is sourced this way rather than local assets.

### Styling: Tailwind v4, CSS-first config

There is no `tailwind.config.js`. Theme customization (brand colors, fonts) is done via the `@theme` block directly in `src/index.css`, using Tailwind v4's CSS-first config. Custom design tokens follow the `--color-*` / `--font-*` naming convention so Tailwind auto-generates utilities from them (e.g. `--color-gold-light` → `text-gold-light`, `bg-gold-light`, etc.). The palette is a dark/gold real-estate luxury theme (`ink`, `gold`, `cream`, `muted` families) — when adding new UI, prefer these tokens over introducing raw hex values.

The Tailwind Vite plugin (`@tailwindcss/vite`) is wired into `vite.config.js`; there's no PostCSS config file.

Fonts (Cormorant Garamond for serif/headings, Jost for sans/body) are loaded via a Google Fonts `<link>` in `index.html`, and mapped to `--font-serif` / `--font-sans` in the theme.

Tailwind v4's dynamic spacing scale means arbitrary fractional utilities (`py-25`, `gap-11.5`, `px-8.5`, etc.) are valid and used throughout — they aren't typos, they resolve via `calc(var(--spacing) * n)`.

### Scroll-reveal animation pattern

Section entrance animations use a shared `Reveal` component (`src/components/Reveal.jsx`) wrapping a `useReveal` hook (`src/hooks/useReveal.js`). `useReveal` attaches an `IntersectionObserver` to a ref and flips `visible` to `true` (permanently, then unobserves) once the element scrolls into view; `Reveal` applies the `.reveal` / `.reveal.is-visible` CSS classes (defined in `src/index.css`) that animate opacity/translateY, and supports a `delay` prop (ms) for staggering. Use `Reveal` (with `as="..."` to change the rendered tag) for any new content block that should animate in on scroll, rather than reimplementing the observer logic.

### Contact form has no backend

The contact form (`src/components/Contact.jsx`) is fully client-side: on submit it builds a WhatsApp deep link (`wa.me/<number>?text=...`) from the form fields and opens it in a new tab, then shows a local "Enquiry received" success state. There is no API call, form service, or email backend — if a real backend/CMS integration is ever added, this is the component to replace.
