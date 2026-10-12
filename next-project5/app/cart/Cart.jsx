"use client";

import { useState } from "react";
import Link from "next/link";

const initialCart = [
  {
    id: 1,
    name: "Doro Wat",
    price: 350,
    quantity: 1,
  },
  {
    id: 2,
    name: "Tibs",
    price: 450,
    quantity: 1,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-state">
        <h2>Your cart is empty</h2>

        <p>Add some delicious dishes from our menu.</p>

        <Link href="/menu" className="btn btn-primary">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((item) => (
          <article key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>

              <p>{item.price} ETB each</p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.id)}>−</button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <strong>{item.price * item.quantity} ETB</strong>
          </article>
        ))}
      </div>

      <aside className="cart-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{total} ETB</strong>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <strong>50 ETB</strong>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <strong>{total + 50} ETB</strong>
        </div>

        <Link href="/checkout" className="btn btn-primary btn-full">
          Proceed to Checkout
        </Link>
      </aside>
    </div>
  );
}
