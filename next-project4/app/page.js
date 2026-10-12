import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="section-label">WELCOME TO ADDIS EATS</span>

            <h1>
              Authentic Ethiopian
              <span> Flavors.</span>
            </h1>

            <p>
              Discover delicious Ethiopian dishes prepared with traditional
              flavors and delivered with a modern Addis Eats experience.
            </p>

            <div className="hero-actions">
              <Link href="/menu" className="button button-primary">
                Explore Menu
              </Link>

              <Link href="/checkout" className="button button-secondary">
                Order Now
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <span className="hero-card-label">TODAY'S SPECIAL</span>
            <h2>Doro Wat</h2>
            <p>
              Tender chicken simmered in rich berbere sauce with traditional
              Ethiopian spices.
            </p>
            <strong>3,500 ETB</strong>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">WHY ADDIS EATS</span>
            <h2>Made for food lovers</h2>
            <p>
              Great Ethiopian food, simple ordering, and a smooth digital
              experience.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-number">01</span>
              <h3>Authentic Flavors</h3>
              <p>
                Traditional Ethiopian recipes prepared with rich spices and
                fresh ingredients.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-number">02</span>
              <h3>Easy Ordering</h3>
              <p>
                Browse the menu, choose your favorite dish, and complete your
                order in a few simple steps.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-number">03</span>
              <h3>Freshly Prepared</h3>
              <p>
                Every order is prepared with care to bring you a memorable Addis
                dining experience.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
