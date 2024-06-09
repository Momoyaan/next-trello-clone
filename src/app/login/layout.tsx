import { isAuthenticated } from "@/lib/pocketbase";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if ((await isAuthenticated()) === true) {
    redirect("/app");
  }
  return (
    <main className="flex min-h-screen justify-center p-10">{children}</main>
  );
}
