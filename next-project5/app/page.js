import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge">Authentic Ethiopian Food</span>

          <h1>
            Taste the heart of
            <span> Addis Ababa</span>
          </h1>

          <p>
            Discover delicious Ethiopian dishes prepared with authentic
            ingredients and traditional flavors.
          </p>

          <div className="hero-actions">
            <Link href="/menu" className="btn btn-primary">
              Explore Menu
            </Link>

            <Link href="/checkout" className="btn btn-secondary">
              Order Now
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="food-icon">🍛</div>
          <h2>Fresh & Delicious</h2>
          <p>Traditional Ethiopian meals prepared fresh for you.</p>
        </div>
      </div>
    </section>
  );
}
