import CheckoutForm from "./CheckoutForm";

export default function CheckoutPage() {
  return (
    <section className="page-section">
      <div className="container checkout-container">
        <div className="section-heading">
          <span className="badge">Final Step</span>
          <h1>Checkout</h1>
          <p>Enter your delivery information to place your order.</p>
        </div>

        <CheckoutForm />
      </div>
    </section>
  );
}
