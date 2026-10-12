import Link from "next/link";

const categories = [
  { name: "All Dishes", href: "/menu" },
  { name: "Ethiopian", href: "/menu?category=ethiopian" },
  { name: "Pizza", href: "/menu?category=pizza" },
  { name: "Burgers", href: "/menu?category=burgers" },
  { name: "Drinks", href: "/menu?category=drinks" },
];

export default function MenuSidebar() {
  return (
    <aside className="menu-sidebar">
      <div className="sidebar-heading">
        <span>MENU</span>
        <h2>Explore</h2>
      </div>

      <nav aria-label="Menu categories">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="category-link"
          >
            {category.name}
            <span>→</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-note">
        <span>🍴</span>
        <p>Fresh ingredients. Authentic flavors.</p>
      </div>
    </aside>
  );
}
