import { getDishes } from "../../menu/data";

export async function GET() {
  try {
    const dishes = await getDishes();

    return Response.json({
      success: true,
      count: dishes.length,
      data: dishes,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to fetch dishes.",
      },
      {
        status: 500,
      },
    );
  }
}
