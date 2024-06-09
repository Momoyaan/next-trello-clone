"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PocketBase from "pocketbase";

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

export async function registerPocketBase(data: {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}) {
  await pb.collection("users").create({
    email: data.email,
    password: data.password,
    passwordConfirm: data.passwordConfirm,
    name: data.name,
  });
}

export async function forgotPassword(data: { email: string }) {
  await pb.collection("users").requestPasswordReset(data.email);
}

export async function getAvatar() {
  const cookie = cookies().get("pb_auth");
  if (!cookie) {
    return null;
  }
  const userID = JSON.parse(cookie.value).model.id;
  const fileName = JSON.parse(cookie.value).model.avatar;
  const record = await pb.collection("users").getOne(userID);
  const url = pb.files.getUrl(record, fileName);
  return "http://" + url;
}

// export async function getUser(token: string) {
//   const { record, model } = await pb.authStore.get(token);
//   return { record, model };
// }

export async function getUserByEmail(email: string) {
  const record = await pb.collection("users").getOne(email);
  return record;
}

export async function isAuthenticated() {
  const cookie = cookies().get("pb_auth");
  if (!cookie) {
    return false;
  }
  return true;
}
