# 🍽️ Addis Eats — Next.js Mini Project

A beginner-friendly Ethiopian food ordering mini-project built with **Next.js App Router**.

The main purpose of this project is to understand how Next.js uses the **file system for routing** instead of configuring routes manually.

---
##LIVE DEMO=(https://ibt-module-3-next-js.vercel.app/)

## 🚀 Project Overview

Addis Eats allows users to:

- Visit the home page
- Browse Ethiopian dishes
- Open a dynamic dish details page
- Visit the cart
- Visit checkout
- Experience loading UI
- Experience error UI
- See a custom 404 page
- Navigate between pages using `next/link`

---

## 🛠️ Technologies

- Next.js
- React
- JavaScript
- CSS
- Next.js App Router
- File-system based routing

---

## 📁 Project Structure

```text
app/
├── layout.js
├── page.js
├── globals.css
├── not-found.js
│
├── menu/
│   ├── page.js
│   ├── loading.js
│   ├── error.js
│   │
│   ├── components/
│   │   └── MenuCard.js
│   │
│   └── [id]/
│       └── page.js
│
├── cart/
│   └── page.js
│
└── checkout/
    └── page.js
```

---

## 🧭 Routes

| File                    | Route       | Purpose           |
| ----------------------- | ----------- | ----------------- |
| `app/page.js`           | `/`         | Home page         |
| `app/menu/page.js`      | `/menu`     | Menu page         |
| `app/menu/[id]/page.js` | `/menu/:id` | Dynamic dish page |
| `app/cart/page.js`      | `/cart`     | Cart page         |
| `app/checkout/page.js`  | `/checkout` | Checkout page     |

---

## 🔥 Dynamic Route

The route:

```text
app/menu/[id]/page.js
```

creates dynamic URLs such as:

```text
/menu/doro
/menu/tibs
/menu/shiro
/menu/misir
/menu/kitfo
/menu/firfir
```

The `id` is received through the page props:

```jsx
export default async function DishPage({ params }) {
  const { id } = await params;
}
```

No `useParams()` hook is required.

---

## ⏳ Loading UI

The file:

```text
app/menu/loading.js
```

automatically provides loading UI for the menu segment.

Example:

```text
Loading Menu...
```

---

## ❌ Error UI

The file:

```text
app/menu/error.js
```

handles errors inside the menu segment.

It also provides a retry button using:

```jsx
reset();
```

Because it uses React client-side functionality, it contains:

```jsx
"use client";
```

---

## 🚫 Not Found

The project contains:

```text
app/not-found.js
```

It handles pages that do not exist.

It can be reached by visiting an invalid URL such as:

```text
/random-page
```

It is also triggered from the dynamic dish page with:

```jsx
import { notFound } from "next/navigation";

if (!dish) {
  notFound();
}
```

For example:

```text
/menu/pizza
```

will show the not-found page because `pizza` is not a valid dish.

---

## 🧩 Colocated Components

Menu components are stored inside:

```text
app/menu/components/
```

For example:

```text
app/menu/components/MenuCard.js
```

This file is imported by the menu page:

```jsx
import MenuCard from "./components/MenuCard";
```

It is a component, not a route.

Only files such as:

```text
page.js
```

create routes in this structure.

---

## 🔗 Navigation

Internal navigation uses Next.js:

```jsx
import Link from "next/link";
```

Example:

```jsx
<Link href="/menu">View Menu</Link>
```

The project avoids normal `<a>` elements for internal page navigation.

---

## 🎨 Styling

The project uses a global stylesheet:

```text
app/globals.css
```

The CSS provides:

- Responsive navigation
- Hero section
- Menu cards
- Buttons
- Dish details
- Checkout form
- Loading state
- Error state
- 404 page
- Responsive mobile layout
- Footer

---

## ▶️ Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧪 Testing the Requirements

### Test Home

```text
http://localhost:3000
```

### Test Menu

```text
http://localhost:3000/menu
```

### Test Dynamic Dish

```text
http://localhost:3000/menu/doro
```

Try:

```text
http://localhost:3000/menu/tibs
```

### Test Invalid Dish

```text
http://localhost:3000/menu/pizza
```

This should trigger `notFound()`.

### Test Invalid URL

```text
http://localhost:3000/random-page
```

This should display the custom 404 page.

### Test Cart

```text
http://localhost:3000/cart
```

### Test Checkout

```text
http://localhost:3000/checkout
```

---

## 🎯 Learning Objectives

This mini-project demonstrates:

1. Next.js App Router
2. File-system based routing
3. Static routes
4. Dynamic routes
5. `params` props
6. `next/link`
7. `loading.js`
8. `error.js`
9. `not-found.js`
10. `notFound()`
11. Component colocation
12. Global CSS
13. Responsive design
14. Server and client component concepts

---

## 👨‍💻 Author

Dawa Asfaw

Built as a Next.js learning project for the Addis Eats application.
