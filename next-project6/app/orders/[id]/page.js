import { notFound } from "next/navigation";
import { getOrder } from "@/lib/orders-api";
import OrderStatus from "./OrderStatus";
export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `Order ${id}`, description: `Track Addis Eats order ${id}.` };
}
export default async function OrderPage({ params }) {
  const { id } = await params;
  const order = await getOrder(id);
  if (!order) notFound();
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Your order, at a glance</p>
        <h1>Order status</h1>
        <p className="lead">
          The server provides the first render; SWR checks for updated status
          every five seconds.
        </p>
      </section>
      <OrderStatus id={id} initialOrder={order} />
    </main>
  );
}
