import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Ethiopian food ordering app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container nav-content">
            <Link href="/" className="logo">
              Addis Eats 🍽️
            </Link>

            <nav>
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-main">
              <div className="footer-brand">
                <Link href="/" className="footer-logo">
                  Addis Eats <span>🍽️</span>
                </Link>

                <p>
                  Bringing authentic Ethiopian flavors to your table with simple
                  ordering and reliable delivery.
                </p>

                <div className="footer-socials">
                  <a href="https://www.facebook.com" target="_blank">
                    Facebook
                  </a>

                  <a href="https://www.instagram.com" target="_blank">
                    Instagram
                  </a>

                  <a href="https://www.tiktok.com" target="_blank">
                    TikTok
                  </a>
                </div>
              </div>

              <div className="footer-column">
                <h3>Explore</h3>

                <Link href="/">Home</Link>
                <Link href="/menu">Our Menu</Link>
                <Link href="/cart">Your Cart</Link>
                <Link href="/checkout">Checkout</Link>
              </div>

              <div className="footer-column">
                <h3>Popular</h3>

                <Link href="/menu/doro">Doro Wat</Link>
                <Link href="/menu/tibs">Tibs</Link>
                <Link href="/menu/shiro">Shiro</Link>
                <Link href="/menu/misir">Misir Wat</Link>
              </div>

              <div className="footer-column">
                <h3>Contact</h3>

                <p>📍 Addis Ababa, Ethiopia</p>
                <p>📞 +251 900 000 000</p>
                <p>✉️ hello@addiseats.com</p>
                <p>🕐 Mon - Sun: 9:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Addis Eats. All rights reserved.</p>

              <div>
                <span>Made with ❤️ in Ethiopia</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
