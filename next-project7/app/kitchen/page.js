import { redirect } from "next/navigation";
import { requireStaff } from "@/lib/auth";
import { getOrdersFor } from "@/lib/orders";

export default async function KitchenPage() {
  const session = await requireStaff();

  if (!session) {
    redirect("/");
  }

  const orders = await getOrdersFor(session.userId);

  return (
    <main className="page-container">
      <section className="page-heading">
        <div>
          <p className="eyebrow">ADDIS EATS · STAFF</p>
          <h1>Kitchen Dashboard</h1>
          <p className="muted">Manage your demo orders.</p>
        </div>
      </section>

      {orders.length === 0 ? (
        <section className="empty-state">
          <h2>No orders yet</h2>
          <p>New orders will appear here.</p>
        </section>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <p className="muted">Order #{order.id.slice(0, 8)}</p>
              <h2>{order.status}</h2>

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
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
