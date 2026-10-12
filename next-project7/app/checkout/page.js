import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getDishes } from "@/lib/dishes";
import { placeOrder } from "@/app/orders/actions";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=%2Fcheckout");
  }

  const dishes = await getDishes();

  return (
    <main className="page-container">
      <section className="auth-card checkout-card">
        <p className="eyebrow">SECURE CHECKOUT</p>
        <h1>Place a demo order</h1>
        <p className="muted">Signed in as {session.email}</p>

        <form action={placeOrder} className="auth-form">
          <label htmlFor="dishId">Choose a dish</label>
          <select id="dishId" name="dishId" required>
            {dishes.map((dish) => (
              <option key={dish.id} value={dish.id}>
                {dish.name} — {dish.price} ETB
              </option>
            ))}
          </select>

          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            max="20"
            defaultValue="1"
            required
          />

          <p className="muted">
            This classroom checkout creates an order without payment.
          </p>

          <button className="primary-button" type="submit">
            Place order
          </button>
        </form>
      </section>
    </main>
  );
}
