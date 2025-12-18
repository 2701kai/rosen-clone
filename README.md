# ROSEN Careers Page Clone

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![TanStack Router](https://img.shields.io/badge/TanStack_Router-1.141-FF4154?logo=reactrouter&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-latest-000000?logo=bun&logoColor=white)

A pixel-perfect recreation of the [ROSEN Group careers page](https://www.rosen-group.com/en/careers/find-a-job), built with modern React best practices and production-grade architecture.

## Why This Project?

This clone demonstrates my ability to:

- **Reverse-engineer complex UIs** - Matched the original site pixel-by-pixel using Playwright computed style extraction
- **Apply modern architecture patterns** - Atomic Design, separation of concerns, reusable components
- **Use cutting-edge tooling** - React 19, Vite 7, Tailwind CSS 4, TanStack Router
- **Write maintainable code** - All components under 100 lines, DRY principles, proper TypeScript typing

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI library with latest features |
| TypeScript | 5.9 | Type-safe development |
| Vite | 7.3 | Lightning-fast builds (~1.5s) |
| Tailwind CSS | 4.1 | Utility-first styling |
| TanStack Router | 1.141 | Type-safe file-based routing |
| Bun | latest | Fast package manager & runtime |

## Architecture Highlights

### Atomic Design Pattern

```
src/
├── components/
│   ├── icons/           # Atoms - Reusable SVG icons
│   │   ├── ChevronRight.tsx
│   │   ├── ChevronDown.tsx
│   │   ├── SortIcon.tsx
│   │   └── index.ts
│   ├── ui/              # Atoms - Base UI components
│   │   ├── Select.tsx
│   │   └── index.ts
│   ├── home/            # Organisms - Page sections
│   │   ├── JobSearch.tsx
│   │   ├── JobList.tsx
│   │   └── ...
│   └── layout/          # Organisms - App shell
│       ├── Header.tsx
│       └── Footer.tsx
├── constants/           # Data layer (separated from UI)
│   ├── filters.ts
│   ├── jobs.ts
│   └── index.ts
└── routes/              # Pages (TanStack Router)
```

### Code Quality Metrics

- **0 TypeScript errors** - Strict mode enabled
- **0 ESLint warnings** - Clean codebase
- **<100 lines per component** - Easy to read and maintain
- **Reusable Select atom** - Used 4x, written once
- **Extracted constants** - Data separated from presentation

## Features

- Job search with multi-filter support (region, city, job field, experience)
- Sortable job listings table with ascending/descending toggle
- Fully responsive layout (mobile, tablet, desktop)
- CSS architecture using BEM naming in Tailwind `@layer components`
- Accessibility-friendly form controls

## Quick Start

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Full validation (types + lint + build)
bun run validate
```

## CSS Architecture

Custom styles use BEM methodology within Tailwind's layer system:

```css
@layer components {
  .job-list__header { /* ... */ }
  .job-list__row { /* ... */ }
  .search__input { /* ... */ }
}
```

This approach combines Tailwind's utility classes with semantic BEM naming for complex components.

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server (port 5175) |
| `bun run build` | Production build |
| `bun run validate` | Type check + lint + build |
| `bun run reset` | Clean install |

## License

MIT
