const SITE_URL = "https://addiseats.et";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/menu"],
      disallow: ["/cart", "/checkout", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
