import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "App",
  description: "Dashboard for your app",
};

export default function Home() {
  const cookie = cookies().get("pb_auth");

  if (!cookie) {
    redirect("/");
  }
}
