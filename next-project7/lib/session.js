import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "addis_eats_session";
const SESSION_DURATION = 60 * 60 * 24 * 7;

function getSecret() {
  if (process.env.DEMO_SESSION_SECRET) {
    return process.env.DEMO_SESSION_SECRET;
  }

  if (process.env.NODE_ENV !== "production") {
    return "local-demo-secret-change-before-deployment";
  }

  throw new Error("DEMO_SESSION_SECRET is required.");
}

function sign(value) {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

export async function createSession(user) {
  const now = Math.floor(Date.now() / 1000);

  const payload = Buffer.from(
    JSON.stringify({
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      exp: now + SESSION_DURATION,
    }),
  ).toString("base64url");

  const value = `${payload}.${sign(payload)}`;
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;

  if (!value) return null;

  try {
    const [payload, signature, extra] = value.split(".");

    if (!payload || !signature || extra !== undefined) {
      return null;
    }

    const expected = Buffer.from(sign(payload));
    const received = Buffer.from(signature);

    if (
      expected.length !== received.length ||
      !timingSafeEqual(expected, received)
    ) {
      return null;
    }

    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    );

    if (
      !session.userId ||
      !session.email ||
      !session.name ||
      !["customer", "staff"].includes(session.role) ||
      !Number.isInteger(session.exp) ||
      session.exp <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    return {
      userId: session.userId,
      email: session.email,
      name: session.name,
      role: session.role,
    };
  } catch {
    return null;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
