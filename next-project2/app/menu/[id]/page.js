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
      <article className="dish-detail">
        <h1>Dish Not Found</h1>
        <p>The requested dish does not exist.</p>
      </article>
    );
  }

  return (
    <article className="dish-detail">
      <p className="dish-category">{dish.category}</p>

      <h1>{dish.name}</h1>

      <p className="dish-description">{dish.description}</p>

      <h2>{dish.price.toLocaleString()} ETB</h2>

      <button className="btn btn-primary">Add to Cart</button>
    </article>
  );
}
