let orders = [];

export function createOrder(order) {
  const newOrder = {
    id: `order-${Date.now()}`,
    ...order,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);

  return newOrder;
}

export function getOrderById(orderId) {
  return orders.find((order) => order.id === orderId);
}

export function cancelExistingOrder(orderId) {
  const order = orders.find((item) => item.id === orderId);

  if (!order) {
    return null;
  }

  order.status = "cancelled";
  order.cancelledAt = new Date().toISOString();

  return order;
}

export function getOrdersByOwner(ownerId) {
  return orders.filter((order) => order.ownerId === ownerId);
}
