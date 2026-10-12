import Link from "next/link";

export default function DishNotFound() {
  return (
    <div className="error-container">
      <h1>Dish Not Found</h1>

      <p>Sorry, the dish you are looking for does not exist.</p>

      <Link href="/menu" className="btn btn-primary">
        Back to Menu
      </Link>
    </div>
  );
}
