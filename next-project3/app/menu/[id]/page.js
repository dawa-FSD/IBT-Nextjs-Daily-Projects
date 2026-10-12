// import { Suspense } from "react";
// import DishList from "../../components/DishList";

// export const revalidate = 3600;

// export default function MenuPage() {
//   return (
//     <div>
//       <div className="section-heading">
//         <div>
//           <span className="section-label">DISCOVER</span>
//           <h1>Our Menu</h1>
//         </div>

//         <p>
//           Traditional favorites and delicious dishes made for the Addis Eats
//           table.
//         </p>
//       </div>

//       <Suspense
//         fallback={<div className="loading-grid">Loading dishes...</div>}
//       >
//         <DishList />
//       </Suspense>
//     </div>
//   );
// }
import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes } from "../../../data/dishes";

export function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <article className="container dish-detail">
      <Link href="/menu" className="back-link">
        ← Back to menu
      </Link>

      <div className="detail-card">
        <div className="detail-image">
          <span>{dish.category}</span>
        </div>

        <div className="detail-content">
          <span className="section-label">{dish.category}</span>

          <h1>{dish.name}</h1>

          <p>{dish.description}</p>

          <strong className="detail-price">
            {dish.price.toLocaleString()} ETB
          </strong>

          <button className="button button-primary">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}
