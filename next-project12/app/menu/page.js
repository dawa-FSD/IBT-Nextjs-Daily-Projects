"use client";

import { useState } from "react";

const dishes = [
  {
    id: 1,
    emoji: "🍲",
    name: "Doro Wat",
    description: "Traditional chicken stew served with injera.",
    price: 450,
  },
  {
    id: 2,
    emoji: "🥣",
    name: "Shiro",
    description: "Smooth chickpea stew with a rich berbere flavour.",
    price: 180,
  },
  {
    id: 3,
    emoji: "🥩",
    name: "Tibs",
    description: "Sautéed beef, onion, and pepper.",
    price: 380,
  },
  {
    id: 4,
    emoji: "🥩",
    name: "Kitfo",
    description: "A classic Ethiopian minced beef speciality.",
    price: 520,
  },
  {
    id: 5,
    emoji: "🥞",
    name: "Chechebsa",
    description: "Torn flatbread tossed with spiced butter.",
    price: 220,
  },
  {
    id: 6,
    emoji: "🍕",
    name: "Special Pizza",
    description: "A generous shareable favourite.",
    price: 550,
  },
];

export default function MenuPage() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  function addToCart(dish) {
    setCart((previous) => {
      const found = previous.find((item) => item.id === dish.id);
      if (found)
        return previous.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      return [...previous, { ...dish, quantity: 1 }];
    });
    setMessage(`${dish.name} added to this demo cart.`);
  }

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Freshly prepared</span>
          <h1>Our menu</h1>
          <p>
            Choose a dish and use the Add button to practise React click events
            and state updates. This cart is temporary and resets when this page
            is refreshed.
          </p>
        </header>
        <div className="notice" role="status" aria-live="polite">
          {message ||
            "Tip: buttons work with a mouse, touch screen, Enter, and Space."}
        </div>
        <div className="section-head" style={{ marginTop: 24 }}>
          <h2>Popular Ethiopian dishes</h2>
          <span className="pill">{itemCount} item(s) selected</span>
        </div>
        <div className="grid">
          {dishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className="dish-emoji" aria-hidden="true">
                {dish.emoji}
              </div>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <div className="price-row">
                <span className="price">{dish.price} ETB</span>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => addToCart(dish)}
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
        <section
          className="panel"
          style={{ marginTop: 24 }}
          aria-labelledby="cart-summary-heading"
        >
          <h2 id="cart-summary-heading">Demo cart summary</h2>
          {cart.length === 0 ? (
            <p className="muted">Your cart is empty. Add a dish to begin.</p>
          ) : (
            <ul className="list-clean">
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} × {item.quantity} — {item.price * item.quantity}{" "}
                  ETB
                </li>
              ))}
            </ul>
          )}
          <div className="price-row">
            <strong>Estimated total</strong>
            <strong className="price">{total} ETB</strong>
          </div>
          <div className="actions">
            <a className="btn btn-primary" href="/checkout">
              Continue to checkout demo
            </a>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => {
                setCart([]);
                setMessage("Demo cart cleared.");
              }}
            >
              Clear cart
            </button>
          </div>
          <p className="muted">
            Educational demo only: cart data is held in React state, not saved
            to a database or shared between routes.
          </p>
        </section>
      </div>
    </main>
  );
}
