"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import Link from "next/link";

export const SideMenu = () => {
  const session = useSession();

  return (
    <Sheet>
      <SheetTrigger className="px-4 py-1 border-[#2b2b2b] border-[1px] bg-[#242424]">
        Menu
      </SheetTrigger>
      <SheetContent className="w-60">
        <SheetHeader className="flex flex-col gap-3">
          {session.data?.user ? (
            <>
              <SheetTitle>Welcome <br />{session.data.user.name}!</SheetTitle>
              <Link href={"/orders"} className="p-2 bg-slate-100">
                Orders
              </Link>
              <button className="p-2 bg-slate-100" onClick={() => signOut()}>
                Logout
              </button>
            </>
          ) : (
            <>
              <SheetTitle>Welcome!</SheetTitle>
              <button className="p-2 bg-slate-100" onClick={() => signIn()}>
                Login
              </button>
            </>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
