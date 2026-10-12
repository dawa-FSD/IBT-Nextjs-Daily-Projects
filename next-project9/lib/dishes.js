export const dishes = [
  {
    id: "1",
    name: "Kitfo",
    category: "Traditional",
    description:
      "Experience authentic Ethiopian Kitfo, seasoned with traditional spices and niter kibbeh.",
    price: 350,
    image: "/images/kitfo.jpg",
  },
  {
    id: "2",
    name: "Doro Wot",
    category: "Traditional",
    description:
      "Enjoy classic Ethiopian chicken stew prepared with berbere and aromatic spices.",
    price: 400,
    image: "/images/doro-wot.jpg",
  },
  {
    id: "3",
    name: "Shiro",
    category: "Vegetarian",
    description:
      "Taste comforting Ethiopian chickpea stew with rich spices, traditionally served with injera.",
    price: 250,
    image: "/images/shiro.jpg",
  },
  {
    id: "4",
    name: "Chechebsa",
    category: "Breakfast",
    description:
      "Enjoy traditional Ethiopian flatbread tossed with spiced butter for a satisfying breakfast.",
    price: 220,
    image: "/images/chechebsa.jpg",
  },
];

export async function getDishes() {
  return dishes;
}

export async function getDishById(id) {
  return dishes.find((dish) => dish.id === String(id)) ?? null;
}
