import { dishes } from "../../../data/dishes";

export async function GET() {
  return Response.json({
    data: dishes,
    count: dishes.length,
  });
}
