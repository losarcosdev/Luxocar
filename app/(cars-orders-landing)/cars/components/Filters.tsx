"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SelectorBtn } from "@/components/ui/SelectorBtn";

interface Filters {
  brand: string;
  carType: string;
}

export const Filters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    brand: "",
    carType: "",
  });

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const updateSearchParams = useCallback(
    (brand: string, carType: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if (brand) {
        searchParams.set("brand", brand);
      } else {
        searchParams.delete("brand");
      }

      if (carType) {
        searchParams.set("carType", carType);
      } else {
        searchParams.delete("carType");
      }

      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;

      router.push(newPathname);
    },
    [router]
  );

  useEffect(() => {
    updateSearchParams(filters.brand, filters.carType);
  }, [filters.brand, filters.carType, updateSearchParams]);

  return (
    <div className="z-10 w-fit">
      <h1 className="text-5xl text-white tracking-wider text-center lg:text-left">
        Our fleet
      </h1>
      <p className="text-lg text-[#c0c0c0] font-sans text-center lg:text-left">
        Our meticulously curated collection showcases a range of exceptional
        vehicles, designed to elevate your driving experience to new heights.
      </p>
      {/* Filters */}
      <form className="text-white pt-6 flex gap-4 flex-wrap justify-center lg:justify-normal">
        <SelectorBtn
          handleCarBrand={(value) => handleChange("brand", value)}
          handleTypeOfCar={(value) => handleChange("carType", value)}
        />
        <button
          className="p-2 text-black text-center bg-white w-full lg:w-[150px]"
          onClick={() => router.push("/cars")}
        >
          Clear filters
        </button>
      </form>
    </div>
  );
};
