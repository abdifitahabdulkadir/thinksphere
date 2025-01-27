import Image from "next/image";
import React from "react";

export default function ChatItem({ icon, message, role }: ChatItemI) {
  if (role == "user") {
    return (
      <div className="bg-dark-gray grid w-fit max-w-5xl grid-cols-[5%__90%] items-center gap-2 rounded-sm px-4 py-5">
        <Image
          src={icon}
          alt="user icon"
          width={30}
          height={30}
          quality={100}
          className="object-contain"
        />
        <p className="text-[15px] font-normal text-white">{message}</p>
      </div>
    );
  }
  return (
    <div className="flex w-full max-w-5xl items-center gap-3 py-6 pl-5 md:pl-[100px]">
      <div className="grid w-full grid-cols-[5%__1fr] items-start gap-6 md:gap-1">
        <div className="bg-dark-green flex size-[30px] items-center justify-center rounded-xs">
          <Image
            src={icon}
            alt="ai icon"
            width={22}
            height={22}
            quality={100}
            className="size-[22px] object-contain"
          />
        </div>
        <p className="mt-6 grow pr-5 text-[15px] leading-9 font-normal text-white">
          {message}
        </p>
        <div className="border-darker col-span-full my-2 border-t-2" />
        <div className="col-span-4 ml-10 flex w-full items-center gap-2">
          <button className="hover:bg-dark-gray group rounded-md px-3 py-2 transition-all duration-200">
            <Image
              src={"/icons/like.svg"}
              alt="like button svg icon"
              width={16}
              height={16}
              quality={100}
              className="size-[16px] transform transition-all duration-200 group-hover:scale-[1.2]"
            />
          </button>
          <button className="hover:bg-dark-gray group cursor-pointer rounded-md px-3 py-2 transition-all duration-200">
            <Image
              src={"/icons/dislike.svg"}
              alt="like button svg icon"
              width={16}
              height={16}
              quality={100}
              className="size-[16px] transform transition-all duration-200 group-hover:scale-[1.2]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
