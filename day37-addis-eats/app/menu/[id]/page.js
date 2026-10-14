import Link from "next/link";

const dishes = [
  {
    id: "doro-wat",
    name: "Doro Wat",
    category: "Ethiopian",
    price: 350,
    description: "Traditional Ethiopian chicken stew with berbere.",
  },
  {
    id: "tibs",
    name: "Tibs",
    category: "Ethiopian",
    price: 450,
    description: "Tender beef sautéed with onions, peppers and spices.",
  },
  {
    id: "kitfo",
    name: "Kitfo",
    category: "Ethiopian",
    price: 400,
    description: "Minced beef seasoned with Ethiopian spices and butter.",
  },
  {
    id: "pizza",
    name: "Special Pizza",
    category: "Pizza",
    price: 550,
    description: "Fresh pizza with cheese and selected toppings.",
  },
];

export function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    return (
      <section className="container">
        <h1>Dish Not Found</h1>
        <p>The dish you are looking for does not exist.</p>
        <Link href="/menu">← Back to Menu</Link>
      </section>
    );
  }

  return (
    <section className="container dish-page">
      <Link href="/menu" className="back-link">
        ← Back to Menu
      </Link>

      <article className="dish-detail">
        <span className="badge">{dish.category}</span>

        <h1>{dish.name}</h1>

        <p className="dish-price">ETB {dish.price}</p>

        <p>{dish.description}</p>

        <button className="primary-button">Add to Cart</button>
      </article>
    </section>
  );
}
