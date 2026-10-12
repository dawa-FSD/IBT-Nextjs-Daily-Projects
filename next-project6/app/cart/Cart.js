"use client";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { dishes } from "@/lib/dishes";
export default function Cart() {
  const { data, error, isLoading, mutate } = useSWR("/api/cart", fetcher);
  async function addDish(dish) {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: dish.id }),
    });
    if (!response.ok) throw new Error("Could not add item");
    await mutate();
  }
  async function clearCart() {
    const response = await fetch("/api/cart", { method: "DELETE" });
    if (!response.ok) throw new Error("Could not clear cart");
    await mutate();
  }
  return (
    <section>
      <div className="panel">
        <h2>Add a dish</h2>
        <div className="inline-form">
          {dishes.slice(0, 3).map((dish) => (
            <button
              className="button-secondary"
              key={dish.id}
              type="button"
              onClick={() =>
                addDish(dish).catch(() =>
                  window.alert("Could not add dish. Please try again."),
                )
              }
            >
              + {dish.name}
            </button>
          ))}
        </div>
        <p className="muted small" style={{ marginTop: 12 }}>
          Demo note: cart storage is in memory and is not production
          persistence.
        </p>
      </div>
      {isLoading && <p className="muted">Loading cart…</p>}
      {error && <p className="error">Could not load the cart.</p>}
      {data && (
        <div className="panel" style={{ marginTop: 18 }}>
          <div className="section-heading">
            <div>
              <h2>Cart items</h2>
              <p>
                {data.length} item{data.length === 1 ? "" : "s"}
              </p>
            </div>
            {data.length > 0 && (
              <button
                className="button-secondary"
                type="button"
                onClick={() =>
                  clearCart().catch(() => window.alert("Could not clear cart."))
                }
              >
                Clear cart
              </button>
            )}
          </div>
          {data.length === 0 ? (
            <div className="empty">
              Your cart is empty. Add a dish above to begin.
            </div>
          ) : (
            <>
              {data.map((dish, index) => (
                <div
                  className="dish-top"
                  key={`${dish.id}-${index}`}
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span>{dish.name}</span>
                  <strong>{dish.price.toLocaleString("en-ET")} ETB</strong>
                </div>
              ))}
              <h2 style={{ textAlign: "right", marginTop: 20 }}>
                Total:{" "}
                {data
                  .reduce((sum, dish) => sum + dish.price, 0)
                  .toLocaleString("en-ET")}{" "}
                ETB
              </h2>
            </>
          )}
        </div>
      )}
    </section>
  );
}
