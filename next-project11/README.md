# 🍲 Addis Eats — Order Delivery Tracking

A modern Ethiopian food delivery tracking application built with **Next.js, React, and JavaScript**. Customers can track their order status, view a delivery map demonstration, review order history, and export order activity as a CSV file.

## 🚀 Features

- **Order Tracking:** View the current status of a food delivery.
- **Live Status Updates:** Receive order updates using Server-Sent Events (SSE).
- **Delivery Progress:** Follow the order through Preparing, Picked up, On the way, and Delivered.
- **Delivery Map:** View courier and destination markers around Bole, Addis Ababa.
- **Order Summary:** View order number, restaurant, order date, and total price in Ethiopian Birr (ETB).
- **Order History:** Review recorded order status changes.
- **CSV Export:** Download order history as a CSV file.
- **CSV Upload:** Select and preview a CSV file in the browser.
- **Relative Time:** Display how recently the order was updated.
- **Responsive Interface:** Organized tracking layout for a better user experience.

## 🛠️ Technologies Used

- Next.js — React framework
- React — Component-based user interface
- JavaScript — Application logic
- CSS — Application styling
- Server-Sent Events (SSE) — Live order status updates
- CSV — Order history export and file preview
- Intl API — Date, time, and ETB currency formatting

## 📁 Project Structure

```text
app/
├── api/
│   └── orders/
│       └── [id]/
│           └── stream/
├── track/
│   └── [id]/
│       ├── page.js
│       ├── TrackingClient.js
│       └── MapPanel.js
└── globals.css

lib/
├── orders.js
├── format.js
└── csv.js

public/
README.md
package.json
```

_Note: This is a representative structure. Your actual folders may differ._

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

If your terminal displays a different port, use the URL shown in the terminal.

## 🔎 Test Order Tracking

Open the demo tracking route:

```text
/track/AE-1042
```

The route displays the demo order when its ID matches the order configured in `lib/orders.js`.

The tracking interface includes order progress, connection status, delivery details, order history, and CSV tools.

## 📊 Order Status Flow

1. Preparing
2. Picked up
3. On the way
4. Delivered

Order status updates are handled by the tracking interface and its SSE endpoint.

## 📄 CSV Features

### Export

Use the **Export CSV** button to download the order history.

### Upload

Select a CSV file to preview its text in the browser. The current demo validates the file extension and size, then previews the contents. It does not import records into a database.

## 🗺️ Delivery Map Disclaimer

The map uses example coordinates around Bole, Addis Ababa. These markers are for demonstration purposes and do not represent actual courier GPS tracking.

## 💰 Currency and Time

- Currency: Ethiopian Birr (ETB)
- Time zone: Africa/Addis_Ababa
- Date and time formatting: JavaScript `Intl` API

## 🔐 Current Project Scope

This is a learning project. The current implementation uses demo order data. A production-ready application would require persistent order storage, authenticated access, secure order ownership checks, validated status transitions, and real courier location integration.

## 🎯 Learning Objectives

This project demonstrates practical use of:

- Next.js App Router and dynamic routes
- React state and effects
- Client and Server Components
- Suspense and asynchronous route parameters
- Server-Sent Events
- Date and currency formatting
- CSV file handling
- Reusable UI components
- Error handling and loading states

## 👨‍💻 Author

**Dawa Asfaw**

Full Stack Software Development Student

## 📜 License

This project is developed for educational and learning purposes.
