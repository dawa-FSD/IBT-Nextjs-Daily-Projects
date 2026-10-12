import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">AUTHENTIC ETHIOPIAN FLAVORS</span>

          <h1>
            Taste the heart
            <span> of Addis.</span>
          </h1>

          <p>
            Discover traditional Ethiopian dishes prepared with authentic
            flavors and delivered with a modern Addis Eats experience.
          </p>

          <div className="hero-actions">
            <Link href="/menu" className="button button-primary">
              Explore Menu
            </Link>

            <Link href="/checkout" className="button button-outline">
              Checkout
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>100%</strong>
              <span>Local Flavors</span>
            </div>

            <div>
              <strong>Fast</strong>
              <span>Easy Ordering</span>
            </div>

            <div>
              <strong>ETB</strong>
              <span>Simple Pricing</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <span>ADDIS EATS</span>
            <h2>Made with tradition.</h2>
            <p>Served with a modern touch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
