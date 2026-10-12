# Addis Eats

A full-stack Next.js food ordering application built as part of the IBT College Canada Full Stack Software Development program.

The project demonstrates Next.js App Router API routes, Server Actions, shared Zod validation, authentication checks, authorization, cache revalidation, and client-side pending states.

## Features

- Ethiopian food menu
- Dynamic dish API
- Single dish API
- Order creation API
- Shared Zod validation
- Server Action order submission
- `useActionState` pending state
- Cache revalidation with `revalidatePath`
- Session-based authentication
- Server-side order ownership authorization
- Protected order cancellation
- Environment variable protection
- Professional responsive UI

## Project Structure

```text
app/
├── actions.js
├── api/
│   ├── dishes/
│   │   ├── route.js
│   │   └── [id]/
│   │       └── route.js
│   └── orders/
│       └── route.js
├── checkout/
│   ├── CheckoutForm.js
│   └── page.js
├── menu/
│   └── page.js
├── globals.css
├── layout.js
└── page.js

components/
└── Header.js

data/
├── dishes.js
└── orders.js

lib/
├── auth.js
└── schema.js
```
