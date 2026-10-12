import Link from "next/link";
import { notFound } from "next/navigation";
import { getDishById } from "@/lib/dishes";

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    notFound();
  }

  return (
    <main className="page-container">
      <Link href="/menu" className="back-link">
        ← Back to menu
      </Link>

      <article className="dish-detail">
        <div className="dish-placeholder dish-placeholder-large">
          {dish.name.slice(0, 1)}
        </div>
        <div>
          <p className="eyebrow">ADDIS EATS MENU</p>
          <h1>{dish.name}</h1>
          <p>{dish.description}</p>
          <h2>{dish.price.toLocaleString("en-ET")} ETB</h2>
          <Link href="/checkout" className="primary-link">
            Order this dish
          </Link>
        </div>
      </article>
    </main>
  );
}
