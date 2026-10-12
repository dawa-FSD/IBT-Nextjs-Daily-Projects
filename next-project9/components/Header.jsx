import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link href="/" className="brand">
          <span className="brand-icon">A</span>
          <span>
            Addis <strong>Eats</strong>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/menu">Our Menu</Link>
          <Link href="/cart">Cart</Link>
        </nav>

        <Link href="/menu" className="nav-cta">
          Explore Menu <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
