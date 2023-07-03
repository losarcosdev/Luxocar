import { CarList, Filters } from "./components";
import axios from "axios";
import { PREFIX_API_URL } from "@/constants";

export const revalidate = 30;

const CarsPage = async ({ searchParams }: any) => {
  const brand = searchParams.brand || "";
  const carType = searchParams.carType || "";

  const { data: cars } = await axios.get(
    `${PREFIX_API_URL}/api/car/?carType=${carType}&brand=${brand}`
  );

  const NonCars = !Array.isArray(cars) || !cars.length;

  return (
    <section className="relative flex flex-col gap-5 py-10 px-3 lg:px-14">
      <Filters />
      <hr className="z-50 border-[#434343] my-6" />
      {NonCars ? (
        <h1 className="text-5xl text-white tracking-wider text-center my-[10px] z-50">
          Not found cars with that query,try with another param
        </h1>
      ) : (
        <CarList cars={cars} />
      )}

      <div className="flex flex-col justify-center items-center absolute left-[15%] right-[15%] top-16 z-0">
        <h2 className="text-[8rem] lg:text-[14rem] text-center inline-block text-[#161616] leading-none select-none">
          Our Luxury
        </h2>
        <h3 className="text-[8rem] lg:text-[14rem] text-center inline-block text-[#161616] leading-none select-none">
          Vehicles
        </h3>
      </div>
    </section>
  );
};

export default CarsPage;
