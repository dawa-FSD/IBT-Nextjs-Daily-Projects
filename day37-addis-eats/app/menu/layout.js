import Link from "next/link";

const categories = [
  { name: "All", value: "all" },
  { name: "Ethiopian", value: "ethiopian" },
  { name: "Pizza", value: "pizza" },
  { name: "Burgers", value: "burgers" },
  { name: "Drinks", value: "drinks" },
];

export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout container">
      <aside className="sidebar" aria-label="Menu categories">
        <h2>Categories</h2>

        <nav className="category-list" aria-label="Food categories">
          {categories.map((category) => (
            <Link
              key={category.value}
              href={`/menu?category=${category.value}`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </aside>

      <section className="menu-content">{children}</section>
    </div>
  );
}
