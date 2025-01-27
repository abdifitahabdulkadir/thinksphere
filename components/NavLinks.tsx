import { chats } from "@/constants/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import UserProfile from "./shared/UserProfile";
import SidebarItem from "./SidebarItem";
import { SheetClose } from "./ui/sheet";

interface NavLinksProps {
  isMobile?: boolean;
}
export default function NavLinks({ isMobile = false }: NavLinksProps) {
  return (
    <div
      className={cn("bg-dark-gray relative flex h-full w-full flex-col pt-16")}
    >
      <div className="custom-scrollbar h-0 w-full grow overflow-y-auto px-4 py-10">
        <button className="border-light-gray flex h-fit w-full items-center justify-start gap-4 rounded-[6px] border bg-transparent px-5 py-3 text-white outline-hidden">
          <Image
            src={"/icons/plus.svg"}
            alt="plus icon"
            width={10}
            height={10}
            className="object-contain"
          />
          <span className="text-xs lg:text-sm">New chat</span>
        </button>
        <div className="flex w-full flex-col gap-y-3 py-5">
          {chats.map((item, index) => {
            const contnet = (
              <SidebarItem key={index} iconUrl={item.icon} text={item.title} />
            );
            return isMobile ? (
              <SheetClose asChild key={index}>
                {contnet}
              </SheetClose>
            ) : (
              contnet
            );
          })}
        </div>
      </div>
      <div className="border-light-gray flex w-full flex-col gap-y-2 border-t px-3 py-4">
        <UserProfile />
      </div>
    </div>
  );
}
