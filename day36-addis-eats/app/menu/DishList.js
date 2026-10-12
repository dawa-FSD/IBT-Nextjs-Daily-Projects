import Link from "next/link";
import { dishes } from "../data/dishes";

// const dishes = [
//   {
//     id: "1",
//     name: "Doro Wat",
//     category: "Ethiopian",
//     price: 350,
//   },
//   {
//     id: "2",
//     name: "Shiro",
//     category: "Ethiopian",
//     price: 200,
//   },
//   {
//     id: "3",
//     name: "Tibs",
//     category: "Ethiopian",
//     price: 450,
//   },
//   {
//     id: "4",
//     name: "Pizza",
//     category: "Pizza",
//     price: 550,
//   },
//   {
//     id: "5",
//     name: "Cheese Burger",
//     category: "Burgers",
//     price: 400,
//   },
//   {
//     id: "6",
//     name: "Fresh Juice",
//     category: "Drinks",
//     price: 150,
//   },
// ];

export default function DishList() {
  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <article className="dish-card" key={dish.id}>
          <h2>{dish.name}</h2>

          <p>{dish.category}</p>

          <p className="price">{dish.price.toLocaleString()} ETB</p>

          <Link href={`/menu/${dish.id}`}>View Dish</Link>
        </article>
      ))}
    </div>
  );
}
