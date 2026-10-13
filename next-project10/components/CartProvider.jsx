"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
const CartContext = createContext(null);
const STORAGE_KEY = "addis-eats-cart";
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(stored))
        setItems(
          stored.filter(
            (x) =>
              x &&
              typeof x.id !== "undefined" &&
              Number.isFinite(x.price) &&
              Number.isFinite(x.quantity) &&
              x.quantity > 0,
          ),
        );
    } catch {
      setItems([]);
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);
  const addItem = useCallback(
    (dish) =>
      setItems((prev) => {
        const found = prev.find((x) => x.id === dish.id);
        return found
          ? prev.map((x) =>
              x.id === dish.id
                ? { ...x, quantity: Math.min(99, x.quantity + 1) }
                : x,
            )
          : [
              ...prev,
              {
                id: dish.id,
                name: dish.name,
                price: dish.price,
                emoji: dish.emoji,
                tone: dish.tone,
                quantity: 1,
              },
            ];
      }),
    [],
  );
  const updateQuantity = useCallback(
    (id, quantity) =>
      setItems((prev) =>
        quantity < 1
          ? prev.filter((x) => x.id !== id)
          : prev.map((x) =>
              x.id === id ? { ...x, quantity: Math.min(99, quantity) } : x,
            ),
      ),
    [],
  );
  const removeItem = useCallback(
    (id) => setItems((prev) => prev.filter((x) => x.id !== id)),
    [],
  );
  const clearCart = useCallback(() => setItems([]), []);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const value = useMemo(
    () => ({
      items,
      ready,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      subtotal,
      count: items.reduce((n, x) => n + x.quantity, 0),
    }),
    [items, ready, addItem, updateQuantity, removeItem, clearCart, subtotal],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
