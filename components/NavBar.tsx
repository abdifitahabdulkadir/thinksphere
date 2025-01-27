"use client";

import { PanelLeft } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import { useSideBarToogle } from "./SidBarToggleProvider";

export default function NavBar() {
  const { toggle } = useSideBarToogle();
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between gap-2 px-2 py-2 pb-2">
      <MobileSidebar />
      <PanelLeft
        onClick={toggle}
        className="mt-1 ml-2 size-[30px] cursor-pointer text-white transition-all duration-300 hover:scale-[1.1] max-md:hidden"
      />
      <div className="mr-5 flex items-center gap-6">
        <button
          title="share the link"
          className="border-darker hover:bg-dark-gray cursor-pointer rounded-full border bg-transparent px-3 py-2 text-white transition-all duration-200"
        >
          Share
        </button>
      </div>
    </div>
  );
}
