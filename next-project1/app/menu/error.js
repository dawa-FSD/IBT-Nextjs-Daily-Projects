"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Menu error:", error);
  }, [error]);

  return (
    <div className="status">
      <div className="status-box">
        <h1>Something went wrong! 😕</h1>

        <p>We could not load the menu. Please try again.</p>

        <button className="button" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
