import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Addis <span>Eats</span>
        </Link>

        <nav className="navigation" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>

        <Link href="/menu" className="header-order-button">
          Order Now
        </Link>
      </div>
    </header>
  );
}
