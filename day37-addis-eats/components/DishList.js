import Link from "next/link";

const dishes = [
  {
    id: "doro-wat",
    name: "Doro Wat",
    category: "Ethiopian",
    price: 350,
  },
  {
    id: "tibs",
    name: "Tibs",
    category: "Ethiopian",
    price: 450,
  },
  {
    id: "kitfo",
    name: "Kitfo",
    category: "Ethiopian",
    price: 400,
  },
  {
    id: "pizza",
    name: "Special Pizza",
    category: "Pizza",
    price: 550,
  },
];

export default async function DishList() {
  // Simulate slow data loading to demonstrate
  // React Suspense and streaming.
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <article className="dish-card" key={dish.id}>
          <span className="badge">{dish.category}</span>

          <h2>{dish.name}</h2>

          <p className="dish-price">ETB {dish.price}</p>

          <Link href={`/menu/${dish.id}`} className="primary-button">
            View Dish
          </Link>
        </article>
      ))}
    </div>
  );
}
