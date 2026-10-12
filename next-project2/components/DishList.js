import Link from "next/link";

const dishes = [
  {
    id: "doro-wat",
    name: "Doro Wat",
    price: 3500,
    category: "Ethiopian",
    description: "Traditional Ethiopian chicken stew with berbere spices.",
  },
  {
    id: "shiro",
    name: "Shiro",
    price: 200,
    category: "Ethiopian",
    description: "Smooth chickpea stew served with Ethiopian injera.",
  },
  {
    id: "tibs",
    name: "Tibs",
    price: 2010,
    category: "Ethiopian",
    description: "Tender sautéed meat with vegetables and spices.",
  },
  {
    id: "kitfo",
    name: "Kitfo",
    price: 350,
    category: "Ethiopian",
    description: "Seasoned minced beef served with traditional sides.",
  },
];

export default function DishList() {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <article className="dish-card" key={dish.id}>
          <div>
            <p className="dish-category">{dish.category}</p>

            <h2>{dish.name}</h2>

            <p className="dish-description">{dish.description}</p>
          </div>

          <div className="dish-bottom">
            <span className="price">{dish.price.toLocaleString()} ETB</span>

            <Link href={`/menu/${dish.id}`} className="view-link">
              View Dish →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
