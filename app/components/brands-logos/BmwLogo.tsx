import Image from "next/image";
import React from "react";

export const BmwLogo = () => {
  return (
    <Image
      src={
        "https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg"
      }
      width={70}
      height={70}
      alt="BMW logo"
      className="lg:h-9 lg:w-28 h-8 w-24"
    />
  );
};
