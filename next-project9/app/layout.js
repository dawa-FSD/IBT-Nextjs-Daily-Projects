import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://addiseats.et";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Addis Eats | Authentic Ethiopian Cuisine",
    template: "%s | Addis Eats",
  },

  description:
    "Discover authentic Ethiopian cuisine, explore traditional dishes, and find your next favorite meal with Addis Eats.",

  applicationName: "Addis Eats",
  category: "food",

  openGraph: {
    type: "website",
    siteName: "Addis Eats",
    title: "Addis Eats | Authentic Ethiopian Cuisine",
    description:
      "Explore Ethiopian favorites and discover the flavors of Addis Eats.",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Addis Eats — Authentic Ethiopian Cuisine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Addis Eats | Authentic Ethiopian Cuisine",
    description: "Discover traditional Ethiopian dishes with Addis Eats.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
