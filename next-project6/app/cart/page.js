import Cart from "./Cart";
export const metadata = {
  title: "Cart",
  robots: { index: false, follow: false },
};
export default function CartPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Almost time to eat</p>
        <h1>Your cart</h1>
        <p className="lead">
          Add a sample dish and watch SWR revalidate the cart after the write
          succeeds.
        </p>
      </section>
      <Cart />
    </main>
  );
}
