import Image from "next/image";

export const MaseratiLogo = () => {
  return (
    <Image
      src={
        "https://www.maserati.com/content/dam/maserati/international/logo/maserati_logo_white.svg"
      }
      width={100}
      height={100}
      alt="Maserati logo"
      className="lg:h-12 lg:w-28 h-8 w-24 hidden lg:block"
    />
  );
};
