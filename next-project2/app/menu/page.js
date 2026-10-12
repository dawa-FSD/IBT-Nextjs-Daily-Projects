import { Suspense } from "react";
import DishList from "../../components/DishList";

export const revalidate = 3600;

export default function MenuPage() {
  return (
    <section>
      <h1>Our Menu</h1>

      <Suspense fallback={<p>Loading dishes...</p>}>
        <DishList />
      </Suspense>
    </section>
  );
}
