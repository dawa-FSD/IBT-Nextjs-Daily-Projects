# Addis Eats — Day 48

**Course:** CodeOps Full Stack Software Development  
**Module:** Module 3 — Frontend: React & Next.js  
**Topic:** Event Handling, Accessibility, Checkout Interaction, Production Preparation, and Deployment  
**Framework:** Next.js App Router  
**Language:** JavaScript  
**Project type:** Educational demo

## 1. Project overview

Addis Eats is a small Ethiopian food-ordering demonstration built to practise React events and prepare a Next.js application for deployment. It includes a home page, menu interactions, a checkout form with a simulated request, and six event demonstrations.

> **Important:** This is not a production ordering/payment system. The cart exists only in React state on the menu page. The checkout uses a simulated 1.5-second request. It does not create a database order or charge a payment method.

## 2. Learning objectives

- Explain React event handlers and the event object.
- Use `onClick`, `onChange`, `onSubmit`, and `onKeyDown`.
- Distinguish `preventDefault()` from `stopPropagation()`.
- Update React state using a functional updater.
- Build keyboard-friendly, touch-friendly controls with accessible labels and status messages.
- Implement a pending state and basic client-side phone validation.
- Understand browser-only APIs and `useEffect` cleanup.
- Run a production build and prepare environment variables.
- Connect a Git repository to Vercel and verify a deployment.

## 3. Features and routes

| Route                      | Purpose                                                    |
| -------------------------- | ---------------------------------------------------------- |
| `/`                        | Project landing page                                       |
| `/menu`                    | Menu cards and interactive demo cart                       |
| `/checkout`                | Accessible checkout form and simulated pending state       |
| `/events-demo`             | Exercise directory                                         |
| `/events-demo/form`        | Controlled input, `onChange`, `onSubmit`, `preventDefault` |
| `/events-demo/propagation` | Parent/child click and `stopPropagation`                   |
| `/events-demo/counter`     | Functional state updates                                   |
| `/events-demo/keyboard`    | Keyboard event demo                                        |
| `/events-demo/browser`     | Window width and effect cleanup                            |
| `/events-demo/config`      | Public environment variable demo                           |

## 4. Requirements

- Node.js compatible with the installed Next.js version
- npm
- VS Code or another code editor
- Git and a GitHub account for deployment
- A Vercel account for hosting

## 5. Run locally

From the project root:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 6. Test the application

1. Open `/menu` and add one or more dishes.
2. Verify that the count and estimated total update.
3. Clear the demo cart and verify the summary resets.
4. Open `/checkout`; submit an invalid phone number and check the error.
5. Submit valid sample data and verify the loading label appears before the demo reference.
6. Open `/events-demo/form`; submit with the button and with Enter.
7. Open `/events-demo/propagation`; click the parent card and then the inner button.
8. Open `/events-demo/counter`; increase, decrease, and reset.
9. Open `/events-demo/keyboard`; press Enter, Escape, and ArrowDown.
10. Open `/events-demo/browser`; resize the browser and observe the width.
11. Navigate the app using Tab, Enter, and Space; confirm focus is visible.
12. Test a narrow viewport or a real phone.

## 7. Production preparation

Copy `.env.example` to `.env.local` for local configuration, then set the correct public URL. Do not commit `.env.local` or any real credentials.

```bash
npm run build
npm run start
```

The production server requires a successful build. Open `http://localhost:3000` and repeat the core route and form tests.

### Environment variable security

- `NEXT_PUBLIC_SITE_URL` is public and may be included in browser output.
- Database URLs, session secrets, and payment secrets must remain server-only.
- Configure environment variables separately in Vercel for Development, Preview, and Production.
- A real application must validate data on the server. Disabling a button on the client is not enough to guarantee one order per request; implement server-side idempotency or equivalent database-backed protection.

## 8. GitHub workflow

For an existing repository, first inspect the branch and status:

```bash
git status
git branch
git remote -v
```

Then stage and commit the intended files:

```bash
git add .
git commit -m "Complete Day 48 event handling assignment"
git push
```

If `git push` is rejected, do not force-push blindly. Inspect the remote changes and reconcile them with the local branch first.

## 9. Deploy to Vercel

1. Push the project to GitHub.
2. Sign in at [Vercel](https://vercel.com/).
3. Import the correct GitHub repository.
4. Confirm the project root and Next.js framework detection.
5. Add required environment variables in the Vercel project settings.
6. Deploy and inspect the build logs.
7. Open the deployed URL and test all important routes.
8. Test the preview deployment before merging production changes.

Official deployment guide: https://vercel.com/docs/deployments/overview

## 10. Accessibility checklist

- [ ] Every interactive control is reachable using Tab.
- [ ] Buttons work using Enter or Space.
- [ ] Forms can be submitted with Enter.
- [ ] Inputs have visible labels.
- [ ] Keyboard focus is visible.
- [ ] Status and error messages are announced appropriately.
- [ ] Important actions are not available only on hover.
- [ ] Interactive targets are comfortably sized on touch devices.
- [ ] The layout works at mobile widths.
- [ ] Reduced-motion preferences are respected.

## 11. Reflection questions

1. What is an event handler in React?
2. What is the difference between `event.target` and `event.currentTarget`?
3. Why do we use `event.preventDefault()` in a React form?
4. How is `stopPropagation()` different from `preventDefault()`?
5. Why is `setCount(previous => previous + 1)` useful?
6. Why should browser-only APIs be accessed in client-side code?
7. Why does a disabled submit button not guarantee that an order is created only once?
8. What is the difference between `npm run dev`, `npm run build`, and `npm run start`?
9. Why must secrets not be committed to GitHub?
10. What checks should be completed after deployment?

## 12. Conclusion

This assignment demonstrates the main Day 48 concepts using a coherent Next.js application. It provides practical examples of event handling, accessibility, simulated checkout interactions, production build preparation, environment variable safety, GitHub workflow, and Vercel deployment. The next production step would be adding a server API, persistent database-backed cart and orders, server-side validation, secure authentication if needed, and a real payment-provider integration.
