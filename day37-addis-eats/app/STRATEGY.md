# Addis Eats — Rendering Strategy

## 1. Project Overview

Addis Eats is a Next.js food ordering application demonstrating
different rendering strategies, layouts, dynamic routes, static
generation, Incremental Static Regeneration (ISR), dynamic rendering,
and React Suspense streaming.

The application uses the Next.js App Router.

---

## 2. Route Rendering Strategy

| Route        | Rendering Strategy | Reason                                                                               |
| ------------ | ------------------ | ------------------------------------------------------------------------------------ |
| `/`          | Static             | The home page contains public content that does not depend on request-specific data. |
| `/menu`      | ISR                | The menu can be generated statically and refreshed periodically.                     |
| `/menu/[id]` | Static Generation  | Known dish pages are generated using `generateStaticParams()`.                       |
| `/checkout`  | Dynamic            | Checkout may depend on request-specific customer and cart information.               |

---

## 3. Root Layout

The root layout is located at:

```text
app/layout.js
```

It provides the shared application structure:

- HTML document structure
- Global CSS
- Header
- Main content area
- Footer
- Metadata

The layout wraps all routes in the application.

This means the header and footer remain consistent throughout
the application.

---

## 4. Nested Menu Layout

The menu section has its own layout:

```text
app/menu/layout.js
```

The layout contains a category sidebar.

The sidebar is shared by all routes inside the `/menu` segment.

For example:

```text
/menu
/menu/doro-wat
/menu/tibs
/menu/kitfo
/menu/pizza
```

The menu layout remains persistent while navigating between these routes.

This demonstrates the nested layout feature of the Next.js App Router.

---

## 5. Menu Rendering — ISR

The menu page uses:

```js
export const revalidate = 60;
```

This enables Incremental Static Regeneration.

The page can be statically generated while still allowing its content
to be refreshed after the configured revalidation period.

The value:

```text
60 seconds
```

means that the menu can be regenerated after the revalidation window.

ISR is appropriate for menu content because the menu may change,
but it does not need to be generated separately for every request.

---

## 6. Dynamic Dish Routes

The application uses a dynamic route:

```text
app/menu/[id]/page.js
```

This creates routes such as:

```text
/menu/doro-wat
/menu/tibs
/menu/kitfo
/menu/pizza
```

The route uses:

```js
generateStaticParams();
```

to provide the known dish IDs during the build process.

Example:

```js
export async function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}
```

Based on the current data, four dish pages can be generated:

1. `/menu/doro-wat`
2. `/menu/tibs`
3. `/menu/kitfo`
4. `/menu/pizza`

Total known dish pages:

```text
4
```

---

## 7. Next.js 16 Params

The dynamic page uses:

```js
const { id } = await params;
```

This is intentional because the `params` value is asynchronous
in the current Next.js version used by the project.

---

## 8. Dynamic Checkout

The checkout page uses:

```js
export const dynamic = "force-dynamic";
```

Checkout is treated as dynamic because it represents
request-specific information.

Examples of information that could be request-specific include:

- Customer information
- Cart contents
- Delivery information
- Order information
- Payment information

This information should not be incorrectly reused from
a static build.

Therefore, the checkout route is explicitly configured
for dynamic rendering.

---

## 9. Suspense and Streaming

The menu page uses React Suspense:

```jsx
<Suspense fallback={<DishListFallback />}>
  <DishList />
</Suspense>
```

The `DishList` component intentionally waits before returning data:

```js
await new Promise((resolve) => setTimeout(resolve, 1500));
```

This simulates a slow data request.

The purpose is to demonstrate how Suspense can display a fallback
while the slower part of the page is loading.

The user can therefore receive the surrounding page structure
while the dish list is still being prepared.

---

## 10. Layout Hierarchy

The application follows this layout hierarchy:

```text
RootLayout
│
├── Header
│
├── Main
│   │
│   ├── Home
│   │
│   ├── MenuLayout
│   │   │
│   │   ├── Sidebar
│   │   │
│   │   └── MenuPage
│   │       │
│   │       └── DishList
│   │
│   ├── DishPage
│   │
│   └── CheckoutPage
│
└── Footer
```

This structure keeps shared UI in layouts and route-specific UI
inside individual page components.

---

## 11. Why Different Rendering Strategies Are Used

Different pages have different data requirements.

### Static

Used for content that does not change frequently and does not depend
on the incoming request.

Example:

```text
/
```

### ISR

Used when content can be generated statically but should periodically
receive updates.

Example:

```text
/menu
```

### Static Generation

Used for known dynamic routes that can be generated during the build.

Example:

```text
/menu/[id]
```

### Dynamic Rendering

Used for request-specific information.

Example:

```text
/checkout
```

---

## 12. Build Verification

The project should be tested with:

```powershell
npm run build
```

A successful build should demonstrate the different route types
used by the application.

The exact build output may vary depending on the Next.js version
and project configuration.

The important routes to verify are:

```text
/
 /menu
 /menu/doro-wat
 /menu/tibs
 /menu/kitfo
 /menu/pizza
 /checkout
```

---

## 13. Assignment Requirements Demonstrated

This project demonstrates the following Next.js concepts:

- App Router
- Root Layout
- Nested Layout
- Static Rendering
- Incremental Static Regeneration
- Dynamic Routes
- `generateStaticParams`
- Dynamic Rendering
- React Suspense
- Streaming
- Metadata
- Server Components
- Shared Layouts
- Route-based project structure

---

## 14. Conclusion

The Addis Eats project demonstrates how Next.js can use different
rendering strategies depending on the requirements of each route.

The application separates shared UI into layouts, uses ISR for the
menu, statically generates known dish pages, uses dynamic rendering
for checkout, and demonstrates Suspense-based loading for the menu.

This approach provides a structured and scalable foundation for
expanding Addis Eats into a complete food ordering application.
