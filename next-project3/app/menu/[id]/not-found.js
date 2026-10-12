import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="section-label">404</span>

      <h1>Dish not found</h1>

      <p>We could not find the dish you are looking for.</p>

      <Link href="/menu" className="button button-primary">
        Back to Menu
      </Link>
    </div>
  );
}
