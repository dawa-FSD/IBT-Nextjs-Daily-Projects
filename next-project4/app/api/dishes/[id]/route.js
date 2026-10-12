import { dishes } from "../../../../data/dishes";

export async function GET(request, { params }) {
  const { id } = await params;

  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    return Response.json(
      {
        error: {
          message: "Dish not found.",
        },
      },
      { status: 404 },
    );
  }

  return Response.json({
    data: dish,
  });
}
