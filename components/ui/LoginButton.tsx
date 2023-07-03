"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import { NavigationMenu } from "./NavigationMenu";

export const LoginButton = () => {
  const session = useSession();

  if (session.data && session.data.user) {
    return <NavigationMenu signOut={signOut} name={session.data.user.name} />;
  }

  return (
    <button
      onClick={() => signIn()}
      className="text-gray-100 bg-[#131313] hover:opacity-80 duration-200 py-2 w-[130px] border-[#2b2b2b] border-[1px] text-center active:scale-95 tracking-wider"
    >
      LOGIN
    </button>
  );
};
