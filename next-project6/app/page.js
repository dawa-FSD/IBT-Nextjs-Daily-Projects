import Link from "next/link";
import { dishes } from "@/lib/dishes";

export default function HomePage() {
  const featured = dishes.slice(0, 3);
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">A taste of Ethiopia</p>
        <h1>Good food. Warm hospitality. Delivered.</h1>
        <p className="lead">
          Explore Ethiopian favourites, search the menu without waiting on every
          keystroke, and keep an eye on your order as its status changes.
        </p>
        <div className="actions">
          <Link className="button" href="/menu">
            Explore the menu
          </Link>
          <Link className="button-secondary" href="/orders/1001">
            Track sample order
          </Link>
        </div>
      </section>
      <div className="stats">
        <article className="stat-card">
          <small>LOCAL DISHES</small>
          <strong>{dishes.length}</strong>
        </article>
        <article className="stat-card">
          <small>LIVE STATUS DEMO</small>
          <strong>5 sec</strong>
        </article>
        <article className="stat-card">
          <small>DATA LIBRARIES</small>
          <strong>SWR + TQ</strong>
        </article>
      </div>
      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Customer favourites</p>
            <h2>Popular on our menu</h2>
          </div>
          <Link className="text-link" href="/menu">
            See full menu →
          </Link>
        </div>
        <div className="cards">
          {featured.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className="dish-top">
                <span className="dish-icon" aria-hidden="true">
                  🍲
                </span>
                <span className="pill">{dish.category}</span>
              </div>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <div className="price">
                {dish.price.toLocaleString("en-ET")} ETB
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="panel" style={{ marginTop: 28 }}>
        <p className="eyebrow">What this assignment demonstrates</p>
        <h2>Server-render first. Refresh intelligently.</h2>
        <p className="muted">
          The menu is initially rendered by Next.js on the server. SWR handles
          interactive search and polling; the separate TanStack demo shows query
          caching and mutation invalidation.
        </p>
        <Link className="button-secondary" href="/tanstack">
          Open TanStack Query demo
        </Link>
      </section>
    </main>
  );
}
