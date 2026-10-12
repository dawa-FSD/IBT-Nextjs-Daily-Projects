import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">AUTHENTIC ETHIOPIAN FLAVORS</p>
        <h1>Welcome to Addis Eats</h1>
        <p>
          Discover traditional Ethiopian dishes, freshly prepared and delivered
          with care.
        </p>
        <div className="hero-actions">
          <Link className="primary-link" href="/menu">
            Explore menu
          </Link>
          <Link className="secondary-link" href="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
