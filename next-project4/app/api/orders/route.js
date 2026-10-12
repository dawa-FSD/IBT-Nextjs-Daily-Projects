import { dishes } from "../../../data/dishes";
import { createOrder } from "../../../data/orders";
import { getSession } from "../../../lib/auth";
import { getFieldErrors, orderSchema } from "../../../lib/schema";

export async function POST(request) {
  const session = await getSession();

  if (!session) {
    return Response.json(
      {
        error: {
          message: "Authentication required.",
        },
      },
      { status: 401 },
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        error: {
          message: "Request body must be valid JSON.",
        },
      },
      { status: 400 },
    );
  }

  const result = orderSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        error: {
          message: "Validation failed.",
          fieldErrors: getFieldErrors(result.error),
        },
      },
      { status: 422 },
    );
  }

  const dish = dishes.find((item) => item.id === result.data.dishId);

  if (!dish) {
    return Response.json(
      {
        error: {
          message: "Selected dish was not found.",
          fieldErrors: {
            dishId: ["Selected dish does not exist."],
          },
        },
      },
      { status: 422 },
    );
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

  return Response.json(
    {
      data: order,
      message: "Order placed successfully.",
    },
    { status: 201 },
  );
}
