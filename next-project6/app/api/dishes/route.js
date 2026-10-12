import { searchDishes } from "@/lib/dishes";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() || "";
  const parsedPage = Number.parseInt(searchParams.get("page") || "1", 10);
  const page = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const limit = 3;
  const filtered = searchDishes(query);
  const totalPages = Math.max(1, Math.ceil(filtered.length / limit));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * limit;
  return Response.json({
    data: filtered.slice(start, start + limit),
    page: safePage,
    limit,
    total: filtered.length,
    totalPages,
  });
}
