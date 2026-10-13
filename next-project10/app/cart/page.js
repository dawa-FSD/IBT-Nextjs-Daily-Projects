"use client";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, ready } = useCart();
  if (!ready)
    return (
      <section className="container section">
        <p>Loading your cart…</p>
      </section>
    );
  return (
    <section className="container section">
      <div className="page-heading align-left">
        <span className="eyebrow">Your selections</span>
        <h1>Your cart</h1>
        <p>Review your order before checkout.</p>
      </div>
      {items.length === 0 ? (
        <div className="empty-state">
          <span>🛍️</span>
          <h2>Your cart is waiting</h2>
          <p>Add something delicious from our menu.</p>
          <Link className="button button-gold" href="/menu">
            Browse menu
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className={`mini-art ${item.tone}`}>{item.emoji}</div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price.toLocaleString("en-ET")} ETB each</p>
                  <div className="quantity-control">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-item-end">
                  <strong>
                    {(item.price * item.quantity).toLocaleString("en-ET")} ETB
                  </strong>
                  <button
                    className="remove-link"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
          <aside className="summary-card">
            <h2>Order summary</h2>
            <div className="summary-line">
              <span>Subtotal</span>
              <strong>{subtotal.toLocaleString("en-ET")} ETB</strong>
            </div>
            <div className="summary-line">
              <span>Delivery</span>
              <span>Confirmed at checkout</span>
            </div>
            <div className="summary-total">
              <span>Estimated total</span>
              <strong>{subtotal.toLocaleString("en-ET")} ETB</strong>
            </div>
            <Link className="button button-gold button-full" href="/checkout">
              Continue to checkout →
            </Link>
            <Link className="continue-link" href="/menu">
              ← Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
