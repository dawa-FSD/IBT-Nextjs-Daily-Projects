"use client";
import { useMemo, useState } from "react";
import DishCard from "@/components/DishCard";
export default function SearchBox({ dishes }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dishes.filter((d) =>
      `${d.name} ${d.description}`.toLowerCase().includes(q),
    );
  }, [dishes, query]);
  return (
    <>
      <div className="search-row">
        <label className="search-input">
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes or ingredients…"
            aria-label="Search menu"
          />
          <kbd>⌘ K</kbd>
        </label>
        <span className="results-count">{filtered.length} dishes</span>
      </div>
      {filtered.length ? (
        <div className="dish-grid">
          {filtered.map((d) => (
            <DishCard key={d.id} dish={d} />
          ))}
        </div>
      ) : (
        <div className="empty-state compact">
          <span>🔎</span>
          <h2>No dishes found</h2>
          <p>Try another dish name or ingredient.</p>
        </div>
      )}
    </>
  );
}
