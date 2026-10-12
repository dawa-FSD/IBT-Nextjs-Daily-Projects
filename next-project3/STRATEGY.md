# Addis Eats — Rendering Strategy

## Route Strategy

| Route        | Strategy          | Configuration               | Reason                                                       |
| ------------ | ----------------- | --------------------------- | ------------------------------------------------------------ |
| `/`          | Static            | Default static rendering    | The landing page contains stable content.                    |
| `/menu`      | ISR               | `revalidate = 3600`         | Menu data can change and should refresh periodically.        |
| `/menu/[id]` | Static Generation | `generateStaticParams()`    | Known dishes can be generated during the build.              |
| `/checkout`  | Dynamic           | `dynamic = "force-dynamic"` | Authentication/session read requires request-time rendering. |

## Layout Strategy

### Root Layout

`app/layout.js` owns the document structure and renders:

- Header
- Main content
- Footer
- Global CSS

### Menu Layout

`app/menu/layout.js` owns the menu sidebar.

Because the sidebar belongs to the nested layout, it remains mounted while navigating between menu pages.

## Streaming Strategy

The `/menu` route uses React Suspense around `DishList`.

The menu layout and sidebar can render immediately while the dish list is streamed behind the Suspense boundary.

## Static Generation

`generateStaticParams()` creates static pages for:

- `/menu/doro-wat`
- `/menu/shiro`
- `/menu/tibs`
- `/menu/kitfo`

## Dynamic Rendering

Checkout is intentionally dynamic because authentication/session information must be available at request time.

## Summary

The application uses the least dynamic rendering strategy appropriate for each route:

- Static for stable content.
- ISR for periodically changing menu data.
- Static generation for known dishes.
- Dynamic rendering only for request-dependent checkout.
- Suspense streaming for progressive menu rendering.
