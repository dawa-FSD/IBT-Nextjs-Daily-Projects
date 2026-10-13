import Link from "next/link";
import AddToCart from "@/components/AddToCart";
export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <Link
        href={`/menu/${dish.id}`}
        className={`dish-art ${dish.tone}`}
        aria-label={`View ${dish.name}`}
      >
        <span>{dish.emoji}</span>
        <small>HOUSE FAVORITE</small>
      </Link>
      <div className="dish-content">
        <div className="dish-title-row">
          <Link href={`/menu/${dish.id}`}>
            <h3>{dish.name}</h3>
          </Link>
          <strong>
            {dish.price.toLocaleString("en-ET")} <small>ETB</small>
          </strong>
        </div>
        <p>{dish.description}</p>
        <div className="dish-card-bottom">
          <Link className="text-link" href={`/menu/${dish.id}`}>
            View details ↗
          </Link>
          <AddToCart dish={dish} />
        </div>
      </div>
    </article>
  );
}
