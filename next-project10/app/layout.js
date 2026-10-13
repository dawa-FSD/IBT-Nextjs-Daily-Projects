import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Addis Eats | Ethiopian Food, Delivered",
    template: "%s | Addis Eats",
  },
  description:
    "Discover Ethiopian favorites, order your next meal, and enjoy Addis Eats.",
  openGraph: {
    title: "Addis Eats",
    description: "Ethiopian favorites, made for sharing.",
    type: "website",
    locale: "en_ET",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
