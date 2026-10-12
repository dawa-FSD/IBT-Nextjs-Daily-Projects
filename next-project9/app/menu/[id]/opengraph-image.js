import { ImageResponse } from "next/og";
import { getDishById } from "@/lib/dishes";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          background: "#102d25",
          color: "#ffffff",
          fontSize: 64,
        }}
      >
        Addis Eats
      </div>,
      size,
    );
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        width: "100%",
        height: "100%",
        background: "#102d25",
        color: "#ffffff",
      }}
    >
      <div style={{ fontSize: 26, color: "#d6a84f" }}>
        ADDIS EATS · ETHIOPIAN MENU
      </div>

      <div
        style={{
          fontSize: 88,
          fontWeight: 800,
          marginTop: 28,
        }}
      >
        {dish.name}
      </div>

      <div style={{ fontSize: 42, marginTop: 20 }}>{dish.price} ETB</div>

      <div style={{ fontSize: 25, marginTop: 20 }}>
        Authentic Ethiopian Cuisine
      </div>
    </div>,
    size,
  );
}
