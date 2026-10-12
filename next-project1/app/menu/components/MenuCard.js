import Link from "next/link";

export default function MenuCard({ dish }) {
  return (
    <article className="card">
      <h2>{dish.name}</h2>

      <p>{dish.description}</p>

      <p className="price">{dish.price.toLocaleString()} ETB</p>

      <Link href={`/menu/${dish.id}`} className="button">
        View Dish
      </Link>
    </article>
  );
}
