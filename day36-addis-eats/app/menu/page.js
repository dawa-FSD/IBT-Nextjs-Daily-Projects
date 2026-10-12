import Link from "next/link";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";

export default function MenuPage() {
  return (
    <main>
      <h1>Addis Eats Menu</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
      </nav>

      <CategoryBar />
      <DishList />
    </main>
  );
}
