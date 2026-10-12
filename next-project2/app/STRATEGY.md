# Addis Eats Rendering Strategy

## Route Strategy

| Route        | Strategy          | Why                                                                          |
| ------------ | ----------------- | ---------------------------------------------------------------------------- |
| `/`          | Static            | The homepage contains stable content that does not need request-time data.   |
| `/menu`      | ISR               | Menu data can change, so the route revalidates every 3600 seconds.           |
| `/menu/[id]` | Static Generation | `generateStaticParams` creates a page for every known dish during the build. |
| `/checkout`  | Dynamic           | Authentication/session read requires request-time rendering.                 |

## Layout Strategy

The root layout owns the HTML and body elements and provides the shared Header and Footer.

The menu layout provides a persistent sidebar for all menu routes.

Because the sidebar belongs to the nested menu layout, it remains mounted while navigating between `/menu` and `/menu/[id]`.

## Streaming Strategy

The menu page wraps `DishList` in a React Suspense boundary.

This allows the menu layout and sidebar to render immediately while the dish list can load behind the fallback.

## Rendering Summary

- Static rendering is used for stable pages.
- Incremental Static Regeneration is used for menu data that can change.
- `generateStaticParams` pre-generates known dish pages.
- Dynamic rendering is limited to checkout because request-time authentication/session data is required.
- Suspense provides streaming for the menu content.
