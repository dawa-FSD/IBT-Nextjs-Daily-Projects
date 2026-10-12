# 🍽️ Addis Eats — Making the Web Discoverable

**A Modern Ethiopian Food Discovery Application**

Addis Eats is a modern food discovery web application built with Next.js App Router. It showcases traditional Ethiopian dishes and implements professional SEO, social sharing previews, structured data, canonical URLs, and dynamic sitemap generation.

## 📌 Project Overview

The goal of this mini-project is to make Addis Eats discoverable by search engines and present attractive, accurate previews when website links are shared on social media.

### Key Features

- **SEO Metadata:** A global metadata configuration with a reusable title template.
- **Dynamic Metadata:** Unique titles and descriptions generated from individual dish records.
- **Open Graph Images:** Social sharing previews generated at 1200 × 630 pixels.
- **Twitter Cards:** Large image previews for supported social platforms.
- **Structured Data:** JSON-LD using Schema.org `MenuItem` data.
- **Dynamic Sitemap:** Automatically generates public dish URLs from application data.
- **Robots Rules:** Defines crawling rules for public and private application routes.
- **Canonical URLs:** Helps search engines identify the preferred URL for a page.
- **Responsive UI:** A clean, modern interface designed for desktop and mobile devices.

## 🛠️ Technologies Used

- Next.js App Router
- React
- JavaScript
- CSS3
- Schema.org JSON-LD
- Open Graph metadata
- Twitter Card metadata
- Next.js Metadata API

## 📂 Project Structure

```text
addis-eats/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── opengraph-image.js
│   ├── sitemap.js
│   ├── robots.js
│   ├── menu/
│   │   ├── page.js
│   │   └── [id]/
│   │       ├── page.js
│   │       └── opengraph-image.js
│   ├── cart/
│   │   └── page.js
│   └── checkout/
│       └── page.js
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── lib/
│   └── dishes.js
├── public/
│   └── images/
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd addis-eats
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the production URL

Update the production URL in the root metadata, sitemap, robots configuration, and dish metadata to match your actual deployed domain.

Example:

```javascript
const SITE_URL = "https://your-production-domain.com";
```

Use the same verified production domain consistently throughout the application.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
```

If the build succeeds, run:

```bash
npm start
```

## 🔍 SEO Implementation

### 1. Global Metadata

The root layout defines `metadataBase`, a default title, and a reusable title template.

Example:

```javascript
export const metadata = {
  metadataBase: new URL("https://your-production-domain.com"),
  title: {
    default: "Addis Eats | Ethiopian Cuisine",
    template: "%s | Addis Eats",
  },
};
```

### 2. Dynamic Dish Metadata

The dish detail route uses `generateMetadata()` to generate a title, description, canonical URL, and social sharing metadata from the selected dish record.

Example route:

```text
/menu/1
/menu/2
/menu/3
```

Each dish receives metadata that corresponds to its own content.

### 3. Open Graph Images

The application generates social preview images using Next.js `ImageResponse`.

- Main website preview: `/opengraph-image`
- Individual dish preview: `/menu/[id]/opengraph-image`

The generated images use a 1200 × 630 pixel layout.

### 4. Structured Data

Each dish page includes JSON-LD with the following properties:

- `@context`
- `@type`
- `name`
- `description`
- `image`
- `offers.price`
- `offers.priceCurrency`

The dish name and price must match the information displayed on the page.

### 5. Sitemap

The sitemap is generated dynamically from the application's dish records.

```text
/sitemap.xml
```

It includes public pages and dish details while excluding private routes such as the cart and checkout.

### 6. Robots Rules

The robots configuration is available at:

```text
/robots.txt
```

It defines crawler access rules and identifies the sitemap location. These rules are not a replacement for authentication or authorization.

### 7. Canonical URLs

Canonical metadata identifies the preferred URL for a page. For a menu page that accepts search query parameters, the canonical URL can point to the main menu route:

```text
/menu?q=kitfo  →  /menu
```

Use this approach only when the filtered page is intended to share the same canonical URL as the main menu.

## 🧪 Testing and Verification

Run the production build:

```bash
npm run build
```

Verify the following endpoints locally:

| Feature           | Endpoint                  |
| ----------------- | ------------------------- |
| Home page         | `/`                       |
| Menu page         | `/menu`                   |
| Dish details      | `/menu/1`                 |
| Main social image | `/opengraph-image`        |
| Dish social image | `/menu/1/opengraph-image` |
| XML sitemap       | `/sitemap.xml`            |
| Robots rules      | `/robots.txt`             |

### External Validation Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results) — Validate supported structured data.
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — Inspect Open Graph metadata and link previews.
- [Google Search Console](https://search.google.com/search-console/about) — Monitor search indexing and sitemap status.

External tools require a publicly accessible deployed website for full production verification.

## ✅ Assignment Checklist

- [ ] Configure `metadataBase` with the production URL.
- [ ] Add a root title template.
- [ ] Provide unique, human-readable descriptions for all routes.
- [ ] Implement `generateMetadata()` for dish details.
- [ ] Generate a site-wide Open Graph image.
- [ ] Generate a separate Open Graph image for each dish.
- [ ] Include valid `MenuItem` JSON-LD.
- [ ] Generate the sitemap from real application data.
- [ ] Exclude private routes from the sitemap.
- [ ] Configure crawler rules in `robots.js`.
- [ ] Add canonical URLs where required.
- [ ] Test the production build and deployed page source.
- [ ] Verify social sharing previews.

## 🎯 Learning Outcomes

By completing this mini-project, I practiced:

- Implementing SEO with the Next.js Metadata API.
- Generating metadata dynamically from application records.
- Creating social sharing images with Next.js.
- Adding structured data with JSON-LD.
- Generating sitemaps and robots rules.
- Managing canonical URLs.
- Testing SEO output in rendered HTML and external validation tools.

## 👨‍💻 Project Information

**Project:** Addis Eats — Making the Web Discoverable  
**Program:** CodeOps — Full Stack Software Development  
**Institution:** IBT College  
**Module:** Frontend Development — React & Next.js  
**Focus:** SEO, Metadata, Social Sharing, Structured Data, and Sitemap Generation

---

_Built as part of the Addis Eats learning project to practice professional web development and search engine optimization._
