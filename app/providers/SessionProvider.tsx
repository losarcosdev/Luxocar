"use client";
import React, { ReactNode } from "react";
import { SessionProvider as NextSessionProvider } from "next-auth/react";

interface Props {
  children: ReactNode;
}

export const SessionProvider = ({ children }: Props) => {
  return <NextSessionProvider>{children}</NextSessionProvider>;
};
