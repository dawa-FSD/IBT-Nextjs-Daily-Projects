export async function addToCart(dish) {
  const response = await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dish),
  });
  if (!response.ok) throw new Error("Could not add this dish to the cart.");
  return response.json();
}
