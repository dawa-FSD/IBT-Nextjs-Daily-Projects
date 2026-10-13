import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container section">
      <div className="empty-state">
        <span>🍽️</span>
        <h1>Dish not found</h1>
        <p>That item may have left the menu.</p>
        <Link className="button button-gold" href="/menu">
          Return to menu
        </Link>
      </div>
    </section>
  );
}
