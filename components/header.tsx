"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import WelcomeMsg from "@/components/welcome-msg";
import { Filters } from "@/components/filters";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-linear-to-br from-blue-700 to-[#00FFB2] rounded-2xl">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-4 border-b-[1.3px] border-neutral-400">
          <div className="flex items-center px-4 py-2 lg:px-14">
            <SidebarTrigger className="text-white" />
            <Separator
              orientation="vertical"
              className="mx-2  data-[orientation=vertical]:h-3"
            />
            <h1 className="text-white text-base font-medium">
              {(() => {
                if (pathname === "/") return "Overview";
                if (pathname.startsWith("/transactions")) return "Transactions";
                if (pathname.startsWith("/accounts")) return "Accounts";
                if (pathname.startsWith("/categories")) return "Categories";
                if (pathname.startsWith("/settings")) return "Settings";
                return "Dashboard";
              })()}
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start px-4 py-4 lg:px-14 pb-32">
          <WelcomeMsg />
          <Filters />
        </div>
      </div>
    </header>
  );
};