# 🍽️ Addis Eats

A modern food-ordering web application built with **Next.js App Router**, **React**, and **JavaScript**.

Addis Eats demonstrates the major Next.js concepts covered throughout the week, including Server Components, Client Components, dynamic routes, nested layouts, server-side data fetching, Server Actions, Route Handlers, form validation, loading states, error handling, and production builds.

---

## 📌 Project Overview

**Addis Eats** is a simple Ethiopian food-ordering application where users can:

- Explore available dishes
- Filter dishes by category
- View individual dish details
- Manage items in a shopping cart
- Submit an order through a checkout form
- Access dishes through a Route Handler API
- Experience loading and error states
- Navigate between pages using modern Next.js navigation

The main goal of this project is not only to make the application work, but also to understand **why each part is implemented using a particular Next.js feature**.

---

## 🚀 Technologies Used

- **Next.js 16**
- **React 19**
- **JavaScript**
- **Next.js App Router**
- **Server Components**
- **Client Components**
- **Server Actions**
- **Route Handlers**
- **CSS**
- **HTML**
- **Modern Next.js Navigation**

---

## 📂 Project Structure

```text
day39-addis-eats/
│
├── app/
│   ├── api/
│   │   └── dishes/
│   │       └── route.js
│   │
│   ├── cart/
│   │   ├── Cart.jsx
│   │   └── page.js
│   │
│   ├── checkout/
│   │   ├── CheckoutForm.jsx
│   │   └── page.js
│   │
│   ├── menu/
│   │   ├── [id]/
│   │   │   ├── error.js
│   │   │   ├── loading.js
│   │   │   ├── not-found.js
│   │   │   └── page.js
│   │   │
│   │   ├── DishCard.jsx
│   │   ├── data.js
│   │   ├── error.js
│   │   ├── layout.js
│   │   ├── loading.js
│   │   └── page.js
│   │
│   ├── actions.js
│   ├── error.js
│   ├── globals.css
│   ├── layout.js
│   ├── loading.js
│   └── page.js
│
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🗺️ Application Routes

| Route         | Purpose                         |
| ------------- | ------------------------------- |
| `/`           | Home page                       |
| `/menu`       | Display available dishes        |
| `/menu/[id]`  | Display individual dish details |
| `/cart`       | Display and manage cart         |
| `/checkout`   | Submit an order                 |
| `/api/dishes` | Return dishes through an API    |

---

## 🧭 Navigation

The application uses Next.js `Link` for client-side navigation.

Example:

```jsx
import Link from "next/link";

<Link href="/menu">Explore Menu</Link>;
```

This allows users to navigate between pages without relying on traditional full-page browser navigation.

---

# 🧩 Next.js Concepts Demonstrated

## 1. App Router

The project uses the Next.js App Router through the `app` directory.

Example:

```text
app/
├── page.js
├── menu/
│   └── page.js
└── cart/
    └── page.js
```

Each `page.js` file represents a route in the application.

---

## 2. Server Components

Server Components are used by default.

For example:

```jsx
export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>{dish.name}</div>
      ))}
    </div>
  );
}
```

The menu data is fetched on the server before the page is rendered.

### Why?

Server Components allow data fetching without unnecessarily sending that data-fetching logic to the browser.

---

## 3. Client Components

Interactive components use:

```jsx
"use client";
```

For example:

```jsx
"use client";

import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Interactive logic...
}
```

The cart requires client-side state and user interaction, so it belongs on the client.

---

## 4. Dynamic Routes

The application uses:

```text
app/menu/[id]/page.js
```

This creates dynamic routes such as:

```text
/menu/doro-wat
/menu/tibs
/menu/kitfo
```

The dynamic parameter is accessed using:

```jsx
export default async function DishDetailsPage({ params }) {
  const { id } = await params;

  // ...
}
```

---

## 5. Static Parameters

The project also demonstrates:

```jsx
export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: dish.id,
  }));
}
```

This allows Next.js to know which dynamic pages can be generated ahead of time.

---

## 6. Nested Layout

The menu section has its own layout:

```text
app/menu/layout.js
```

This layout provides menu-specific navigation and wraps the menu pages.

```text
Menu Layout
│
├── /menu
└── /menu/[id]
```

This demonstrates how nested layouts can share UI between related routes.

---

## 7. Server-Side Data Fetching

Dish data is stored in:

```text
app/menu/data.js
```

The application provides:

```javascript
getDishes();
```

and:

```javascript
getDishById(id);
```

The menu page calls:

```javascript
const dishes = await getDishes();
```

The individual dish page calls:

```javascript
const dish = await getDishById(id);
```

This demonstrates server-side data fetching directly inside Server Components.

---

## 8. Server Actions

The checkout form uses a Server Action located at:

```text
app/actions.js
```

Example:

```javascript
"use server";

export async function placeOrder(formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const address = formData.get("address");

  // Validation and order processing
}
```

The form submits directly to the Server Action.

### Why?

Server Actions allow server-side operations such as processing form submissions without creating a separate API endpoint for every form.

---

## 9. Form Validation

The checkout form performs server-side validation.

The server checks:

- Customer name
- Phone number
- Delivery address

Example:

```javascript
if (!name || name.trim().length < 2) {
  return {
    success: false,
    message: "Please enter a valid name.",
  };
}
```

### Why validate on the server?

Client-side validation improves user experience, but it should never be the only layer of validation.

A user can bypass browser validation and send a request directly to the server.

Therefore, important data must be validated on the server.

---

## 10. Route Handler

The project includes:

```text
app/api/dishes/route.js
```

This creates:

```text
GET /api/dishes
```

Example:

```javascript
export async function GET() {
  const dishes = await getDishes();

  return Response.json({
    success: true,
    data: dishes,
  });
}
```

The API can be tested at:

```text
http://localhost:3000/api/dishes
```

### Why use a Route Handler?

A Route Handler is useful when another client, application, or HTTP request actually needs an API endpoint.

A Server Component does not automatically need an API just to fetch its own data.

---

## 11. Loading UI

The project uses:

```text
loading.js
```

for loading states.

Examples:

```text
app/loading.js
app/menu/loading.js
app/menu/[id]/loading.js
```

Next.js automatically displays these loading interfaces while the corresponding route is loading.

---

## 12. Error Handling

The project uses:

```text
error.js
```

Examples:

```text
app/error.js
app/menu/error.js
app/menu/[id]/error.js
```

These components provide user-friendly error interfaces when something goes wrong.

Because error boundaries are client components, they use:

```jsx
"use client";
```

---

## 13. Not Found Handling

The dynamic dish route uses:

```text
not-found.js
```

If a dish does not exist, the application calls:

```javascript
notFound();
```

The user then receives a friendly:

```text
Dish Not Found
```

page instead of an unexpected application error.

---

# 🛒 Cart

The cart demonstrates Client Component interactivity.

Users can:

- View selected dishes
- Increase quantity
- Decrease quantity
- Remove items when quantity reaches zero
- See the subtotal
- See delivery cost
- See the final total

The cart uses React state:

```jsx
const [cart, setCart] = useState(initialCart);
```

---

# 💳 Checkout

The checkout page contains a customer form for:

- Full name
- Phone number
- Delivery address

The form submits using a Server Action.

The submit button also displays a pending state:

```text
Placing Order...
```

while the order is being processed.

---

# 🍽️ Sample Dishes

The application currently contains dishes such as:

| Dish          | Category      |   Price |
| ------------- | ------------- | ------: |
| Doro Wat      | Ethiopian     | 350 ETB |
| Tibs          | Ethiopian     | 450 ETB |
| Kitfo         | Ethiopian     | 400 ETB |
| Shiro Wat     | Vegetarian    | 220 ETB |
| Misir Wat     | Vegetarian    | 200 ETB |
| Special Pizza | International | 550 ETB |

---

# 🎨 UI Features

The application includes:

- Responsive navigation
- Hero section
- Menu cards
- Category filtering
- Dish details
- Shopping cart
- Checkout form
- Loading states
- Error states
- Empty states
- Responsive mobile design
- Professional green Ethiopian-inspired theme

---

# 💻 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/dawa-FSD/Addis-Eats.git
```

## 2. Enter the project directory

```bash
cd Addis-Eats
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

## 5. Open the application

```text
http://localhost:3000
```

---

# 🧪 Testing the Application

Test each route:

```text
/
 /menu
 /menu/doro-wat
 /menu/tibs
 /menu/kitfo
 /cart
 /checkout
 /api/dishes
```

Also test:

- Menu category filtering
- Dynamic dish pages
- Invalid dish IDs
- Cart quantity buttons
- Empty cart state
- Checkout validation
- Successful checkout
- API response
- Loading states
- Error states

---

# 🏗️ Production Build

Before submitting the project, create a production build:

```bash
npm run build
```

If the build succeeds, start the production server:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

---

# 📚 Learning Outcomes

After completing this project, I can:

- Build applications using the Next.js App Router
- Create static and dynamic routes
- Build nested layouts
- Understand Server Components
- Identify when `"use client"` is required
- Fetch data on the server
- Create Client Components for interactive features
- Use Server Actions for form submissions
- Validate form data on the server
- Create Route Handler APIs
- Handle loading states
- Handle application errors
- Handle missing resources with `notFound()`
- Use modern Next.js navigation
- Prepare and test production builds

---

# 🔐 Architectural Decisions

### Why is the menu a Server Component?

The menu primarily displays server-fetched data and does not require browser state.

### Why is the cart a Client Component?

The cart requires interactive state and button events.

### Why is checkout split into two files?

The page itself can remain a Server Component while the interactive form is isolated into a Client Component.

### Why use a Server Action for checkout?

The form submission is a server-side operation, so a Server Action provides a direct way to process the form securely.

### Why use a Route Handler?

The `/api/dishes` endpoint demonstrates how an HTTP API can be exposed when an external client or HTTP consumer needs the data.

### Why use loading and error files?

They provide better user experience while routes are loading or when something goes wrong.

---

# 👨‍💻 Author

**Dawa Asfaw**

Full Stack Software Development Student

IBT College Canada

---

# 📄 Project Information

**Project:** Addis Eats
**Framework:** Next.js
**Language:** JavaScript
**UI Library:** React
**Architecture:** Next.js App Router
**Project Type:** Food Ordering Application
**Status:** Completed
