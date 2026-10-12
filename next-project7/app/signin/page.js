import { Suspense } from "react";

export default function SignInPage({ searchParams }) {
  return (
    <Suspense fallback={<p>Loading sign-in page...</p>}>
      <SignInContent searchParams={searchParams} />
    </Suspense>
  );
}

async function SignInContent({ searchParams }) {
  const params = await searchParams;
  const next = typeof params?.next === "string" ? params.next : "/";

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Sign In</h1>
        <p>Welcome back to Addis Eats.</p>

        <form action="/api/auth/signin" method="GET">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <input type="hidden" name="next" value={next} />

          <button type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
}
