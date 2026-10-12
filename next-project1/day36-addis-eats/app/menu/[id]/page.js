import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes } from "../../data/dishes";

// const dishes = {
//   1: {
//     name: "Doro Wat",
//     price: 350,
//   },
//   2: {
//     name: "Shiro",
//     price: 200,
//   },
//   3: {
//     name: "Tibs",
//     price: 450,
//   },
// };

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes[id];

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <Link href="/menu">← Back to Menu</Link>

      <h1>{dish.name}</h1>
      <p>{dish.price} ETB</p>

      <Link href="/cart">Go to Cart</Link>
    </main>
  );
}
