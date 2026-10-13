"use client";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
export default function AddToCart({ dish }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  function click() {
    addItem(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }
  return (
    <button className="button button-gold" onClick={click}>
      {added
        ? "✓ Added to cart"
        : "Add to cart · " + dish.price.toLocaleString("en-ET") + " ETB"}
    </button>
  );
}
