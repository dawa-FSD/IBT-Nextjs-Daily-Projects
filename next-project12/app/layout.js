import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Addis Eats | Ethiopian Food Ordering Demo",
    template: "%s | Addis Eats",
  },
  description:
    "A beginner-friendly Addis Eats demonstration of accessible React events, checkout forms, and deployment preparation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <header className="site-header">
          <div className="container nav-wrap">
            <a className="brand" href="/" aria-label="Addis Eats home">
              <span className="brand-mark" aria-hidden="true">
                AE
              </span>
              <span>
                Addis <strong>Eats</strong>
              </span>
            </a>
            <nav aria-label="Main navigation" className="main-nav">
              <a href="/">Home</a>
              <a href="/menu">Menu</a>
              <a href="/checkout">Checkout</a>
              <a href="/events-demo">Event Lab</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© 2026 Addis Eats. All rights reserved</span>
            <span>Accessible interactions · Next.js App Router</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
