"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function OrderSuccessPage() {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    try {
      const id = new URLSearchParams(window.location.search).get("id");
      const last = JSON.parse(
        localStorage.getItem("addis-eats-last-order") || "null",
      );
      if (last && last.id === id) setOrder(last);
    } catch {}
  }, []);
  return (
    <section className="container section">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <span className="eyebrow">Order created</span>
        <h1>Thank you for choosing Addis Eats.</h1>
        <p>
          This is a local demo confirmation. It does not represent a paid order
          or real delivery booking.
        </p>
        {order && (
          <div className="success-details">
            <div>
              <span>Order reference</span>
              <strong>{order.id}</strong>
            </div>
            <div>
              <span>Order status</span>
              <strong>{order.status}</strong>
            </div>
            <div>
              <span>Order total</span>
              <strong>{order.total.toLocaleString("en-ET")} ETB</strong>
            </div>
            <div>
              <span>Delivery area</span>
              <strong>{order.area}</strong>
            </div>
          </div>
        )}
        <div className="hero-actions centered">
          <Link className="button button-gold" href="/menu">
            Order again
          </Link>
          <Link className="button button-outline" href="/">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
