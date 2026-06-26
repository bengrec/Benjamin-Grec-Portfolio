# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Preview production build locally
npm run check      # Astro/TypeScript type checking
npm run lint       # ESLint check across src/, data/, config files
npm run lint:fix   # ESLint auto-fix
```

There is no test suite.

## Architecture

This is a static Astro 6 portfolio site using Tailwind CSS 4 and TypeScript strict mode.

### Content data layer (`data/`)

All editable site content lives in `data/site.ts` — hero text, about paragraphs, experience cards, featured projects, project archive rows, and contact links. Navigation is in `data/nav.ts`. These are `as const` exports with derived types (`FeaturedProject`, `ProjectArchiveRow`) used in component props. Editing content means editing these files only; no component changes are needed for typical content updates.

### Theme system

The active color palette is set in `src/config.ts` via `baseTheme` (`'default'`, `'strategic'`, `'innovator'`, `'midnight'`). All themes are dark-only. CSS custom properties for each theme (`--color-background`, `--color-accent`, `--color-maintext`, `--color-subtext`, `--color-textrain`) are defined in `src/styles/global.css` under `[data-theme="<name>-dark"]` selectors. Tailwind semantic utility names (`bg-background`, `text-maintext`, `text-accent`, etc.) map to these variables via the `@theme` block in `global.css`.

At runtime, `Layout.astro` injects an inline `<script>` that reads `localStorage('theme')` and sets `data-theme` on `<html>` before first paint, preventing flash. On navigation (Astro `ClientRouter` view transitions), `applyTheme()` re-runs via `astro:page-load`.

### Layout and navigation

`src/layouts/Layout.astro` is the main shell: sticky `<SideNav>` on desktop (hidden on mobile), `<MobileHeader>` shown inline on mobile. An inline scroll observer in `Layout.astro` tracks section intersection and toggles `nav-link-active` on `[data-section-link]` anchors — no JS framework involved.

Two layouts exist: `Layout.astro` (main one-page portfolio) and `ArchiveLayout.astro` (projects archive page). Two pages: `src/pages/index.astro` and `src/pages/projects.astro`.

### Icons

Icons use `astro-icon` with the Phosphor set (`ph:`). Import and use as:
```astro
import { Icon } from 'astro-icon/components';
<Icon name="ph:arrow-right" class="h-4 w-4" />
```

Only the `ph` icon family is included (configured in `astro.config.mjs`).

### Tailwind CSS 4

Tailwind is integrated via `@tailwindcss/vite` (Vite plugin), not a PostCSS config file. Custom component utility classes (`.nav-link`, `.panel-card`, `.section-heading`, etc.) are defined in `src/styles/global.css` under `@layer components`. Use these named classes before reaching for ad-hoc utilities.

### TypeScript path aliases

`@/*` resolves to `src/*`; `@data/*` resolves to `data/*`. Use these aliases for imports from `src/` and `data/` respectively.

## Conventions

- **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `docs:`, etc.
- **Branches**: `feature/topic-name`, `fix/topic-name`, `docs/topic-name`
- **Images**: Place in `public/` and reference with `import.meta.env.BASE_URL` prefix (see `FeaturedProjects.astro` for the pattern).
- **Static output only**: `output: 'static'` in `astro.config.mjs` — no server-side rendering.
- **Fonts**: Inter (body), Space Grotesk (headings), JetBrains Mono (mono) — loaded from `@fontsource-variable` packages, not Google Fonts CDN (preload hints in Layout.astro are a legacy remnant).
