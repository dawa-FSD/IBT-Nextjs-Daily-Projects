import Link from "next/link";
import { dishes } from "@/lib/dishes";
import DishCard from "@/components/DishCard";

export const metadata = {
  title: "Home",
  description: "Explore Ethiopian dishes with Addis Eats.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">A taste of Ethiopia</span>
          <h1>
            Good food.
            <br />
            <span>Good people.</span>
            <br />
            Great moments.
          </h1>
          <p>
            From comforting classics to bold favorites, bring the flavors of
            Ethiopia to your table.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/menu">
              Explore the menu <span aria-hidden="true">→</span>
            </Link>
            <span className="hero-note">Freshly prepared · Full of flavor</span>
          </div>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="Ethiopian meal illustration"
        >
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="plate">
            <span className="plate-food food-one">🍲</span>
            <span className="plate-food food-two">🥘</span>
            <span className="plate-food food-three">🫓</span>
            <span className="plate-food food-four">🌶️</span>
          </div>
          <div className="floating-tag tag-top">Made with care ✦</div>
          <div className="floating-tag tag-bottom">እንኳን ደህና መጡ</div>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <strong>Local flavor</strong>
            <span>Inspired by home</span>
          </div>
          <div>
            <strong>Freshly prepared</strong>
            <span>Made when you order</span>
          </div>
          <div>
            <strong>Easy ordering</strong>
            <span>Your favorites, a few clicks away</span>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Customer favorites</span>
            <h2>Popular on the table</h2>
            <p>Explore a few favorites from our kitchen.</p>
          </div>
          <Link className="text-link" href="/menu">
            View full menu <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="dish-grid">
          {dishes.slice(0, 3).map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>
      <section className="cta-band container">
        <div>
          <span className="eyebrow">Your next favorite is waiting</span>
          <h2>Bring everyone to the table.</h2>
          <p>Browse the menu and make tonight delicious.</p>
        </div>
        <Link className="button button-dark" href="/menu">
          Order something good →
        </Link>
      </section>
    </>
  );
}
