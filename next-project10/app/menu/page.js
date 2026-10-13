import { dishes } from "@/lib/dishes";
import DishCard from "@/components/DishCard";
import SearchBox from "@/components/SearchBox";
export const metadata = {
  title: "Menu",
  description: "Browse Ethiopian dishes and find your next favorite.",
};
export default function MenuPage() {
  return (
    <section className="section container">
      <div className="page-heading">
        <span className="eyebrow">From our kitchen</span>
        <h1>Our menu</h1>
        <p>
          Comforting classics, vibrant flavors, and something for every
          appetite.
        </p>
      </div>
      <SearchBox dishes={dishes} />
    </section>
  );
}
