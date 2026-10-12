"use client";

export default function MenuError({ reset }) {
  return (
    <div className="error-container">
      <h2>Unable to load the menu</h2>

      <p>Something went wrong while loading the dishes.</p>

      <button onClick={() => reset()} className="btn btn-primary">
        Try Again
      </button>
    </div>
  );
}
