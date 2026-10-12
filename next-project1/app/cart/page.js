import Link from "next/link";

export default function CartPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="empty-state">
          <h1>Your Cart 🛒</h1>

          <p>Your cart is currently empty.</p>

          <Link href="/menu" className="button">
            Continue Shopping
          </Link>

          <br />
          <br />

          <Link href="/checkout" className="button secondary">
            Go to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
