# 🍽️ Addis Eats

### Mini-Project — Layouts and Rendering Strategies

A professional Next.js App Router application demonstrating nested layouts, static generation, incremental static regeneration, dynamic rendering, and streaming with React Suspense.

---

## ✨ Features

- Next.js App Router
- Root layout with shared Header and Footer
- Nested Menu Layout
- Persistent menu sidebar
- Static homepage
- ISR menu route
- `generateStaticParams`
- Static dish pages
- Dynamic checkout
- React Suspense streaming
- Loading UI
- Custom 404 UI
- Responsive design
- Accessible navigation
- Professional component architecture

---

## 📁 Project Structure

```text
day37-addis-eats/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── loading.js
│   │
│   ├── menu/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── loading.js
│   │   └── [id]/
│   │       ├── page.js
│   │       └── not-found.js
│   │
│   └── checkout/
│       └── page.js
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── MenuSidebar.js
│   ├── DishList.js
│   └── DishCard.js
│
├── data/
│   └── dishes.js
│
├── STRATEGY.md
├── README.md
└── package.json
```
