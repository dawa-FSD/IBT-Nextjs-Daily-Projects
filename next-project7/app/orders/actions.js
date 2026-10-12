"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { cancelOwnOrder, createOrder } from "@/lib/orders";

export async function cancelOrder(formData) {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=%2Forders");
  }

  const parsed = z.string().uuid().safeParse(formData.get("orderId"));

  if (!parsed.success) {
    throw new Error("Invalid order ID.");
  }

  const cancelled = await cancelOwnOrder(session.userId, parsed.data);

  if (!cancelled) {
    throw new Error("Order not found, not yours, or no longer cancellable.");
  }

  revalidatePath("/orders");
}

export async function placeOrder(formData) {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=%2Fcheckout");
  }

  const parsed = z
    .object({
      dishId: z.string().min(1).max(100),
      quantity: z.coerce.number().int().min(1).max(20),
    })
    .safeParse({
      dishId: formData.get("dishId"),
      quantity: formData.get("quantity"),
    });

  if (!parsed.success) {
    throw new Error("Invalid order.");
  }

  await createOrder(session.userId, [
    {
      dishId: parsed.data.dishId,
      quantity: parsed.data.quantity,
    },
  ]);

  revalidatePath("/orders");
  redirect("/orders");
}
