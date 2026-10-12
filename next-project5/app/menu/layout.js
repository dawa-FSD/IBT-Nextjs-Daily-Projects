import Link from "next/link";

export default function MenuLayout({ children }) {
  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-header">
          <div>
            <span className="badge">Our Menu</span>
            <h1>Discover Our Dishes</h1>
          </div>

          <nav className="category-nav">
            <Link href="/menu">All</Link>
            <Link href="/menu?category=Ethiopian">Ethiopian</Link>
            <Link href="/menu?category=Vegetarian">Vegetarian</Link>
            <Link href="/menu?category=International">International</Link>
          </nav>
        </div>

        {children}
      </div>
    </section>
  );
}
