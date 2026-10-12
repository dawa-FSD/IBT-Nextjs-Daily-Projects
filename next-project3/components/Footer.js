import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="logo">
            Addis<span>Eats</span>
          </Link>

          <p>
            Authentic Ethiopian flavors with a simple and modern ordering
            experience.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/menu">Menu</Link>
          <Link href="/checkout">Checkout</Link>
        </div>

        <div>
          <h3>Location</h3>
          <p>Addis Ababa, Ethiopia</p>
          <p>Open daily · 8:00 AM – 10:00 PM</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Addis Eats. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
