"use client";

export default function GlobalError({ error, reset }) {
  return (
    <div className="error-container">
      <h1>Something went wrong</h1>

      <p>We could not load this page. Please try again.</p>

      <button onClick={() => reset()} className="btn btn-primary">
        Try Again
      </button>
    </div>
  );
}
