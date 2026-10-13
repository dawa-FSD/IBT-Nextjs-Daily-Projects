"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
export default function CheckoutPage() {
  const { items, subtotal, clearCart, ready } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    instructions: "",
  });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || form.name.trim().length < 2) {
      setError("Please enter your full name (at least 2 characters).");
      return;
    }
    if (!/^09\d{8}$/.test(form.phone.trim())) {
      setError(
        "Enter a valid Ethiopian mobile number, for example 0912345678.",
      );
      return;
    }
    if (!form.area.trim()) {
      setError("Please enter your delivery area.");
      return;
    }
    if (!items.length) {
      setError("Your cart is empty. Add a dish before checkout.");
      return;
    }
    setBusy(true);
    const order = {
      id: `AE-${Date.now().toString().slice(-8)}`,
      customerName: form.name.trim(),
      phone: form.phone.trim(),
      area: form.area.trim(),
      instructions: form.instructions.trim(),
      items,
      total: subtotal,
      status: "Received",
      createdAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem("addis-eats-orders") || "[]",
      );
      localStorage.setItem(
        "addis-eats-orders",
        JSON.stringify([order, ...existing]),
      );
      localStorage.setItem("addis-eats-last-order", JSON.stringify(order));
      clearCart();
      router.push(`/order-success?id=${encodeURIComponent(order.id)}`);
    } catch {
      setError(
        "We could not save your demo order. Check your browser storage and try again.",
      );
      setBusy(false);
    }
  }
  if (!ready)
    return <section className="container section">Loading checkout…</section>;
  if (!items.length)
    return (
      <section className="container section">
        <div className="empty-state">
          <span>🛒</span>
          <h2>Your cart is empty</h2>
          <p>Add a dish before checking out.</p>
          <Link className="button button-gold" href="/menu">
            Browse menu
          </Link>
        </div>
      </section>
    );
  return (
    <section className="container section">
      <div className="page-heading align-left">
        <span className="eyebrow">Almost at the table</span>
        <h1>Checkout</h1>
        <p>Enter your delivery details to create a demo order.</p>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={submit} noValidate>
          <h2>Delivery details</h2>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <label>
            Full name
            <input
              name="name"
              value={form.name}
              onChange={change}
              placeholder="Your full name"
              autoComplete="name"
              required
              minLength={2}
            />
          </label>
          <label>
            Mobile number
            <input
              name="phone"
              value={form.phone}
              onChange={change}
              placeholder="0912345678"
              inputMode="tel"
              autoComplete="tel"
              required
              pattern="09[0-9]{8}"
            />
          </label>
          <label>
            Delivery area
            <input
              name="area"
              value={form.area}
              onChange={change}
              placeholder="e.g. Bole, Addis Ababa"
              autoComplete="street-address"
              required
            />
          </label>
          <label>
            Delivery instructions <span className="muted">(optional)</span>
            <textarea
              name="instructions"
              value={form.instructions}
              onChange={change}
              placeholder="Landmark or extra instructions"
              rows={3}
            />
          </label>
          <p className="demo-note">
            Demo checkout only — no payment is collected and no real delivery is
            scheduled.
          </p>
          <button
            className="button button-gold button-full"
            type="submit"
            disabled={busy}
          >
            {busy
              ? "Creating order…"
              : `Place demo order · ${subtotal.toLocaleString("en-ET")} ETB`}
          </button>
        </form>
        <aside className="summary-card">
          <h2>Your order</h2>
          {items.map((item) => (
            <div className="summary-line" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>
                {(item.price * item.quantity).toLocaleString("en-ET")} ETB
              </strong>
            </div>
          ))}
          <div className="summary-total">
            <span>Total</span>
            <strong>{subtotal.toLocaleString("en-ET")} ETB</strong>
          </div>
          <Link className="continue-link" href="/cart">
            ← Back to cart
          </Link>
        </aside>
      </div>
    </section>
  );
}
