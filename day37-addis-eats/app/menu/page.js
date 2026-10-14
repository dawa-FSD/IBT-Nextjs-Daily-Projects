import { Suspense } from "react";
import DishList from "@/components/DishList";

// Revalidate the menu every 60 seconds.
// This enables Incremental Static Regeneration (ISR).
export const revalidate = 60;

function DishListFallback() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <p>Loading dishes...</p>
    </div>
  );
}

export default function MenuPage() {
  return (
    <section>
      <div className="page-heading">
        <h1>Addis Eats Menu</h1>
        <p>Explore our selection of Ethiopian and international dishes.</p>
      </div>

      <Suspense fallback={<DishListFallback />}>
        <DishList />
      </Suspense>
    </section>
  );
}
