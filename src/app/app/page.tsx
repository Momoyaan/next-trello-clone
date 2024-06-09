import { isAuthenticated } from "@/lib/pocketbase";
import { redirect } from "next/navigation";

export const metadata = {
  title: "App",
  description: "Dashboard for your app",
};

export default async function Home() {
  if ((await isAuthenticated()) === false) {
    redirect("/");
  }
}
