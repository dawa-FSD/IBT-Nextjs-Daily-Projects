import Link from "next/link";
import { getDishes } from "@/lib/dishes";

export const metadata = {
  title: "Explore Our Menu",
  description:
    "Browse the Addis Eats menu, including Kitfo, Doro Wot, Shiro, and traditional Ethiopian favorites.",
  alternates: {
    canonical: "/menu",
  },
};

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <main>
      <section className="page-banner">
        <div className="container section-heading">
          <span className="eyebrow">Made for Every Craving</span>
          <h1>Explore Our Menu</h1>
          <p>Discover traditional flavors and find your next favorite dish.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dish-grid">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.id}>
                <img
                  className="dish-image"
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                />

                <div className="dish-body">
                  <span className="dish-category">{dish.category}</span>

                  <h2>{dish.name}</h2>
                  <p>{dish.description}</p>

                  <div className="dish-card-bottom">
                    <span className="price">{dish.price} ETB</span>

                    <Link href={`/menu/${dish.id}`} className="text-link">
                      View Details →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
