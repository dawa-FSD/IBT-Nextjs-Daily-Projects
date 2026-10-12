import DishCard from "./DishCard";
import { dishes } from "../data/dishes";

export default async function DishList() {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
