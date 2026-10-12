import Link from "next/link";

export default function MenuSidebar() {
  return (
    <aside className="menu-sidebar">
      <h2>Menu Categories</h2>

      <nav>
        <Link href="/menu" className="sidebar-link">
          All Dishes
        </Link>

        <Link href="/menu?category=ethiopian" className="sidebar-link">
          Ethiopian
        </Link>

        <Link href="/menu?category=pizza" className="sidebar-link">
          Pizza
        </Link>

        <Link href="/menu?category=burgers" className="sidebar-link">
          Burgers
        </Link>

        <Link href="/menu?category=drinks" className="sidebar-link">
          Drinks
        </Link>
      </nav>
    </aside>
  );
}
