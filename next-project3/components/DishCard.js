import Link from "next/link";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <div className="dish-image">
        <span>{dish.category}</span>
      </div>

      <div className="dish-content">
        <div>
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
        </div>

        <div className="dish-footer">
          <strong>{dish.price.toLocaleString()} ETB</strong>

          <Link href={`/menu/${dish.id}`} className="dish-link">
            View dish →
          </Link>
        </div>
      </div>
    </article>
  );
}
