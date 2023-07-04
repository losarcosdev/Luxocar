import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  image: string;
  pricePerDay: number;
  slug: string;
}

export const CarCard = ({ image, name, pricePerDay, slug }: Props) => {
  return (
    <div
      className="w-full h-auto p-5 border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80 flex flex-col gap-3 z-40"
      key={name}
    >
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white tracking-wide text-xl lg:text-3xl">
        <p>{name}</p>
        <p>Day/${pricePerDay}</p>
      </div>

      <img
        alt={`Image of ${name}`}
        src={image}
        className="mx-auto object-cover"
      />
      <Link
        href={`/cars/${slug}`}
        className="mx-auto text-gray-100 bg-[#131313] hover:opacity-80 duration-200 py-2 w-[90%] lg:w-[35%] border-[#2b2b2b] border-[1px] text-center active:scale-95 tracking-wider text-xl transition-[opacity,transform]"
      >
        SELECT
      </Link>
    </div>
  );
};
