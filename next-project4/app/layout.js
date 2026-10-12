import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Addis Eats",
  description:
    "Authentic Ethiopian food ordering experience built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>© 2026 Addis Eats. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
