"use server";

import { revalidatePath } from "next/cache";

import { dishes } from "../data/dishes";
import { cancelExistingOrder, createOrder, getOrderById } from "../data/orders";

import { getSession } from "../lib/auth";

import { getFieldErrors, orderSchema } from "../lib/schema";

export async function placeOrder(previousState, formData) {
  const session = await getSession();

  if (!session) {
    return {
      status: 401,
      message: "You must be signed in before placing an order.",
      fieldErrors: {},
      orderId: null,
    };
  }

  const rawData = {
    customerName: formData.get("customerName"),
    phone: formData.get("phone"),
    area: formData.get("area"),
    dishId: formData.get("dishId"),
    quantity: formData.get("quantity"),
  };

  const result = orderSchema.safeParse(rawData);

  if (!result.success) {
    return {
      status: 422,
      message: "Please correct the highlighted fields.",
      fieldErrors: getFieldErrors(result.error),
      orderId: null,
    };
  }

  const dish = dishes.find((item) => item.id === result.data.dishId);

  if (!dish) {
    return {
      status: 422,
      message: "The selected dish does not exist.",
      fieldErrors: {
        dishId: ["Selected dish does not exist."],
      },
      orderId: null,
    };
  }

  const order = createOrder({
    ownerId: session.userId,
    customerName: result.data.customerName,
    phone: result.data.phone,
    area: result.data.area,
    dishId: dish.id,
    dishName: dish.name,
    quantity: result.data.quantity,
    total: dish.price * result.data.quantity,
  });

  revalidatePath("/menu");
  revalidatePath("/checkout");

  return {
    status: 201,
    message: "Your order was placed successfully.",
    fieldErrors: {},
    orderId: order.id,
  };
}

export async function cancelOrder(orderId) {
  const session = await getSession();

  if (!session) {
    return {
      status: 401,
      message: "Authentication required.",
    };
  }

  const order = getOrderById(orderId);

  if (!order) {
    return {
      status: 404,
      message: "Order not found.",
    };
  }

  if (order.ownerId !== session.userId) {
    return {
      status: 403,
      message: "You are not allowed to cancel this order.",
    };
  }

  if (order.status === "cancelled") {
    return {
      status: 409,
      message: "This order is already cancelled.",
    };
  }

  cancelExistingOrder(orderId);

  revalidatePath("/checkout");
  revalidatePath("/orders");

  return {
    status: 200,
    message: "Order cancelled successfully.",
  };
}
