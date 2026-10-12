# Addis Eats — Authentication & Authorization

## Authentication

- Passwords are hashed using Argon2id.
- Session tokens are generated with cryptographically secure randomness.
- Only SHA-256 session token hashes are stored in PostgreSQL.
- Session cookies are HttpOnly, SameSite=Lax and Secure in production.
- Sessions expire after seven days.
- Sign-out invalidates the database session and deletes the cookie.

## Route Protection

| Route      | Protection                          |
| ---------- | ----------------------------------- |
| /          | Public                              |
| /menu      | Public                              |
| /menu/[id] | Public                              |
| /signin    | Public                              |
| /checkout  | Proxy + server-side session check   |
| /orders    | Proxy + session + user-scoped query |
| /kitchen   | Server-side session + staff role    |

## Protected Operations

- placeOrder: requires a valid session; uses the session user ID and database prices.
- cancelOrder: requires a valid session, matching order ownership and Preparing status.
- Sign-out: POST request; invalidates the session.

## Demo Accounts

Customer:

- Email: user@example.com
- Password: password123

Staff:

- Email: staff@example.com
- Password: password123

Second customer:

- Email: user2@example.com
- Password: password123

Demo credentials are for local classroom testing only.

## Security Tests

1. Signed-out user visits /orders and /checkout.
2. Customer can see only their own orders.
3. Customer cannot cancel another customer's order.
4. Customer cannot access staff-only kitchen data.
5. Staff can access /kitchen.
6. External redirect destinations are rejected.
7. Expired or invalid sessions are rejected.
8. Logout invalidates the session.

## Production Follow-up

- Add rate limiting to sign-in.
- Add CSRF and origin checks for sensitive mutations.
- Add password reset and account recovery.
- Configure database backups, TLS and migrations.
- Add automated authorization tests.
- Never deploy with shared demo credentials.
