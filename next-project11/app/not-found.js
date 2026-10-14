import Link from "next/link";

export default function NotFound() {
  return (
    <main className="home-page not-found">
      <div className="not-found-icon">?</div>
      <h1>Order not found</h1>
      <p>Check the tracking link and try again.</p>
      <Link className="primary-button" href="/">
        Back to home
      </Link>
    </main>
  );
}
