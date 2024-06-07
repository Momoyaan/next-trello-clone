import Link from "next/link";
import { ProfileDropdown } from "./profile-dropdown";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavigationMenuDemo } from "./nav-menu";
import { Button } from "../ui/button";
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2">Yunyun</a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <NavigationMenuDemo></NavigationMenuDemo>
            <Button>Create</Button>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ProfileDropdown></ProfileDropdown>
                </TooltipTrigger>
                <TooltipContent>Account</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </div>
      </div>
    </header>
  );
}
