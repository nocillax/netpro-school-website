"use server";

import { cookies } from "next/headers";
import { adminUsers } from "@/data/users";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const user = adminUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const cookieStore = await cookies();
    cookieStore.set("admin_token", "true", {
      path: "/",
      httpOnly: false, // We need to read it client-side for the edit overlays!
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return { success: true };
  }

  return { success: false, error: "Invalid username or password" };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
}
