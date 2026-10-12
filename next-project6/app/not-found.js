import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container">
      <div className="empty">
        <p className="eyebrow">404 · Not found</p>
        <h1>We couldn't find that page.</h1>
        <p>Check the URL or return to the menu.</p>
        <Link className="button" href="/menu">
          Go to menu
        </Link>
      </div>
    </main>
  );
}
