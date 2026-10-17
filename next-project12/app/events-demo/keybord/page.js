"use client";

import { useState } from "react";

export default function KeyboardDemo() {
  const [message, setMessage] = useState(
    "Focus the field and press Enter, Escape, or ArrowDown.",
  );
  function handleKeyDown(event) {
    if (event.key === "Escape") setMessage("Escape was pressed.");
    else if (event.key === "Enter") setMessage("Enter was pressed.");
    else if (event.key === "ArrowDown") setMessage("ArrowDown was pressed.");
    else setMessage(`You pressed: ${event.key}`);
  }
  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Exercise 04</span>
          <h1>Keyboard events</h1>
          <p>Focus the input and press a key.</p>
        </header>
        <section className="panel" style={{ maxWidth: 600 }}>
          <div className="field">
            <label htmlFor="key-input">Keyboard test field</label>
            <input
              id="key-input"
              onKeyDown={handleKeyDown}
              placeholder="Press a key…"
            />
          </div>
          <p className="result" role="status" aria-live="polite">
            {message}
          </p>
        </section>
      </div>
    </main>
  );
}
