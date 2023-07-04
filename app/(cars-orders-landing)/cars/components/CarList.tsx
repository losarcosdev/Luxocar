"use client";
import { CarResponse } from "@/interfaces";
import { CarCard } from "./CarCard";

interface Props {
  cars: CarResponse[];
}

export const CarList = ({ cars }: Props) => {
  return (
    <div className="flex gap-5 flex-wrap z-50">
      {/* Car */}

      {cars.map(({ images, ...rest }) => (
        <CarCard
          image={images.black[1] || images.red[1] || images.gray[1]}
          key={rest.name}
          pricePerDay={rest.pricePerDay}
          name={rest.name}
          slug={rest.slug}
        />
      ))}
    </div>
  );
};
