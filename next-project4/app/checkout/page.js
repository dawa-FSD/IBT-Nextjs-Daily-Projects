import CheckoutForm from "./CheckoutForm";

export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <section className="container checkout">
      <div className="checkout-card">
        <span className="section-label">ORDER</span>

        <h1>Checkout</h1>

        <p>
          Complete your delivery information and place your Addis Eats order.
        </p>

        <CheckoutForm dishId="doro-wat" />
      </div>
    </section>
  );
}
