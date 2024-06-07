import { ModeToggle } from "@/components/dark-mode";
import Link from "next/link";
import { Button } from "../ui/button";
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2">Yunyun</a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link
              href="/login"
            >
              <Button variant="outline">Login</Button>
            </Link>
          </div>
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
