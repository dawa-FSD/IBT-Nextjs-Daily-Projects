"use client";

import { useState } from "react";

export default function FormEventDemo() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`Welcome, ${name.trim()}! The page did not reload.`);
  }

  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Exercise 01</span>
          <h1>Form event demo</h1>
          <p>Type a name and submit with the button or by pressing Enter.</p>
        </header>
        <section className="panel" style={{ maxWidth: 600 }}>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="demo-name">Your name</label>
              <input
                id="demo-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                placeholder="e.g. Dawa"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit greeting
            </button>
          </form>
          <p className="result" role="status" aria-live="polite">
            {message}
          </p>
        </section>
        <p className="muted">
          Key idea: onChange updates state, onSubmit handles submission, and
          preventDefault stops normal browser navigation.
        </p>
      </div>
    </main>
  );
}
