import { orders } from "@/lib/orders";
export async function GET(_request, { params }) {
  const { id } = await params;
  const order = orders[id];
  if (!order)
    return Response.json({ message: "Order not found" }, { status: 404 });
  return Response.json(order, { headers: { "Cache-Control": "no-store" } });
}
