# 🍽️ Addis Eats — Next.js

Addis Eats is a food-ordering web application built with **Next.js** using the **App Router**.

This project demonstrates Next.js routing, dynamic routes, navigation with `next/link`, loading states, error handling, and custom 404 pages.

## 🚀 Project Overview

The project was migrated from the previous Addis Eats application into a Next.js App Router structure.

Users can:

- View the Addis Eats home page
- Browse the food menu
- Open individual dishes using dynamic routes
- View the cart
- Continue to checkout
- Navigate between pages without full page reloads
- See loading and error states
- Receive a custom not-found page for unknown dishes

## 🛠️ Technologies

- Next.js
- React
- JavaScript
- CSS
- Next.js App Router
- `next/link`
- Dynamic Routes
- `notFound()`

## 📁 Project Structure

```text
next-project1/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── not-found.js
│   │
│   ├── menu/
│   │   ├── page.js
│   │   ├── loading.js
│   │   ├── error.js
│   │   ├── DishList.js
│   │   ├── CategoryBar.js
│   │   │
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── cart/
│   │   └── page.js
│   │
│   └── checkout/
│       └── page.js
│
├── public/
├── package.json
└── README.md
```

## 🧭 Route Tree

| Route         | Description           |
| ------------- | --------------------- |
| `/`           | Home page             |
| `/menu`       | Addis Eats menu       |
| `/menu/[id]`  | Dynamic dish page     |
| `/cart`       | Shopping cart         |
| `/checkout`   | Checkout page         |
| Unknown route | Custom not-found page |

## 🔥 Dynamic Routing

The menu uses a dynamic route:

```text
app/menu/[id]/page.js
```

Examples:

```text
/menu/1
/menu/2
/menu/3
```

The `id` is read from the route parameters:

```javascript
const { id } = await params;
```

If the requested dish does not exist, the application uses:

```javascript
notFound();
```

This displays the custom `not-found.js` page.

## ⏳ Loading State

The menu route contains:

```text
app/menu/loading.js
```

This provides a loading UI while the menu segment is loading.

## ❌ Error Handling

The menu route also contains:

```text
app/menu/error.js
```

The error component uses:

```javascript
"use client";
```

and provides a **Try Again** button using:

```javascript
reset();
```

## 🔗 Navigation

All pages are connected using Next.js `Link`:

```javascript
import Link from "next/link";
```

Example:

```jsx
<Link href="/menu">View Menu</Link>
```

This provides client-side navigation between pages.

## 🎨 Styling

The project uses a global stylesheet:

```text
app/globals.css
```

The CSS provides:

- Responsive layout
- Navigation buttons
- Menu cards
- Category buttons
- Loading animation
- Error page styling
- Not-found page styling
- Mobile responsive design

## ▶️ Getting Started

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

## 🧪 Testing Routes

Test each route individually:

```text
http://localhost:3000/
http://localhost:3000/menu
http://localhost:3000/menu/1
http://localhost:3000/menu/2
http://localhost:3000/menu/999
http://localhost:3000/cart
http://localhost:3000/checkout
```

`/menu/999` should display the custom **Dish Not Found** page.

## 📚 Learning Objectives

This project demonstrates:

1. Next.js project setup
2. App Router
3. File-based routing
4. Nested routes
5. Dynamic routes
6. Route parameters
7. `next/link`
8. Loading UI
9. Error UI
10. `notFound()`
11. Reusable components
12. Global CSS
13. Responsive design

## 👨‍💻 Author

**Dawa**

IBT College Canada
CodeOps · Full Stack Software Development

## 📌 Assignment

**In-Class Exercise — 28 / 30**

**Move Addis Eats onto Next.js**

The project satisfies the required route tree:

- Home
- Menu
- Dynamic Dish
- Cart
- Checkout
- Loading
- Error
- Not Found
