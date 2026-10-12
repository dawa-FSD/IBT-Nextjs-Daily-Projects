import Link from "next/link";

export default function NotFound() {
  return (
    <div className="status">
      <div className="status-box">
        <h1>404 - Page Not Found</h1>

        <p>Sorry, the page you are looking for does not exist.</p>

        <Link href="/menu" className="button">
          Back to Menu
        </Link>
      </div>
    </div>
  );
}
