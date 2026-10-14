import Link from "next/link";

export default function HomePage() {
  return (
    <section className="container hero">
      <div className="hero-content">
        <span className="badge">Welcome to Addis Eats</span>

        <h1>Delicious Food, Delivered to Your Door</h1>

        <p>
          Discover authentic Ethiopian dishes and international favorites from
          Addis Eats.
        </p>

        <div className="hero-actions">
          <Link href="/menu" className="primary-button">
            Explore Menu
          </Link>

          <Link href="/checkout" className="secondary-button">
            Go to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
