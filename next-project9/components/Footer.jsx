import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-icon">A</span>
            <span>
              Addis <strong>Eats</strong>
            </span>
          </Link>
          <p>Authentic Ethiopian flavors, made memorable.</p>
        </div>

        <div className="footer-links">
          <Link href="/menu">Explore Menu</Link>
          <Link href="/cart">Your Cart</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Addis Eats. All rights reserved.</p>
      </div>
    </footer>
  );
}
