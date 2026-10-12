import Link from "next/link";
import { dishes } from "../../data/dishes";

export const revalidate = 3600;

export default function MenuPage() {
  return (
    <main className="menu-page">
      <div className="container">
        <header className="menu-header">
          <div>
            <span className="section-label">OUR MENU</span>

            <h1>Discover Our Dishes</h1>
          </div>

          <p>
            Enjoy authentic Ethiopian dishes prepared with traditional flavors,
            fresh ingredients, and the Addis Eats touch.
          </p>
        </header>

        <div className="dish-grid">
          {dishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className="dish-image">
                <span>{dish.category}</span>
              </div>

              <div className="dish-content">
                <h2>{dish.name}</h2>

                <p>{dish.description}</p>

                <div className="dish-footer">
                  <strong>{dish.price.toLocaleString()} ETB</strong>

                  <Link href={`/menu/${dish.id}`} className="dish-link">
                    View Dish →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-api-info">
          <div>
            <span className="section-label">API</span>
            <h2>Fresh menu data</h2>
            <p>
              Our menu is powered by the Addis Eats dishes data source and
              exposed through the application API.
            </p>
          </div>

          <Link
            href="/api/dishes"
            target="_blank"
            className="button button-secondary"
          >
            View API →
          </Link>
        </div>
      </div>
    </main>
  );
}
