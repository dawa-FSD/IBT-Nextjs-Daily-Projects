"use client";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
export default function OrderStatus({ id, initialOrder }) {
  const { data, error, isValidating } = useSWR(`/api/orders/${id}`, fetcher, {
    fallbackData: initialOrder,
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });
  if (error && !data)
    return (
      <p className="error" role="alert">
        Could not load order status. Please refresh and try again.
      </p>
    );
  return (
    <section className="panel">
      <div className="dish-top">
        <div>
          <p className="eyebrow">Order #{data.id}</p>
          <h2>{data.status}</h2>
        </div>
        <span className="status">
          {isValidating ? "Checking…" : "Live status"}
        </span>
      </div>
      <hr className="divider" />
      <p>
        <strong>Customer:</strong> {data.customer}
      </p>
      <p>
        <strong>Order total:</strong> {data.total.toLocaleString("en-ET")} ETB
      </p>
      <p className="muted small">
        Automatically checks for updates every 5 seconds. This sample uses
        in-memory data, so it will not change status unless the data source is
        updated.
      </p>
      {error && (
        <p className="notice">
          Showing the last available order information; refresh temporarily
          failed.
        </p>
      )}
    </section>
  );
}
