"use client";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
export default function SiteHeader() {
  const { count } = useCart();
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Addis Eats home">
          <span className="brand-mark">
            A<span>.</span>
          </span>
          <span className="brand-text">
            ADDIS <b>EATS</b>
            <small>FLAVORS OF HOME</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
        </nav>
        <Link className="cart-nav" href="/cart">
          <span aria-hidden="true">Bag</span>
          <span className="cart-count">{count}</span>
        </Link>
      </div>
    </header>
  );
}
