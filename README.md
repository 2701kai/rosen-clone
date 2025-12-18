# ROSEN Careers Page Clone

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![TanStack Router](https://img.shields.io/badge/TanStack_Router-1.141-FF4154?logo=reactrouter&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-latest-000000?logo=bun&logoColor=white)

Pixel-perfect clone of the [ROSEN Group careers page](https://www.rosen-group.com/en/careers/find-a-job).

## Tech Stack

- **React 19** + TypeScript
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Utility classes + custom CSS
- **TanStack Router** - Type-safe routing
- **Bun** - Package manager & runtime

## Features

- Job search with filters (region, city, job field, experience level)
- Sortable job listings table
- Responsive layout
- Pixel-perfect CSS matching original site
- BEM naming convention for custom styles

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Type check
bun run type-check

# Lint
bun run lint
```

## Project Structure

```
src/
├── components/
│   ├── home/
│   │   ├── AlreadyApplied.tsx
│   │   ├── Intro.tsx
│   │   ├── JobList.tsx
│   │   ├── JobSearch.tsx
│   │   └── OpenApplication.tsx
│   └── layout/
│       ├── Footer.tsx
│       └── Header.tsx
├── pages/
│   └── Home.tsx
├── index.css          # Tailwind + BEM component styles
└── main.tsx
```

## CSS Architecture

Custom styles use BEM naming in `@layer components`:

- `.job-list__*` - Job listings table
- `.content-teaser__*` - Open application card
- `.search__*` - Search form elements
- `.footer__*` - Footer styles

All styles verified against original site using Playwright computed style extraction.

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server (port 5175) |
| `bun run build` | Production build |
| `bun run validate` | Type check + lint + build |
| `bun run reset` | Clean install |

## License

MIT
