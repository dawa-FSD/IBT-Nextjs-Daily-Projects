import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Simple Ethiopian food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container navbar">
            <Link href="/" className="logo">
              Addis Eats
            </Link>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <h3>Addis Eats</h3>
            <p>Authentic Ethiopian flavors, delivered with care.</p>
            <p>© 2026 Addis Eats. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
