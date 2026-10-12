import { ImageResponse } from "next/og";

export const alt = "Addis Eats — Authentic Ethiopian Cuisine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#102d25",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          color: "#d6a84f",
          fontSize: 26,
          letterSpacing: 8,
        }}
      >
        AUTHENTIC ETHIOPIAN CUISINE
      </div>

      <div
        style={{
          fontSize: 100,
          fontWeight: 800,
          marginTop: 25,
        }}
      >
        Addis Eats
      </div>

      <div style={{ fontSize: 32, marginTop: 18 }}>
        Discover the true taste of Ethiopia.
      </div>

      <div
        style={{
          marginTop: 35,
          width: 100,
          height: 7,
          background: "#d6a84f",
        }}
      />
    </div>,
    size,
  );
}
