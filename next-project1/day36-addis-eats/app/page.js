import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Addis Eats</h1>

      <nav>
        <Link href="/menu">Menu</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
      </nav>
    </main>
  );
}
