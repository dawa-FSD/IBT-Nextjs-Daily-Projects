import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">ADDIS ABABA • FOOD DELIVERY</span>

        <h1>Delicious food, delivered your way.</h1>

        <p>
          Discover Ethiopian favorites and popular dishes from Addis Eats.
          Choose your meal and enjoy a simple ordering experience.
        </p>

        <div className="hero-actions">
          <Link href="/menu" className="btn btn-primary">
            Explore Menu
          </Link>

          <Link href="/checkout" className="btn btn-secondary">
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
