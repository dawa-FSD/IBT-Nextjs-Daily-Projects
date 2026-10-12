const dishes = [
  {
    id: "doro-wot",
    name: "Doro Wot",
    description: "Traditional Ethiopian chicken stew served with injera.",
    price: 400,
    image_url: "/images/doro-wot.jpg",
  },
  {
    id: "tibs",
    name: "Tibs",
    description: "Ethiopian-style sautéed meat with aromatic spices.",
    price: 450,
    image_url: "/images/tibs.jpg",
  },
  {
    id: "kitfo",
    name: "Kitfo",
    description: "Traditional Ethiopian minced beef dish.",
    price: 350,
    image_url: "/images/kitfo.jpg",
  },
  {
    id: "shiro",
    name: "Shiro",
    description: "Seasoned chickpea stew, a much-loved Ethiopian classic.",
    price: 250,
    image_url: "/images/shiro.jpg",
  },
];

export async function getDishes() {
  return dishes;
}

export async function getDishById(id) {
  return dishes.find((dish) => dish.id === String(id)) ?? null;
}
