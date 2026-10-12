import Link from "next/link";
const dishes = [
  {
    id: "tibs",
    name: "Kitfo",
    price: "3500",
    category: "traditionan",
    description: "",
  },
  {
    id: "doro-wat",
    name: "Doro-Wat",
    price: 2010,
    category: "traditional",
    description: "",
  },
  {
    id: "tibs",
    name: "Tibs",
    price: 3200,
    category: "traditional",
    description: "",
  },
  {
    id: "shiro",
    name: "Shiro",
    price: 210,
    category: "vegetarian",
    description: "",
  },
  {
    id: 4,
    name: "Chechebsa",
    price: 220,
    category: "traditional",
    description: "Pieces of flatbread mixed with spiced butter.",
  },
];
export async function getDishes() {
  return dishes;
}
export async function getDishesById({ id }) {
  return (
    <main>
      <div>{dishes.find((dish) => dish.id === Number(id))}</div>
    </main>
  );
}
