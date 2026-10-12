import { Suspense } from "react";
import DishList from "../../components/DishList";

export const revalidate = 3600;

export default function MenuPage() {
  return (
    <div>
      <div className="section-heading">
        <div>
          <span className="section-label">DISCOVER</span>
          <h1>Our Menu</h1>
        </div>

        <p>
          Traditional favorites and delicious dishes made for the Addis Eats
          table.
        </p>
      </div>

      <Suspense
        fallback={<div className="loading-grid">Loading dishes...</div>}
      >
        <DishList />
      </Suspense>
    </div>
  );
}
