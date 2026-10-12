"use client";

import { useActionState } from "react";

import { placeOrder } from "../actions";

const initialState = {
  status: null,
  message: "",
  fieldErrors: {},
  orderId: null,
};

export default function CheckoutForm({ dishId }) {
  const [state, formAction, pending] = useActionState(placeOrder, initialState);

  return (
    <form action={formAction} className="checkout-form">
      <input type="hidden" name="dishId" value={dishId} />

      <div className="form-field">
        <label htmlFor="customerName">Full name</label>

        <input
          id="customerName"
          name="customerName"
          type="text"
          placeholder="Your full name"
          aria-invalid={Boolean(state.fieldErrors?.customerName?.length)}
        />

        {state.fieldErrors?.customerName?.map((error) => (
          <span className="field-error" key={error}>
            {error}
          </span>
        ))}
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone number</label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+251 9..."
          aria-invalid={Boolean(state.fieldErrors?.phone?.length)}
        />

        {state.fieldErrors?.phone?.map((error) => (
          <span className="field-error" key={error}>
            {error}
          </span>
        ))}
      </div>

      <div className="form-field">
        <label htmlFor="area">Delivery area</label>

        <input
          id="area"
          name="area"
          type="text"
          placeholder="Bole, Addis Ababa"
          aria-invalid={Boolean(state.fieldErrors?.area?.length)}
        />

        {state.fieldErrors?.area?.map((error) => (
          <span className="field-error" key={error}>
            {error}
          </span>
        ))}
      </div>

      <div className="form-field">
        <label htmlFor="quantity">Quantity</label>

        <input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          max="20"
          defaultValue="1"
          aria-invalid={Boolean(state.fieldErrors?.quantity?.length)}
        />

        {state.fieldErrors?.quantity?.map((error) => (
          <span className="field-error" key={error}>
            {error}
          </span>
        ))}
      </div>

      {state.message && (
        <div
          className={
            state.status >= 400 ? "form-message error" : "form-message success"
          }
          role="alert"
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        className="button button-primary"
        disabled={pending}
      >
        {pending ? "Placing order..." : "Place Order"}
      </button>
    </form>
  );
}
