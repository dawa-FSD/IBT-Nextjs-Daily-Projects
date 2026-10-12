import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getOrdersFor } from "@/lib/orders";
import { cancelOrder } from "./actions";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=%2Forders");
  }

  const orders = await getOrdersFor(session.userId);

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR ACCOUNT</p>
          <h1>My Orders</h1>
          <p className="muted">
            Welcome, {session.name}. Here are your orders.
          </p>
        </div>

        <form action="/api/signout" method="post">
          <button className="secondary-button" type="submit">
            Sign out
          </button>
        </form>
      </div>

      {orders.length === 0 ? (
        <section className="empty-state">
          <h2>No orders yet</h2>
          <p>Your next Ethiopian meal is waiting.</p>
          <a className="primary-link" href="/menu">
            Explore menu
          </a>
        </section>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <div className="order-heading">
                <div>
                  <span className="muted">Order</span>
                  <h2>#{order.id.slice(0, 8)}</h2>
                </div>
                <span className="status-badge">{order.status}</span>
              </div>

              <ul className="order-items">
                {order.items.map((item, index) => (
                  <li key={`${order.id}-${index}`}>
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      {(item.unitPrice * item.quantity).toLocaleString("en-ET")}{" "}
                      ETB
                    </span>
                  </li>
                ))}
              </ul>

              <div className="order-total">
                <span>Total</span>
                <strong>{order.total.toLocaleString("en-ET")} ETB</strong>
              </div>

              {order.status === "Preparing" && (
                <form action={cancelOrder}>
                  <input type="hidden" name="orderId" value={order.id} />
                  <button className="danger-button" type="submit">
                    Cancel order
                  </button>
                </form>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
