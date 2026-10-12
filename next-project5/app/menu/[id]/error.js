"use client";

export default function DishError({ reset }) {
  return (
    <div className="error-container">
      <h2>Unable to load dish</h2>

      <button onClick={() => reset()} className="btn btn-primary">
        Try Again
      </button>
    </div>
  );
}
