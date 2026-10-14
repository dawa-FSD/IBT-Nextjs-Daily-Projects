import { Suspense } from "react";
import TrackingClient from "./TrackingClient";
import { demoOrder } from "@/lib/orders";

export default function TrackingPage({ params }) {
  return (
    <Suspense
      fallback={
        <main className="tracking-page">
          <p>Loading order tracking...</p>
        </main>
      }
    >
      <TrackingContent params={params} />
    </Suspense>
  );
}

async function TrackingContent({ params }) {
  const { id } = await params;

  if (String(id) !== String(demoOrder.id)) {
    return (
      <main className="tracking-page">
        <h1>Order not found</h1>
        <p>Please check your order number and try again.</p>
      </main>
    );
  }

  return <TrackingClient order={demoOrder} />;
}
