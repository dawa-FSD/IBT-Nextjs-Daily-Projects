import SearchBox from "./SearchBox";
import { dishes } from "@/lib/dishes";
export const metadata = {
  title: "Menu",
  description: "Search Ethiopian dishes on the Addis Eats menu.",
};
export default function MenuPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Made fresh, shared with love</p>
        <h1>Explore the menu</h1>
        <p className="lead">
          Search by dish name, description or category. Results are paginated
          and the URL reflects the current search.
        </p>
      </section>
      <SearchBox initialData={dishes.slice(0, 3)} />
    </main>
  );
}
