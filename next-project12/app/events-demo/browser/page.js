"use client";

import { useEffect, useState } from "react";

export default function BrowserDemoPage() {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Exercise 05</span>
          <h1>Browser width</h1>
          <p>Resize the browser to see the value update.</p>
        </header>
        <section className="panel" style={{ maxWidth: 600 }}>
          <p className="counter">
            {width === null ? "Reading…" : `${width}px`}
          </p>
          <p className="muted">
            The resize listener is added in useEffect and removed in the cleanup
            function.
          </p>
        </section>
      </div>
    </main>
  );
}
