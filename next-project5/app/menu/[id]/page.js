import Link from "next/link";
import { notFound } from "next/navigation";
import { getDishById, getDishes } from "../data";

export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishDetailsPage({ params }) {
  const { id } = await params;

  const dish = await getDishById(id);

  if (!dish) {
    notFound();
  }

  return (
    <section className="details-section">
      <div className="container">
        <Link href="/menu" className="back-link">
          ← Back to Menu
        </Link>

        <div className="details-card">
          <div className="details-image">
            <span>🍛</span>
          </div>

          <div className="details-content">
            <span className="dish-category">{dish.category}</span>

            <h1>{dish.name}</h1>

            <p className="details-description">{dish.description}</p>

            <div className="details-price">{dish.price} ETB</div>

            <div className="details-actions">
              <Link href="/cart" className="btn btn-primary">
                Add to Cart
              </Link>

              <Link href="/checkout" className="btn btn-secondary">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
