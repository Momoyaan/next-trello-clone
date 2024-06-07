import Nav from "@/components/dashboard/nav-bar";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[240px_1fr] lg:gap-8">
          <Sidebar />
          <div>
            {children}
          </div>
        </div>
      </div>
  </div>
  );
}