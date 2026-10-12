import "./globals.css";
import Footer from "./Footer";

export const metadata = {
  title: "Addis Eats",
  description: "Addis Eats food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
