export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen justify-center p-10">{children}</main>
  );
}
