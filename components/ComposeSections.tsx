"use client";
import LeftSideBar from "./LeftSideBar";
import { cn } from "@/lib/utils";
import NavBar from "./NavBar";
import { ReactNode } from "react";
import { useSideBarToogle } from "./SidBarToggleProvider";

export default function ComposeSections({ children }: { children: ReactNode }) {
  const { isSidebarOpen } = useSideBarToogle();
  return (
    <main className={cn("w-full bg-MediumGray overflow-hidden   h-screen")}>
      <NavBar />
      <div className={cn("", isSidebarOpen ? "grid grid-cols-[20%_80%]" : "grid-cols-[1fr] sm:px-[50px]  md:px-[100px]")}>
        {isSidebarOpen && <LeftSideBar />}
        {children}
      </div>
    </main>
  );
}