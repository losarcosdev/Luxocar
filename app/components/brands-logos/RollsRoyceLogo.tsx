import Image from "next/image";
import React from "react";

export const RollsRoyceLogo = () => {
  return (
    <Image
      src={
        "https://upload.wikimedia.org/wikipedia/commons/archive/5/52/20220309153359%21Rolls-Royce_Motor_Cars_logo.svg"
      }
      width={50}
      height={50}
      alt="BMW logo"
      className="lg:h-12 lg:w-28 h-8 w-24 hidden lg:block"
    />
  );
};
