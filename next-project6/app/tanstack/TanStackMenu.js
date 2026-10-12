"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { addToCart } from "@/lib/cart-api";
export default function TanStackMenu() {
  const queryClient = useQueryClient();
  const { data, error, isPending } = useQuery({
    queryKey: ["dishes"],
    queryFn: () => fetcher("/api/dishes?page=1"),
    staleTime: 30_000,
  });
  const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  if (isPending) return <p role="status">Loading dishes…</p>;
  if (error)
    return <p className="error">Could not load dishes. Please try again.</p>;
  const items = data?.data || [];
  return (
    <section>
      <div className="notice">
        Showing the first page of dishes to keep this example focused on query
        caching and mutation flow.
      </div>
      {mutation.isError && <p className="error">{mutation.error.message}</p>}
      {mutation.isSuccess && (
        <p className="notice">
          Dish added successfully. Related cart queries have been invalidated.
        </p>
      )}
      <div className="cards">
        {items.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <div className="dish-top">
              <span className="dish-icon" aria-hidden="true">
                🍲
              </span>
              <span className="pill">{dish.category}</span>
            </div>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <div className="price">
              {dish.price.toLocaleString("en-ET")} ETB
            </div>
            <button
              className="button"
              style={{ marginTop: 16 }}
              type="button"
              disabled={mutation.isPending}
              onClick={() => mutation.mutate(dish)}
            >
              {mutation.isPending ? "Adding…" : "Add to cart"}
            </button>
          </article>
        ))}
      </div>
      <p className="muted small" style={{ marginTop: 18 }}>
        Query key: <code>["dishes"]</code> · Fresh for 30 seconds · Unused cache
        retained for 5 minutes by default configuration.
      </p>
    </section>
  );
}
