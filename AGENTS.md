# AGENTS.md — portfolio-website

## Stack & Tooling

- **Astro 5** + **React 19** (islands via `client:*` directives)
- **Tailwind CSS v4** (CSS-based config; no `tailwind.config.js`)
- **shadcn/ui** (`radix-vega` style, `rsc: false`)
- **Bun** package manager (`bun.lock`)
- **TypeScript** with strict Astro preset; `jsx: "react-jsx"`

## Dev Commands

Use `bun` (or `npx` when invoking shadcn CLI):

```bash
bun dev          # astro dev
bun build        # astro build  → dist/
bun preview      # astro preview
bun typecheck    # astro check
bun lint         # eslint .
bun format       # prettier --write "**/*.{ts,tsx,astro}"
```

Typical verification order: `bun lint` → `bun typecheck` → `bun build`

## Project Structure

```
src/
  pages/           # Astro file-based routing
  layouts/         # Astro layouts (import global.css here)
  components/ui/   # shadcn/ui components (do not edit manually)
  lib/utils.ts     # `cn()` helper (clsx + tailwind-merge)
  styles/global.css # Tailwind v4 entry + oklch theme tokens + dark mode
```

- **Entry**: `src/pages/index.astro`
- **Global styles**: loaded in `src/layouts/main.astro` via `@/styles/global.css`
- **Path alias**: `@/*` → `./src/*`

## shadcn/ui Conventions

- Add components with `npx shadcn@latest add <component>` (not `bunx` — shadcn CLI prefers `npx`)
- Components land in `src/components/ui/`
- Uses **lucide-react** for icons and **radix-ui** primitives
- Uses `class-variance-authority` + `cn()` for styling
- Prettier recognizes `cn` and `cva` for Tailwind class sorting (see `.prettierrc`)

## Styling Quirks

- Tailwind v4: theme lives in `src/styles/global.css` using `@theme inline` and CSS custom properties (`--color-*`, `--radius-*`, etc.)
- Colors use **oklch** tokens in `:root` and `.dark`
- Dark mode is class-based (`.dark`); no `darkMode: 'selector'` key exists because v4 has no JS config
- Font: Inter Variable via `@fontsource-variable/inter`

## Code Style

- **Prettier**: no semicolons, double quotes, LF, tab width 2, trailing comma `es5`
- **ESLint** (flat config): targets `**/*.{ts,tsx}`; ignores `dist` and `.astro`
- Plugins: `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`

## Opencode / MCP

- `opencode.json` registers the **shadcn MCP** (`npx shadcn@latest mcp`)
- This enables component search/add via OpenCode tools when working with shadcn/ui
