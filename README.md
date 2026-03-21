# Pro Portfolio Showcase (JavaScript)

This is the JavaScript version of the portfolio, converted from TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the project
- `npm test` — Run tests

## Changes from TypeScript version

- All `.ts` files renamed to `.js`
- All `.tsx` files renamed to `.jsx`
- Removed `tsconfig.json` and `tsconfig.app.json`
- Removed all TypeScript type annotations, interfaces, and generics
- Updated `tailwind.config` content globs from `{ts,tsx}` to `{js,jsx}`
- Updated `vite.config` and `vitest.config` to `.js`
- Removed `typescript` from devDependencies
- Removed `vite-env.d.ts`
