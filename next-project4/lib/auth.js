import "server-only";

import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();

  const userId = cookieStore.get("addis-eats-user")?.value;

  if (!userId) {
    return null;
  }

  return {
    userId,
  };
}
