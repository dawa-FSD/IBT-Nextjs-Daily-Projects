import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes, getDishById } from "@/lib/dishes";
import AddToCart from "@/components/AddToCart";
export function generateStaticParams() {
  return dishes.map((d) => ({ id: String(d.id) }));
}
export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = getDishById(id);
  return dish
    ? { title: dish.name, description: dish.description }
    : { title: "Dish not found" };
}
export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = getDishById(id);
  if (!dish) notFound();
  return (
    <section className="container detail-layout">
      <div className={`detail-art ${dish.tone}`}>
        <span>{dish.emoji}</span>
        <small>ADDIS EATS · HOUSE FAVORITE</small>
      </div>
      <div className="detail-copy">
        <Link className="back-link" href="/menu">
          ← Back to menu
        </Link>
        <span className="eyebrow">Made with care</span>
        <h1>{dish.name}</h1>
        <p>{dish.description}</p>
        <div className="detail-price">
          {dish.price.toLocaleString("en-ET")} <span>ETB</span>
        </div>
        <p className="muted">Prepared fresh · Prices shown in Ethiopian birr</p>
        <AddToCart dish={dish} />
      </div>
    </section>
  );
}
