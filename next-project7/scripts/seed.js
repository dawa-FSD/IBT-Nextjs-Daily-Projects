import "dotenv/config";
import argon2 from "argon2";
import pg from "pg";
import { randomUUID } from "node:crypto";

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: true }
      : false,
});

async function main() {
  const passwordHash = await argon2.hash("password123", {
    type: argon2.argon2id,
  });

  const users = [
    {
      id: "11111111-1111-4111-8111-111111111111",
      name: "Demo Customer",
      email: "user@example.com",
      role: "customer",
    },
    {
      id: "22222222-2222-4222-8222-222222222222",
      name: "Demo Staff",
      email: "staff@example.com",
      role: "staff",
    },
    {
      id: "33333333-3333-4333-8333-333333333333",
      name: "Second Customer",
      email: "user2@example.com",
      role: "customer",
    },
  ];

  for (const user of users) {
    await db.query(
      `INSERT INTO users (id, name, email, password_hash, role)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (email) DO NOTHING`,
      [user.id, user.name, user.email, passwordHash, user.role],
    );
  }

  const dishes = [
    ["doro-wot", "Doro Wot", "Ethiopian chicken stew with injera.", 400],
    ["tibs", "Tibs", "Sautéed Ethiopian-style meat.", 450],
    ["kitfo", "Kitfo", "Traditional Ethiopian minced beef dish.", 350],
    ["shiro", "Shiro", "Seasoned chickpea stew served with injera.", 250],
  ];

  for (const [id, name, description, price] of dishes) {
    await db.query(
      `INSERT INTO dishes (id, name, description, price)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (id) DO NOTHING`,
      [id, name, description, price],
    );
  }

  const firstOrder = await db.query(
    "SELECT id FROM orders WHERE user_id = $1 LIMIT 1",
    [users[0].id],
  );

  if (firstOrder.rowCount === 0) {
    const orderId = randomUUID();

    await db.query(
      `INSERT INTO orders (id, user_id, status, total)
       VALUES ($1, $2, 'Preparing', 400)`,
      [orderId, users[0].id],
    );

    await db.query(
      `INSERT INTO order_items (id, order_id, dish_id, quantity, unit_price)
       VALUES ($1, $2, $3, 1, 400)`,
      [randomUUID(), orderId, "doro-wot"],
    );
  }

  const secondOrder = await db.query(
    "SELECT id FROM orders WHERE user_id = $1 LIMIT 1",
    [users[2].id],
  );

  if (secondOrder.rowCount === 0) {
    const orderId = randomUUID();

    await db.query(
      `INSERT INTO orders (id, user_id, status, total)
       VALUES ($1, $2, 'Delivered', 450)`,
      [orderId, users[2].id],
    );

    await db.query(
      `INSERT INTO order_items (id, order_id, dish_id, quantity, unit_price)
       VALUES ($1, $2, $3, 1, 450)`,
      [randomUUID(), orderId, "tibs"],
    );
  }

  console.log("Seed complete.");
  console.log("Customer: user@example.com / password123");
  console.log("Staff: staff@example.com / password123");
  console.log("Second customer: user2@example.com / password123");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => db.end());
