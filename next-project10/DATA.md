# Addis Eats — Day 45 data notes

- Menu data is currently stored in `lib/dishes.js` as demo data.
- Cart items are stored in browser `localStorage` under `addis-eats-cart`.
- Demo orders are stored in browser `localStorage` under `addis-eats-orders` and `addis-eats-last-order`.
- Checkout validates the customer name, Ethiopian mobile format (`09` + 8 digits), and delivery area in the browser.
- This is a learning project, not a production ordering system. Browser storage is editable and must not be treated as trusted order data.
- Before production: implement server-side validation, database persistence, authenticated sessions, order ownership checks, CSRF protections as applicable, rate limiting, and a real payment provider.
- Set `NEXT_PUBLIC_SITE_URL` to the deployed canonical origin before deployment.
