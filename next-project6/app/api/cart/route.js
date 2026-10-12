import { cart } from "@/lib/cart";
import { dishes } from "@/lib/dishes";
export async function GET() {
  return Response.json(cart);
}
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid JSON body" }, { status: 400 });
  }
  const dish = dishes.find((item) => item.id === Number(body?.id));
  if (!dish)
    return Response.json({ message: "Dish not found" }, { status: 400 });
  cart.push(dish);
  return Response.json(
    { message: "Dish added to cart", cart },
    { status: 201 },
  );
}
export async function DELETE(request) {
  cart.length = 0;
  return Response.json({ message: "Cart cleared", cart });
}
