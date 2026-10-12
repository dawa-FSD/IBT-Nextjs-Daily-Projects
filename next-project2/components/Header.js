import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          Addis <span>Eats</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </div>
    </header>
  );
}
