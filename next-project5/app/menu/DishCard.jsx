import Link from "next/link";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <div className="dish-image">
        <span>🍛</span>
      </div>

      <div className="dish-content">
        <span className="dish-category">{dish.category}</span>

        <h3>{dish.name}</h3>

        <p>{dish.description}</p>

        <div className="dish-footer">
          <strong>{dish.price} ETB</strong>

          <Link href={`/menu/${dish.id}`} className="btn btn-small">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
