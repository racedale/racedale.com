# racedale.com

Personal portfolio and blog site built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- [TanStack Router](https://tanstack.com/router) - Type-safe file-based routing
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Cloudflare Workers](https://workers.cloudflare.com) deployment
- [Zod](https://github.com/colinhacks/zod) for schema validation

## Development

From your terminal:

```sh
npm install
npm run dev
```

This starts the Vite dev server with HMR.

## Deploy

```sh
npm run deploy
```

Builds and deploys to Cloudflare Workers via Wrangler.

## Structure

```
src/
├── components/    # Reusable React components
├── routes/        # File-based routes (TanStack Router)
│   ├── index.tsx      # Homepage
│   ├── posts/         # Blog section
│   └── users/         # User profiles
├── styles/          # Global styles
├── utils/           # Shared utilities
├── router.tsx       # Router configuration
└── __root.tsx       # Root layout component
```
