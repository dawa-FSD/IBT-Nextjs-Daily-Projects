import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2>🍽️ Addis Eats</h2>

        <p>Delicious Ethiopian food delivered with love.</p>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
        </div>

        <p className="copyright">© 2026 Addis Eats. All rights reserved.</p>
      </div>
    </footer>
  );
}
