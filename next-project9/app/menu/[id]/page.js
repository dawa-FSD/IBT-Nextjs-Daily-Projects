import { notFound } from "next/navigation";
import { getDishById, getDishes } from "@/lib/dishes";

const SITE_URL = "https://addiseats.et";

export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: String(dish.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested dish is not available on Addis Eats.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: dish.name,
    description: dish.description,

    alternates: {
      canonical: `/menu/${dish.id}`,
    },

    openGraph: {
      type: "website",
      title: `${dish.name} | Addis Eats`,
      description: dish.description,
      url: `${SITE_URL}/menu/${dish.id}`,
      images: [
        {
          url: `/menu/${dish.id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${dish.name} — Addis Eats`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${dish.name} | Addis Eats`,
      description: dish.description,
      images: [`/menu/${dish.id}/opengraph-image`],
    },
  };
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.description,
    image: `${SITE_URL}${dish.image}`,
    offers: {
      "@type": "Offer",
      price: String(dish.price),
      priceCurrency: "ETB",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/menu/${dish.id}`,
    },
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Discover Our Menu</span>
          <p>Fresh inspiration from Ethiopian cuisine.</p>
        </div>
      </section>

      <section className="section">
        <div className="container dish-detail">
          <img className="dish-detail-image" src={dish.image} alt={dish.name} />

          <article>
            <span className="eyebrow">{dish.category}</span>
            <h1>{dish.name}</h1>
            <p className="muted">{dish.description}</p>

            <p className="price">{dish.price} ETB</p>

            <p className="muted">
              Explore authentic Ethiopian flavors with Addis Eats.
            </p>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
