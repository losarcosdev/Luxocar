"use client";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { usePathname } from "next/navigation";
import { SideMenu } from "./SideMenu";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop version */}
      <header className="items-center justify-between py-5 px-16 hidden lg:flex">
        <nav>
          <ul>
            <li>
              <Link
                href={"/  "}
                className={`p-5 pt-10 bg-[#131313] text-gray-100 text-center 
              tracking-wider text-xl border-[#2b2b2b] border-[1px] hover:opacity-80 duration-200`}
              >
                LUXOCAR
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-5 items-center justify-center font-normal text-base tracking-tighter text-[#c0c0c0]">
            <li>
              <Link
                href={"/"}
                className={`font-sans ${
                  pathname === "/" && "text-white font-semibold"
                } hover:text-white duration-200 transform hover:translate-x-1 inline-block`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href={"/cars"}
                className={`font-sans hover:text-white duration-200 transform hover:translate-x-1 inline-block ${
                  pathname === "/cars" && "text-white font-semibold"
                }`}
              >
                FLEET
              </Link>
            </li>
            <LoginButton />
          </ul>
        </nav>
      </header>
      {/*Mobile version */}
      <header className="lg:hidden p-5 text-gray-100 border-[#2b2b2b] border-[1px] flex flex-col bg-[#111111]">
        <Link href={"/"} className="text-center text-3xl">
          Luxocar
        </Link>
        <nav>
          <ul className="flex justify-center items-center gap-5 py-3 text-xl text-[#c0c0c0]">
            <li>
              <Link
                href={"/"}
                className={`${
                  pathname === "/" && "text-white"
                } hover:text-white duration-200 transform hover:translate-x-1 inline-block`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href={"/cars"}
                className={`hover:text-white duration-200 transform hover:translate-x-1 inline-block ${
                  pathname === "/cars" && "text-white"
                }`}
              >
                FLEET
              </Link>
            </li>
            <SideMenu />
          </ul>
        </nav>
      </header>
    </>
  );
};
