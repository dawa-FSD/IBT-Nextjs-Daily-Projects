"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Exercise 03</span>
          <h1>Click counter</h1>
          <p>Use the button to update state.</p>
        </header>
        <section className="panel" style={{ maxWidth: 500 }}>
          <p className="counter" aria-live="polite">
            {count}
          </p>
          <div className="actions">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setCount((previous) => previous + 1)}
            >
              Increase
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setCount((previous) => Math.max(0, previous - 1))}
            >
              Decrease
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </section>
        <p className="muted">
          Key idea: setCount(previous =&gt; previous + 1) calculates the next
          state from the latest value.
        </p>
      </div>
    </main>
  );
}
