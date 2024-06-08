"use server";

import { redirect } from "next/navigation";
import PocketBase from "pocketbase";
import { cookies } from "next/headers";

const pb = new PocketBase(process.env.POCKETBASE_URL);

export async function loginPocketBase(data: {
  email: string;
  password: string;
}) {
  const { token, record: model } = await pb
    .collection("users")
    .authWithPassword(data.email, data.password);

  const cookie = JSON.stringify({ token, model });

  cookies().set("pb_auth", cookie, {
    secure: true,
    path: "/",
    sameSite: "strict",
    httpOnly: true,
  });

  redirect("/app");
}

export async function logout() {
  pb.authStore.clear();
  cookies().delete("pb_auth");
  redirect("/");
}
