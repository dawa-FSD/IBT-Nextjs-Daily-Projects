import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>

      <p>Complete your Addis Eats order.</p>

      <Link href="/cart">Back to Cart</Link>
      <br />
      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}
