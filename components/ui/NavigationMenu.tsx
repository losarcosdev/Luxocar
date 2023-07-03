"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu as NavigationMenuCdn,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

interface Props {
  signOut: any;
  name: string;
}

export const NavigationMenu = ({ name, signOut }: Props) => {
  return (
    <NavigationMenuCdn>
      <NavigationMenuList className="hover:bg-transparent z-[100]">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white bg-transparent p-1 hover:bg-transparent hover:text-white">
            {name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-32 font-sans">
              <li>
                <p className="text-center text-sm p-3 border-b-4 border-[1px] font-semibold">
                  Welcome {name}!
                </p>
              </li>
              <ListItem href="/orders" title="Orders" />
              <button className="w-full text-left">
                <ListItem title="Logout" onClick={() => signOut()} />
              </button>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuCdn>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
