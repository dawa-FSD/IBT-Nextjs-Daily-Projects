export const dishes = [
  {
    id: "1",
    name: "Kitfo",
    price: 350,
    emoji: "🥩",
    tone: "tone-terracotta",
    description:
      "A beloved Ethiopian specialty, rich in traditional spices and served with care.",
  },
  {
    id: "2",
    name: "Doro Wot",
    price: 400,
    emoji: "🍲",
    tone: "tone-gold",
    description:
      "Slow-simmered chicken stew with warming berbere spices and deep, comforting flavor.",
  },
  {
    id: "3",
    name: "Shiro",
    price: 250,
    emoji: "🥣",
    tone: "tone-sage",
    description:
      "A smooth, savory chickpea stew seasoned with fragrant Ethiopian spices.",
  },
  {
    id: "4",
    name: "Chechebsa",
    price: 220,
    emoji: "🫓",
    tone: "tone-cream",
    description:
      "Torn flatbread tossed with spiced butter for a warm and satisfying classic.",
  },
  {
    id: "5",
    name: "Tibs",
    price: 450,
    emoji: "🍛",
    tone: "tone-plum",
    description:
      "Sizzling, seasoned bites prepared in a traditional style with a bold finish.",
  },
  {
    id: "6",
    name: "Veggie Beyaynetu",
    price: 300,
    emoji: "🥗",
    tone: "tone-sage",
    description:
      "A colorful selection of plant-based Ethiopian favorites served together.",
  },
];
export function getDishById(id) {
  return dishes.find((dish) => dish.id === String(id));
}
