"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert";
import { signIn } from "next-auth/react";

interface Props {
  message: string;
}

export const NotLoggedInButton = ({ message }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80 text-gray-100 hover:opacity-80 duration-200 py-2 w-full text-center active:scale-95 tracking-wider mt-4">
          Order
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none rounded-none">
        <AlertDialogHeader>
          <AlertDialogTitle>You are not logged in!</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => signIn()}>Login</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
