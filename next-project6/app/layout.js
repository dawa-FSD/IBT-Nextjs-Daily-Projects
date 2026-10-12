import "./globals.css";
import Link from "next/link";
import Providers from "./providers";

export const metadata = {
  title: {
    default: "Addis Eats | Ethiopian Food",
    template: "%s | Addis Eats",
  },
  description: "Discover Ethiopian favourites and track your Addis Eats order.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="site-header">
            <div className="nav-wrap">
              <Link className="brand" href="/">
                Addis<span>Eats</span>
              </Link>
              <nav aria-label="Main navigation">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/orders/1001">Order status</Link>
                <Link href="/tanstack">TanStack demo</Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="footer">
            Made for learning · Addis Eats Day 41 · SWR &amp; TanStack Query
          </footer>
        </Providers>
      </body>
    </html>
  );
}
