import { NextResponse } from "next/server";
import { createSession } from "@/lib/session";

const DEMO_USERS = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    name: "Demo Customer",
    email: "user@example.com",
    password: "password123",
    role: "customer",
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    name: "Demo Staff",
    email: "staff@example.com",
    password: "password123",
    role: "staff",
  },
];

function safeNext(value) {
  if (
    !value ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\")
  ) {
    return "/";
  }

  try {
    const url = new URL(value, "http://localhost");

    if (url.origin !== "http://localhost") return "/";

    return url.pathname + url.search + url.hash;
  } catch {
    return "/";
  }
}

export async function POST(request) {
  const formData = await request.formData();

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  const password = String(formData.get("password") ?? "");
  const next = safeNext(String(formData.get("next") ?? "/"));

  if (email.length > 255 || password.length < 1 || password.length > 128) {
    return new Response("Invalid email or password.", {
      status: 400,
    });
  }

  const user = DEMO_USERS.find(
    (item) => item.email === email && item.password === password,
  );

  if (!user) {
    return new Response("Invalid email or password. Please try again.", {
      status: 401,
    });
  }

  await createSession(user);

  return NextResponse.redirect(new URL(next, request.url), 303);
}
