import { getDishes } from "./data";
import DishCard from "./DishCard";

export default async function MenuPage({ searchParams }) {
  const dishes = await getDishes();

  const params = await searchParams;
  const category = params?.category;

  const filteredDishes = category
    ? dishes.filter((dish) => dish.category === category)
    : dishes;

  return (
    <div>
      <div className="section-heading">
        <h2>Today's Menu</h2>
        <p>Choose from our selection of freshly prepared dishes.</p>
      </div>

      {filteredDishes.length === 0 ? (
        <div className="empty-state">
          <h3>No dishes found</h3>
          <p>Try selecting another category.</p>
        </div>
      ) : (
        <div className="dish-grid">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}
    </div>
  );
}
