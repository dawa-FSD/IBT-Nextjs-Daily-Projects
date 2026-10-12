import Link from "next/link";

export const metadata = {
  title: "Shopping Cart | Addis Eats",
  description: "Review your Addis Eats order before checkout.",
};

export default function CartPage() {
  return (
    <main className="cart-page">
      <section className="cart-card">
        <div className="cart-icon" aria-hidden="true">
          🛒
        </div>

        <h1>Your Shopping Cart</h1>
        <p className="cart-description">
          Your selected Ethiopian dishes will appear here.
        </p>

        <Link href="/menu" className="cart-button">
          Explore Our Menu
        </Link>
      </section>
    </main>
  );
}
