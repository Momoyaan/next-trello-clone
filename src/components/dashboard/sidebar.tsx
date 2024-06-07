"use client";
import {
  HomeIcon,
  InfoIcon,
  KanbanIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1">
        <nav className="grid items-start px-4 text-sm font-medium">
          <ul>
            <li>
              <Link
                href="/app"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                  pathname === "/app"
                    ? "bg-zinc-100 text-gray-900 dark:bg-zinc-800 dark:text-gray-50"
                    : ""
                }`}
                prefetch={false}
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/app/boards"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                  pathname === "/app/boards"
                    ? "bg-zinc-100 text-gray-900 dark:bg-zinc-800 dark:text-gray-50"
                    : ""
                }`}
                prefetch={false}
              >
                <KanbanIcon className="h-4 w-4" />
                Boards
              </Link>
            </li>
            <Accordion
              type="single"
              collapsible
              className="w-full gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Workspaces</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ul>
        </nav>
      </div>
    </div>
  );
}
