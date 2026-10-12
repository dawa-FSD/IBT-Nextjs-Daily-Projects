import Link from "next/link";
import { getDishes } from "@/lib/dishes";

export const metadata = {
  title: "Home",
  description:
    "Discover authentic Ethiopian cuisine, browse traditional favorites, and explore the Addis Eats menu.",
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const dishes = await getDishes();
  const featuredDishes = dishes.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">Authentic Ethiopian Cuisine</span>

          <h1>
            Discover the true taste of <span>Ethiopia.</span>
          </h1>

          <p>
            From traditional favorites to comforting classics, explore Ethiopian
            dishes made memorable with Addis Eats.
          </p>

          <div style={{ marginTop: 28 }}>
            <Link href="/menu" className="button-primary">
              Explore Our Menu →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Selection</span>
            <h2>Customer Favorites</h2>
            <p>Explore the flavors that make Ethiopian food special.</p>
          </div>

          <div className="dish-grid">
            {featuredDishes.map((dish) => (
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
                      View Dish →
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
