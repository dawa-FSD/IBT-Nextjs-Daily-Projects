# Addis Eats — Day 45 Professional Starter

A responsive Next.js App Router learning project featuring Ethiopian-inspired menu cards, menu search, a persistent demo cart, checkout form validation, demo order confirmation, and basic SEO metadata/sitemap/robots.

## Requirements

- Node.js LTS (use a version supported by your installed Next.js version)
- npm

## Run locally

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Verify

```powershell
npm run lint
npm run build
```

## Routes

- `/` — home
- `/menu` — searchable menu
- `/menu/1` — dish detail (IDs 1–6)
- `/cart` — persistent browser cart
- `/checkout` — demo checkout
- `/order-success?id=...` — local demo confirmation
- `/api/dishes?q=kitfo` — JSON menu search
- `/sitemap.xml` and `/robots.txt` — generated SEO routes

## Important limitations

This is an educational front-end demo. Cart and order data are stored in browser localStorage; no database, verified login, real delivery booking, or payment processing is configured. Client-side validation is for user experience only and is not a security boundary. Never use this setup for real orders or payments without server-side validation and trusted persistence.
