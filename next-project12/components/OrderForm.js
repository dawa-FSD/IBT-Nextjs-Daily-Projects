"use client";

import { useState } from "react";

function saveDemoOrder(order) {
  // Simulates a network request. Replace with a secure server endpoint in a real app.
  return new Promise((resolve) => {
    window.setTimeout(
      () =>
        resolve({
          ...order,
          status: "received",
          reference: `DEMO-${Date.now().toString().slice(-6)}`,
        }),
      1500,
    );
  });
}

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending) return;
    const cleanPhone = phone.replace(/[\s-]/g, "");
    if (!/^\+?[0-9]{9,15}$/.test(cleanPhone)) {
      setError(
        "Enter a valid phone number using 9–15 digits (an optional + is allowed).",
      );
      setMessage("");
      return;
    }
    setPending(true);
    setError("");
    setMessage("");
    try {
      const result = await saveDemoOrder({
        name: name.trim(),
        phone: cleanPhone,
        area: area.trim(),
      });
      setMessage(
        `Demo order received. Reference: ${result.reference}. No payment was taken.`,
      );
      setName("");
      setPhone("");
      setArea("");
    } catch {
      setError("We could not process this demo request. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="panel"
      onSubmit={handleSubmit}
      aria-describedby="checkout-help"
    >
      <p id="checkout-help" className="muted">
        This is a learning simulation. It does not save an order to a database
        or initiate TeleBirr payment.
      </p>
      <div className="field">
        <label htmlFor="customer-name">Full name</label>
        <input
          id="customer-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          disabled={pending}
          placeholder="Enter your full name"
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          disabled={pending}
          placeholder="+251 9..."
          aria-describedby="phone-help"
        />
        <small id="phone-help">
          Use 9–15 digits; spaces and hyphens are allowed.
        </small>
      </div>
      <div className="field">
        <label htmlFor="area">Delivery area</label>
        <input
          id="area"
          name="area"
          autoComplete="address-level2"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          required
          disabled={pending}
          placeholder="e.g. Bole, Addis Ababa"
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Processing demo order…" : "Place demo order"}
      </button>
      <p className="result" role="status" aria-live="polite">
        {message}
      </p>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
