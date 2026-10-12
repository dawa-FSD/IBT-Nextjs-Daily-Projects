import Link from "next/link";

const features = [
  {
    icon: "🍛",
    title: "Authentic Ethiopian Food",
    description:
      "Enjoy traditional Ethiopian dishes prepared with authentic flavors and carefully selected ingredients.",
  },
  {
    icon: "🚴",
    title: "Fast Delivery",
    description:
      "Order your favorite meals and get them delivered fresh and ready to enjoy.",
  },
  {
    icon: "⭐",
    title: "Quality You Can Trust",
    description:
      "We focus on fresh ingredients, great taste, and a reliable food experience.",
  },
];

const popularDishes = [
  {
    name: "Doro Wat",
    description: "Spicy Ethiopian chicken stew served with injera.",
    price: "3,250 ETB",
    emoji: "🍗",
    id: "doro",
  },
  {
    name: "Tibs",
    description: "Tender grilled meat with onions, peppers and spices.",
    price: "2,500 ETB",
    emoji: "🥩",
    id: "tibs",
  },
  {
    name: "Shiro",
    description: "Rich and flavorful Ethiopian chickpea stew.",
    price: "1,200 ETB",
    emoji: "🍲",
    id: "shiro",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}{" "}
      <section className="home-hero">
        {" "}
        <div className="container home-hero-content">
          {" "}
          <div className="hero-text">
            {" "}
            <span className="hero-badge">🇪🇹 Authentic Ethiopian Cuisine </span>
            ```
            <h1>
              The Taste of Ethiopia,
              <span> Delivered to You.</span>
            </h1>
            <p>
              Discover delicious Ethiopian dishes made with traditional flavors
              and ingredients. Order your favorite meal and enjoy Ethiopia from
              wherever you are.
            </p>
            <div className="hero-actions">
              <Link href="/menu" className="button hero-button">
                Explore Menu →
              </Link>

              <Link href="/cart" className="button hero-button-outline">
                View Cart
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <strong>20+</strong>
                <span>Local Dishes</span>
              </div>

              <div>
                <strong>4.9</strong>
                <span>Customer Rating</span>
              </div>

              <div>
                <strong>30min</strong>
                <span>Average Delivery</span>
              </div>
            </div>
          </div>
          <div className="hero-food-card">
            <div className="food-visual">
              <span>🍛</span>
            </div>

            <div className="hero-food-info">
              <div>
                <h3>Doro Wat</h3>
                <p>Traditional Ethiopian Favorite</p>
              </div>

              <strong>3,250 ETB</strong>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div className="section-heading center">
            <span>WHY ADDIS EATS?</span>
            <h2>More Than Just a Meal</h2>
            <p>
              We bring authentic Ethiopian food and a simple ordering experience
              together.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* POPULAR DISHES */}
      <section className="popular-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span>FROM OUR KITCHEN</span>
              <h2>Popular Ethiopian Dishes</h2>
            </div>

            <Link href="/menu" className="view-all">
              View Full Menu →
            </Link>
          </div>

          <div className="popular-grid">
            {popularDishes.map((dish) => (
              <article className="popular-card" key={dish.id}>
                <div className="popular-image">
                  <span>{dish.emoji}</span>
                </div>

                <div className="popular-content">
                  <div className="dish-title-row">
                    <h3>{dish.name}</h3>
                    <span>{dish.price}</span>
                  </div>

                  <p>{dish.description}</p>

                  <Link href={`/menu/${dish.id}`} className="dish-link">
                    View Dish →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <span>READY TO EAT?</span>

            <h2>Your next favorite Ethiopian meal is only one click away.</h2>

            <p>
              Browse our menu, choose your favorite dish, and enjoy a delicious
              Ethiopian experience.
            </p>

            <Link href="/menu" className="button cta-button">
              Start Your Order →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
