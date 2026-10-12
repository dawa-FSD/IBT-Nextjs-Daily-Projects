const dishes = [
  {
    id: "doro-wat",
    name: "Doro Wat",
    category: "Ethiopian",
    price: 350,
    description:
      "A rich and spicy Ethiopian chicken stew prepared with berbere, onions, garlic, and traditional spices.",
  },
  {
    id: "tibs",
    name: "Tibs",
    category: "Ethiopian",
    price: 450,
    description:
      "Tender pieces of beef sautéed with onions, peppers, rosemary, and Ethiopian spices.",
  },
  {
    id: "kitfo",
    name: "Kitfo",
    category: "Ethiopian",
    price: 400,
    description:
      "Minced beef seasoned with mitmita and traditional Ethiopian butter.",
  },
  {
    id: "shiro",
    name: "Shiro Wat",
    category: "Vegetarian",
    price: 220,
    description:
      "Smooth chickpea stew cooked with onions, garlic, and Ethiopian spices.",
  },
  {
    id: "misir-wat",
    name: "Misir Wat",
    category: "Vegetarian",
    price: 200,
    description:
      "Spicy red lentil stew prepared with berbere and traditional spices.",
  },
  {
    id: "special-pizza",
    name: "Special Pizza",
    category: "International",
    price: 550,
    description:
      "A delicious pizza topped with fresh vegetables, cheese, and our special sauce.",
  },
];

export async function getDishes() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return dishes;
}

export async function getDishById(id) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return dishes.find((dish) => dish.id === id);
}
