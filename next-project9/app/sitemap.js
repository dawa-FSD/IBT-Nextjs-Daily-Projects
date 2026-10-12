import { getDishes } from "@/lib/dishes";

const SITE_URL = "https://addiseats.et";

export default async function sitemap() {
  const dishes = await getDishes();

  const publicRoutes = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/menu`,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const dishRoutes = dishes.map((dish) => ({
    url: `${SITE_URL}/menu/${dish.id}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...publicRoutes, ...dishRoutes];
}
