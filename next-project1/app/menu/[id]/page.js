import Link from "next/link";
import { notFound } from "next/navigation";

const dishes = {
  doro: {
    name: "Doro Wat",
    price: 3250,
    description:
      "Traditional Ethiopian chicken stew prepared with berbere, onions, garlic and spices. Served with fresh injera.",
  },

  tibs: {
    name: "Tibs",
    price: 2500,
    description:
      "Tender Ethiopian grilled meat prepared with onions, peppers, rosemary and traditional spices.",
  },

  shiro: {
    name: "Shiro",
    price: 1200,
    description:
      "Traditional Ethiopian chickpea stew with a rich and spicy sauce.",
  },

  misir: {
    name: "Misir Wat",
    price: 1100,
    description:
      "Spicy red lentil stew prepared with Ethiopian berbere spices.",
  },

  kitfo: {
    name: "Kitfo",
    price: 3000,
    description:
      "Traditional Ethiopian minced beef dish served with ayib and greens.",
  },

  firfir: {
    name: "Firfir",
    price: 950,
    description:
      "Pieces of injera mixed with spicy berbere sauce and Ethiopian butter.",
  },
};

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes[id];

  if (!dish) {
    notFound();
  }

  return (
    <section className="page">
      <div className="container">
        <div className="detail-card">
          <h1>{dish.name}</h1>

          <p>{dish.description}</p>

          <p className="detail-price">{dish.price.toLocaleString()} ETB</p>

          <Link href="/menu" className="button">
            ← Back to Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
