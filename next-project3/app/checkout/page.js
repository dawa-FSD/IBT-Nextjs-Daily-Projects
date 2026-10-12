export const dynamic = "force-dynamic";

// Authentication/session read requires request-time rendering.

export default function CheckoutPage() {
  return (
    <section className="container checkout">
      <div className="checkout-card">
        <span className="section-label">ORDER</span>

        <h1>Checkout</h1>

        <p>
          Review your delivery information and complete your Addis Eats order.
        </p>

        <div className="checkout-form">
          <label>
            Full name
            <input type="text" placeholder="Your full name" />
          </label>

          <label>
            Phone number
            <input type="tel" placeholder="+251..." />
          </label>

          <label>
            Delivery area
            <input type="text" placeholder="Addis Ababa" />
          </label>

          <button className="button button-primary">Place Order</button>
        </div>
      </div>
    </section>
  );
}
