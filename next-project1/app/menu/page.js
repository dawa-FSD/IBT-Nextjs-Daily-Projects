import MenuCard from "./components/MenuCard";

const dishes = [
  {
    id: "doro",
    name: "Doro Wat",
    price: 3250,
    description: "Traditional Ethiopian chicken stew served with injera.",
  },
  {
    id: "tibs",
    name: "Tibs",
    price: 2500,
    description:
      "Tender grilled meat prepared with onions, peppers and spices.",
  },
  {
    id: "shiro",
    name: "Shiro",
    price: 1200,
    description: "Delicious Ethiopian chickpea stew with traditional spices.",
  },
  {
    id: "misir",
    name: "Misir Wat",
    price: 1100,
    description: "Spicy Ethiopian red lentil stew served with injera.",
  },
  {
    id: "kitfo",
    name: "Kitfo",
    price: 3000,
    description: "Traditional Ethiopian minced beef dish seasoned with spices.",
  },
  {
    id: "firfir",
    name: "Firfir",
    price: 950,
    description: "Pieces of injera mixed with berbere and flavorful sauce.",
  },
];

export default function MenuPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="section-title">
          <h1>Our Menu 🍽️</h1>

          <p>Choose your favorite Ethiopian dishes.</p>
        </div>

        <div className="menu-grid">
          {dishes.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
