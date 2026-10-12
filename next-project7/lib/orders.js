import "server-only";
import { randomUUID } from "node:crypto";
import { getDishById } from "@/lib/dishes";

const globalForOrders = globalThis;

if (!globalForOrders.addisEatsDemoOrders) {
  globalForOrders.addisEatsDemoOrders = [];
}

const orders = globalForOrders.addisEatsDemoOrders;

export async function getOrdersFor(userId) {
  return orders
    .filter((order) => order.userId === userId)
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .map(({ userId: _userId, ...order }) => order);
}

export async function cancelOwnOrder(userId, orderId) {
  const order = orders.find(
    (item) =>
      item.id === orderId &&
      item.userId === userId &&
      item.status === "Preparing",
  );

  if (!order) return false;

  order.status = "Cancelled";
  return true;
}

export async function createOrder(userId, items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Your order is empty.");
  }

  const validatedItems = [];

  for (const item of items) {
    if (
      !Number.isInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > 20
    ) {
      throw new Error("Invalid order quantity.");
    }

    const dish = await getDishById(item.dishId);

    if (!dish) {
      throw new Error("Dish not found.");
    }

    validatedItems.push({
      name: dish.name,
      dishId: dish.id,
      quantity: item.quantity,
      unitPrice: Number(dish.price),
    });
  }

  const total = validatedItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  const order = {
    id: randomUUID(),
    userId,
    status: "Preparing",
    total,
    created_at: new Date().toISOString(),
    items: validatedItems,
  };

  orders.push(order);

  return order.id;
}
