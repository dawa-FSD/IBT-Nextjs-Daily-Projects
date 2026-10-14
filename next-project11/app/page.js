import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <nav className="topbar">
        <Link className="brand" href="/">
          🍲 Addis Eats
        </Link>
        <span className="demo-label">DEMO TRACKING</span>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">HOT FOOD. HAPPY HOME.</p>
          <h1>
            Your next meal is
            <br />
            <span>on its way.</span>
          </h1>
          <p className="hero-description">
            Follow your Addis Eats order from the kitchen to your doorstep. See
            the delivery location, order status, and delivery history in one
            place.
          </p>
          <Link className="primary-button" href="/track/AE-1042">
            Track order AE-1042 <span aria-hidden="true">→</span>
          </Link>
          <div className="trust-row">
            <span>✓ Live status demo</span>
            <span>✓ Addis Ababa time</span>
            <span>✓ ETB prices</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="food-emoji" aria-hidden="true">
            🍛
          </div>
          <p className="card-kicker">YOUR ORDER</p>
          <h2>Ethiopian Doro Wat</h2>
          <p className="muted">Almaz Kitchen · Bole, Addis Ababa</p>
          <div className="card-divider" />
          <div className="card-row">
            <span>Order number</span>
            <strong>AE-1042</strong>
          </div>
          <div className="card-row">
            <span>Order total</span>
            <strong>ETB 1,200</strong>
          </div>
          <div className="card-row">
            <span>Delivery status</span>
            <strong className="pill">On the way</strong>
          </div>
          <p className="demo-note">
            This is sample data, not a real courier location.
          </p>
        </div>
      </section>
    </main>
  );
}
