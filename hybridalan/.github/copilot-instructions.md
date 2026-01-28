<!-- Repo-specific Copilot instructions for coding agents -->
# HybridaLAN — Copilot Instructions

Summary
- Small Next.js (app-router) TypeScript project using Next 16 + React 19 and Tailwind.
- UI components live under `component/`; route pages use the `app/` directory.
- Shared types are under `types/` (e.g., `types/person.ts`, `types/tournament.ts`).

Quick commands
- Development: `npm run dev` (runs `next dev`).
- Build: `npm run build` then `npm start` for production.
- Lint: `npm run lint` (ESLint configured).

Architecture & patterns
- App router: top-level routes live in `app/`. Files in `app/` are server components by default; add `"use client"` at the top of a file when client-only behavior (hooks, state, event handlers) is required (see `app/page.tsx`).
- Components: place presentational and interactive components in `component/`. Components commonly use default exports and simple props (see `component/playerCard.tsx`).
- Types: centralize domain typings in `types/`. Use `types/person.ts` for small UI props and `types/tournament.ts` for domain models.
- Path alias: the project uses the `@/*` path mapping from `tsconfig.json`; import like `import X from "@/component/playerCard"`.

Conventions & gotchas
- Default exports for React components (existing components follow this pattern).
- Avoid adding `use client` unless the component uses hooks or client-only APIs; prefer server components for performance.
- Inline styles appear in some components (e.g., `playerCard.tsx`) — preserve existing style approach when modifying that component unless migrating to Tailwind.
- `component/addPlayerButton.tsx` is currently empty; any new UI for adding players should live here.

External tooling & infra
- Tailwind v4 and postcss are configured (`tailwindcss`, `@tailwindcss/postcss`). Styles import in `app/globals.css`.
- Fonts: `app/layout.tsx` uses `next/font` (Geist family) — avoid removing font wrappers.

Examples (patterns to follow)
- Server component route: `app/pages/homepage/page.tsx` imports `PlayerCard` and renders static content.
- Client component with navigation: `app/page.tsx` shows `"use client"` and uses `next/navigation`'s `useRouter()`.
- Type usage: `component/playerCard.tsx` imports `PlayerProps` from `types/person.ts` — keep type imports minimal and local.

What to update carefully
- If adding global state or context, prefer placing providers in `app/layout.tsx`.
- When adding new pages, follow the app-router folder layout (`app/<route>/page.tsx`, optional `layout.tsx`).
- Keep imports consistent with the `@/` alias.

When in doubt
- Run `npm run dev` to validate changes quickly in the browser at `http://localhost:3000`.
- Prefer following existing component export/import styles and the server/client component boundary visible in `app/` files.

If you need more detail, ask for which area (routing, components, types, or build) to expand.
