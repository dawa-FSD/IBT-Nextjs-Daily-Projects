"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useDebounce } from "./useDebounce";

export default function SearchBox({ initialData }) {
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const debouncedTerm = useDebounce(term, 300);
  const query = debouncedTerm.trim();
  const key = `/api/dishes?q=${encodeURIComponent(query)}&page=${page}`;
  const { data, error, isLoading, isValidating } = useSWR(key, fetcher, {
    fallbackData:
      !query && page === 1
        ? {
            data: initialData,
            page: 1,
            limit: 3,
            total: initialData.length,
            totalPages: Math.max(1, Math.ceil(initialData.length / 3)),
          }
        : undefined,
    keepPreviousData: true,
  });
  useEffect(() => {
    setPage(1);
  }, [query]);
  useEffect(() => {
    window.history.replaceState(
      null,
      "",
      `/menu${page > 1 ? `?page=${page}` : ""}${query ? `${page > 1 ? "&" : "?"}q=${encodeURIComponent(query)}` : ""}`,
    );
  }, [page, query]);

  const pageData = data?.data || [];
  return (
    <section>
      <div className="search-panel">
        <label className="search-label" htmlFor="dish-search">
          Search dishes
        </label>
        <input
          className="search-input"
          id="dish-search"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder="Try tibs, kitfo, shiro..."
        />
        <p className="muted small" style={{ marginTop: 9, marginBottom: 0 }}>
          Search waits 300 ms after typing to reduce unnecessary requests.{" "}
          {isValidating ? "Updating results…" : ""}
        </p>
      </div>
      {error && (
        <p className="error" role="alert">
          Could not load dishes. Check your connection and try again.
        </p>
      )}
      {isLoading && !data && (
        <p className="muted" role="status">
          Loading menu…
        </p>
      )}
      {!error && data && pageData.length === 0 && (
        <div className="empty">
          <h2>No dishes found</h2>
          <p>Try another dish name or category.</p>
        </div>
      )}
      {pageData.length > 0 && (
        <div className="cards">
          {pageData.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className="dish-top">
                <span className="dish-icon" aria-hidden="true">
                  🍽️
                </span>
                <span className="pill">{dish.category}</span>
              </div>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <div className="price">
                {dish.price.toLocaleString("en-ET")} ETB
              </div>
            </article>
          ))}
        </div>
      )}
      {data && data.total > 0 && (
        <div className="pagination">
          <button
            className="button-secondary"
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
          >
            ← Previous
          </button>
          <span className="muted">
            Page {data.page} of {data.totalPages} · {data.total} result
            {data.total === 1 ? "" : "s"}
          </span>
          <button
            className="button-secondary"
            type="button"
            onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
            disabled={page >= data.totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
