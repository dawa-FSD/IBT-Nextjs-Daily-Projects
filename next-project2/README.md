# 🍽️ Addis Eats — Day 37

A professional Next.js food-ordering application demonstrating layouts, nested layouts, static generation, ISR, dynamic rendering, and streaming with Suspense.

## 🚀 Features

- Next.js App Router
- Root layout
- Shared Header and Footer
- Nested Menu Layout
- Persistent Menu Sidebar
- Static Homepage
- Incremental Static Regeneration
- `generateStaticParams`
- Dynamic Checkout
- React Suspense
- Streaming UI
- Responsive design

## 📁 Project Structure

```text
day37-addis-eats/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── menu/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   └── checkout/
│       └── page.js
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── MenuSidebar.js
│   └── DishList.js
├── STRATEGY.md
├── README.md
└── package.json
```
