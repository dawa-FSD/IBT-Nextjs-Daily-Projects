export const dishes = [
  {
    id: 1,
    name: "Chicken Tibs",
    description:
      "Tender chicken cooked with onions, tomatoes and Ethiopian spices.",
    price: 450,
    category: "Tibs",
  },
  {
    id: 2,
    name: "Beef Tibs",
    description: "Tender beef sautéed with peppers and traditional spices.",
    price: 520,
    category: "Tibs",
  },
  {
    id: 3,
    name: "Kitfo",
    description: "Traditional Ethiopian minced beef, seasoned with mitmita.",
    price: 650,
    category: "Traditional",
  },
  {
    id: 4,
    name: "Shiro",
    description: "Smooth chickpea stew served with injera.",
    price: 280,
    category: "Vegetarian",
  },
  {
    id: 5,
    name: "Doro Wot",
    description: "Spicy chicken stew with berbere and egg.",
    price: 550,
    category: "Traditional",
  },
  {
    id: 6,
    name: "Vegetable Pasta",
    description: "Pasta tossed with fresh vegetables and herbs.",
    price: 320,
    category: "Pasta",
  },
  {
    id: 7,
    name: "Special Burger",
    description: "Beef burger with cheese and fresh vegetables.",
    price: 400,
    category: "Burger",
  },
  {
    id: 8,
    name: "Vegetable Pizza",
    description: "Pizza topped with seasonal vegetables and cheese.",
    price: 500,
    category: "Pizza",
  },
];

export function searchDishes(query = "") {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return dishes;
  return dishes.filter((dish) =>
    `${dish.name} ${dish.description} ${dish.category}`
      .toLowerCase()
      .includes(normalized),
  );
}
