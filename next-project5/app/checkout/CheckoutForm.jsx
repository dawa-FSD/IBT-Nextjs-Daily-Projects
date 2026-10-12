"use client";

import { useActionState } from "react";
import { placeOrder } from "../actions";

const initialState = {
  success: false,
  message: "",
};

export default function CheckoutForm() {
  const [state, formAction, pending] = useActionState(placeOrder, initialState);

  return (
    <form action={formAction} className="checkout-form">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="09xxxxxxxx"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Delivery Address</label>

        <textarea
          id="address"
          name="address"
          rows="4"
          placeholder="Enter your delivery address"
          required
        ></textarea>
      </div>

      {state.message && (
        <div
          className={
            state.success ? "form-message success" : "form-message error"
          }
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={pending}
      >
        {pending ? "Placing Order..." : "Place Order"}
      </button>
    </form>
  );
}
