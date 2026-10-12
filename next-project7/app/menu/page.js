import Link from "next/link";
import { getDishes } from "@/lib/dishes";

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <main className="page-container">
      <p className="eyebrow">MADE WITH TRADITION</p>
      <h1>Our Menu</h1>
      <p className="muted">Explore the flavors of Ethiopia.</p>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <div className="dish-placeholder">{dish.name.slice(0, 1)}</div>
            <div className="dish-content">
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <div className="dish-footer">
                <strong>{dish.price.toLocaleString("en-ET")} ETB</strong>
                <Link href={`/menu/${dish.id}`}>View details →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
