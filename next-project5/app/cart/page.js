import Cart from "./Cart";

export default function CartPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <span className="badge">Your Order</span>
          <h1>Shopping Cart</h1>
          <p>Review your selected dishes before checkout.</p>
        </div>

        <Cart />
      </div>
    </section>
  );
}
