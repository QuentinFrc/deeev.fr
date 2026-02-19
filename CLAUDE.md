# CLAUDE.md - AI Assistant Guide for deeev.fr

This document provides essential context for AI assistants working on this codebase.

## Project Overview

**deeev.fr** is a modern content-driven website built with Next.js 15 and integrated with Pages CMS for headless content management.

**Current State**: Early stage (v0.1.0), using Next.js boilerplate with CMS infrastructure ready for content additions.

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | 15.5.6 |
| UI Library | React | 19.1.0 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| Package Manager | pnpm | 10.15.1 |
| Linting | ESLint | ^9 |
| Bundler | Turbopack | (built-in) |
| CMS | Pages CMS | (.pages.yml) |

## Directory Structure

```
deeev.fr/
├── app/                    # Next.js App Router (pages & layouts)
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page component
│   ├── globals.css        # Global styles (Tailwind)
│   └── favicon.ico
├── src/                    # Content directory (Pages CMS)
│   ├── _data/
│   │   └── site.json      # Site-wide configuration
│   ├── posts/             # Blog posts collection (markdown)
│   ├── pages/             # CMS-managed pages
│   └── media/             # Uploaded media assets
├── public/                 # Static assets (served at /)
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── .pages.yml             # Pages CMS configuration
```

## Development Commands

```bash
# Start development server (with Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Code Conventions

### TypeScript
- **Strict mode enabled** - all code must pass strict type checking
- Use `Readonly<T>` for immutable prop objects
- Use path alias `@/*` for imports from project root

### React/Next.js Patterns
- **Server Components by default** - only add `'use client'` when needed
- Export `metadata` object for SEO (type: `Metadata` from `next`)
- Use `next/font/google` for font loading with CSS variables
- Use `next/image` for optimized images

### Component Structure
```typescript
// Standard component pattern
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function PageName() {
  return (
    <div className="...">
      {/* Content */}
    </div>
  );
}
```

### Styling
- Use Tailwind CSS utility classes inline
- Global styles in `app/globals.css`
- CSS custom properties for theming: `--background`, `--foreground`
- Dark mode via `prefers-color-scheme` media query
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

### Naming Conventions
- **Components**: PascalCase (`RootLayout`, `HomePage`)
- **Files**: kebab-case for configs (`eslint.config.mjs`)
- **Directories**: lowercase, underscores for special dirs (`_data`)

## Content Management (Pages CMS)

Content is managed via Pages CMS configured in `.pages.yml`.

### Content Collections

| Collection | Path | Description |
|------------|------|-------------|
| posts | `src/posts/` | Blog posts with frontmatter |
| page | `src/pages/` | CMS-managed pages with blocks |
| site | `src/_data/site.json` | Site-wide settings |

### Post Frontmatter Structure
```yaml
---
published: true
title: "Post Title"
date: 2025-11-12
---
Post content in markdown...
```

### Available CMS Components
- `hero` - Hero section with headline, image, CTA
- `testimonial` - Quote with author info
- `featureList` / `featureItem` - Feature showcase
- `faqSection` / `faqItem` - FAQ sections
- `newsletterSignup` - Email signup form

### Media
- Upload directory: `src/media/`
- Public path: `/media/`

## Key Files Reference

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, fonts, metadata |
| `app/page.tsx` | Home page |
| `app/globals.css` | Global styles, CSS variables |
| `src/_data/site.json` | Site title, description, URL |
| `.pages.yml` | Pages CMS schema and components |
| `tsconfig.json` | TypeScript config (strict mode) |
| `eslint.config.mjs` | ESLint rules (next/core-web-vitals) |

## AI Assistant Guidelines

### Do
- Use TypeScript with proper type annotations
- Follow existing code patterns and conventions
- Use Server Components unless client interactivity is required
- Use Tailwind CSS for styling (utility-first)
- Use `@/*` path aliases for imports
- Maintain strict TypeScript compliance
- Keep components in `app/` directory following App Router conventions

### Don't
- Add `'use client'` unless necessary for hooks/interactivity
- Create new config files without clear need
- Modify `.pages.yml` without understanding CMS implications
- Use inline styles instead of Tailwind classes
- Skip type annotations on function parameters and returns

### When Adding New Pages
1. Create file in `app/[route]/page.tsx`
2. Export `metadata` for SEO
3. Use Server Component pattern by default
4. Follow existing layout composition

### When Adding Components
1. Consider if it needs client-side interactivity
2. Place shared components in `app/components/` (create if needed)
3. Use TypeScript interfaces for props
4. Apply Tailwind classes for styling

### Testing & Quality
- No test framework currently configured
- Run `pnpm lint` before committing
- Ensure build passes with `pnpm build`

## Environment

- **Node.js**: Required for Next.js
- **pnpm**: Package manager (use `pnpm` not `npm` or `yarn`)
- **Turbopack**: Used for dev and build (faster than Webpack)

## Notes

- Project is in early development stage
- Using create-next-app boilerplate as foundation
- Pages CMS infrastructure is ready but minimal content exists
- No testing framework configured yet
