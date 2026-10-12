# Project6— Data Fetching with SWR and TanStack Query

## Project overview

Addis Eats is a JavaScript Next.js App Router learning project demonstrating server-rendered initial data, SWR client revalidation, debounced search, pagination, order polling, SWR cart revalidation, and TanStack Query caching/mutations.

## Run locally

1. Install Node.js 20.9+ (required by current Next.js 16 releases).
2. Extract the project folder and open it in VS Code.
3. In the terminal run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000`.
5. Verify `/menu`, `/orders/1001`, `/cart`, `/tanstack`, and `/api/dishes?page=1`.
6. Production check: `npm run build`, then `npm start`.

## Main routes

- `/` — landing page and server-rendered featured dishes.
- `/menu` — server supplies initial dishes; SWR manages debounced search and page requests.
- `/orders/1001` — server supplies initial order; SWR refreshes every 5 seconds.
- `/cart` — SWR reads cart and revalidates after a successful POST/DELETE.
- `/tanstack` — TanStack Query `useQuery`, `useMutation`, and `invalidateQueries` demonstration.
- `/api/dishes?q=tibs&page=1` — search and paginated dish API.
- `/api/orders/1001` — order status API.
- `/api/cart` — cart API for the learning demo.

## Data-fetching decisions

- Initial page content: Next.js Server Components use local server-side data to avoid a blank initial screen.
- Interactive search and page changes: SWR key contains query and page so each request is cached separately.
- Debounce: 300 ms delay prevents a request for every keystroke.
- Previous results: `keepPreviousData: true` avoids a flickering empty area while a new key loads.
- Live order: `fallbackData` provides the server-rendered order immediately; `refreshInterval: 5000` periodically revalidates it.
- Cart write: POST completes, then SWR `mutate()` revalidates the cart.
- TanStack Query: `queryKey` identifies cached data; `staleTime` controls freshness and `gcTime` controls retention of inactive cache entries; successful mutations invalidate related keys.

## Manual test checklist

- [ ] Home page shows featured dishes.
- [ ] `/api/dishes` returns JSON and `/api/dishes?q=kitfo` filters results.
- [ ] `/menu` search waits briefly after typing and returns matching results.
- [ ] Next/Previous buttons change pages; URL updates with `page` and `q` query parameters.
- [ ] Search with no matches shows the empty state.
- [ ] `/orders/1001` renders the initial status immediately and revalidates every five seconds.
- [ ] `/orders/9999` shows the not-found page.
- [ ] Adding a dish on `/cart` updates the displayed cart after revalidation.
- [ ] `/tanstack` loads dishes; Add to cart disables while pending and shows success/error feedback.
- [ ] `npm run build` completes without errors.

## Important demo limitations

The sample `lib/dishes.js`, `lib/orders.js`, and `lib/cart.js` use local/static or in-memory data. In-memory cart changes are not durable, not user-specific, and may not persist between server restarts or across serverless instances. A production application should use a database, authenticated users, server-side input validation, and a proper cart/order persistence strategy. The five-second polling interval is a demonstration, not a substitute for a real-time order service.

## SWR vs TanStack Query

| Capability          | SWR                                  | TanStack Query                     |
| ------------------- | ------------------------------------ | ---------------------------------- |
| Read data           | `useSWR`                             | `useQuery`                         |
| Cache identity      | Key                                  | `queryKey`                         |
| Polling             | `refreshInterval`                    | `refetchInterval`                  |
| Initial data        | `fallbackData`                       | `initialData` / hydration          |
| Write operations    | `mutate()` / request then revalidate | `useMutation`                      |
| Refresh after write | `mutate()`                           | `invalidateQueries()`              |
| Complexity          | Smaller API                          | More advanced query/mutation tools |

## Submission checklist

- [ ] Commit all source files and `DATA.md` to GitHub.
- [ ] Include the repository URL in the LMS submission.
- [ ] If required, add screenshots or a short demo video showing search, pagination, polling and cart updates.
