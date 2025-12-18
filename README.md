# ROSEN Careers Page Clone

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
