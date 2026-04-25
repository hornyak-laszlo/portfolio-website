# Portfolio Website

A modern portfolio website built with **Astro 5**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

## Stack

- **Astro 5** – Static site generation with islands architecture
- **React 19** – Interactive components (via `client:*` directives)
- **TypeScript** – Strict type checking
- **Tailwind CSS v4** – CSS-based configuration (no `tailwind.config.js`)
- **shadcn/ui** – UI components with Radix UI primitives
- **Bun** – Package manager

## Development

```bash
bun dev          # Start development server
bun build        # Build for production → dist/
bun preview      # Preview production build
bun typecheck    # Run TypeScript checks
bun lint         # Run ESLint
bun format       # Format code with Prettier
```

## Project Structure

```bash
src/
  pages/           # Astro file-based routing
  layouts/         # Astro layouts
  components/ui/   # shadcn/ui components
  lib/utils.ts     # Utility functions (cn() helper)
  styles/global.css # Tailwind v4 entry + theme tokens
```

## Deployment

The project is configured for static builds (output to `dist/`).
