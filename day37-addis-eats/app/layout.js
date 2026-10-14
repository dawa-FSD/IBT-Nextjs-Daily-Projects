import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Addis Eats food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-content">
            <a href="/" className="logo" aria-label="Addis Eats Home">
              Addis Eats
            </a>

            <nav aria-label="Main navigation">
              <a href="/">Home</a>
              <a href="/menu">Menu</a>
              <a href="/checkout">Checkout</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>© 2026 Addis Eats. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
