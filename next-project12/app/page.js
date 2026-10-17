const highlights = [
  {
    emoji: "🍲",
    name: "Doro Wat",
    description: "Slow-cooked Ethiopian chicken stew with warming spices.",
    price: 450,
  },
  {
    emoji: "🥣",
    name: "Shiro",
    description: "Comforting chickpea stew, smooth and full of flavour.",
    price: 180,
  },
  {
    emoji: "🥩",
    name: "Tibs",
    description: "Sautéed beef with onions, peppers, and Ethiopian spices.",
    price: 380,
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Taste the tradition</span>
            <h1>
              Good food.
              <br />
              Good mood.
            </h1>
            <p>
              Discover Ethiopian favourites in a clean, accessible food-ordering
              demo built with Next.js and React.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="/menu">
                Explore the menu
              </a>
              <a className="btn btn-secondary" href="/events-demo">
                Try event demos
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Featured dish">
            <div className="food-emoji" aria-hidden="true">
              🍛
            </div>
            <span className="pill">Chef's favourite</span>
            <h2>Made with care</h2>
            <p>
              Practice buttons, forms, keyboard access, loading states, and
              production readiness in one small project.
            </p>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Popular picks</span>
              <h2>From our menu</h2>
            </div>
            <a href="/menu">View all dishes →</a>
          </div>
          <div className="grid">
            {highlights.map((dish) => (
              <article className="dish-card" key={dish.name}>
                <div className="dish-emoji" aria-hidden="true">
                  {dish.emoji}
                </div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <div className="price-row">
                  <span className="price">{dish.price} ETB</span>
                  <a className="btn btn-secondary" href="/menu">
                    View menu
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Day 48 learning goals</span>
              <h2>Built for practical learning</h2>
            </div>
          </div>
          <div className="grid">
            <article className="panel">
              <h3>React events</h3>
              <p className="muted">
                Learn click, change, submit, and keyboard events.
              </p>
            </article>
            <article className="panel">
              <h3>Accessible forms</h3>
              <p className="muted">
                Use labels, visible focus, helpful status messages, and
                mobile-friendly controls.
              </p>
            </article>
            <article className="panel">
              <h3>Production workflow</h3>
              <p className="muted">
                Build locally, configure environment variables, and deploy
                through GitHub and Vercel.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
