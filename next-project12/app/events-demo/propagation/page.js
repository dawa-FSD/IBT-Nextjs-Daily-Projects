"use client";

import { useState } from "react";

export default function PropagationDemo() {
  const [message, setMessage] = useState("Choose an action.");
  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Exercise 02</span>
          <h1>Event propagation</h1>
          <p>Click the outer card area, then click the inner button.</p>
        </header>
        <section
          className="panel"
          style={{ maxWidth: 600 }}
          onClick={() => setMessage("Parent card click handler ran.")}
        >
          <h2>Doro Wat</h2>
          <p className="muted">
            Clicking this card background runs the parent handler.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setMessage("Add button ran. The parent handler did not run.");
            }}
          >
            Add to demo cart
          </button>
          <p className="result" role="status" aria-live="polite">
            {message}
          </p>
        </section>
        <p className="muted">
          Key idea: stopPropagation stops this event from bubbling to the
          parent. Real production interfaces should prefer separate semantic
          buttons and links over making a whole div clickable.
        </p>
      </div>
    </main>
  );
}
