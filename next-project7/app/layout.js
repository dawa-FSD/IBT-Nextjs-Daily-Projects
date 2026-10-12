import "./globals.css";
import FooterYear from "@/components/Footer";

export const metadata = {
  title: {
    default: "Addis Eats | Ethiopian Food",
    template: "%s | Addis Eats",
  },
  description: "Discover authentic Ethiopian dishes with Addis Eats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="/" className="brand">
            ADDIS EATS
          </a>
          <nav>
            <a href="/menu">Menu</a>
            <a href="/orders">My Orders</a>
            <a href="/kitchen">Kitchen</a>
            <a href="/signin">Sign in</a>
          </nav>
        </header>
        {children}
        <FooterYear />
      </body>
    </html>
  );
}
