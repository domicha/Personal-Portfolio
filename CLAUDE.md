# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies (required on first run)
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm run lint         # ESLint
```

## Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS v3 with custom config (`tailwind.config.ts`)
- **Animations**: CSS scroll-triggered fade-in via `IntersectionObserver` and the `.reveal` / `.reveal.visible` class pair in `globals.css`

## Architecture

Multi-page site using Next.js App Router. Each route is a standalone page with no shared scroll state.

```
app/
├── layout.tsx          — Root layout: loads Nav globally, wraps all pages in pt-14
├── page.tsx            — Homepage: name + directory of 4 nav links
├── work/page.tsx       — Work Projects (4 case studies)
├── ai/page.tsx         — AI Projects (4 AI/data initiatives)
├── experience/page.tsx — Experience timeline + skills sidebar + resume download
└── contact/page.tsx    — Contact form + social links (Client Component)

components/
└── Nav.tsx             — Fixed top nav, uses usePathname() for active link state
```

`Nav.tsx` is the only shared component — it reads `usePathname()` to highlight the active route. `contact/page.tsx` is the only Client Component (needs form state). All other pages are React Server Components.

## Design System

Minimal, editorial aesthetic — white background, black/gray text only, no color accents.

All color values are hardcoded Tailwind arbitrary values rather than CSS variables:
- Primary text: `text-[#111]`
- Muted text: `text-[#666]` / `text-[#888]` / `text-[#999]`
- Borders: `border-[#ebebeb]` / `border-[#ddd]`
- Disabled/decorative: `text-[#bbb]` / `text-[#ccc]`

Typography scale: `text-xs` labels (uppercase, tracked) → `text-sm` body → `text-base` / `text-lg` subheadings → `text-4xl`/`text-5xl`/`text-7xl` page headings with `font-extrabold tracking-tight`.

## Content

All content is co-located with its page — no CMS or data layer:
- **Work projects**: `app/work/page.tsx` — `projects` array at top of file
- **AI projects**: `app/ai/page.tsx` — `projects` array at top of file
- **Experience / skills**: `app/experience/page.tsx` — `experience` and `skills` arrays
- **Contact links**: `app/contact/page.tsx` — `links` array and `mailto:` in `handleSubmit`
- **Homepage directory**: `app/page.tsx` — `sections` array

Place a PDF resume at `public/resume.pdf` for the download button on the Experience page.
