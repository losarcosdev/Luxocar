import { CarResponse, SingleCarResponse } from "@/interfaces";
import { CarSlideShow } from "../components";
import { MakeOrder } from "./components";
import { PREFIX_API_URL } from "@/constants";

const getCar = async (slug: string): Promise<SingleCarResponse> => {
  const response = await fetch(`${PREFIX_API_URL}/api/car/${slug}`);
  const car: SingleCarResponse = await response.json();

  if (!car) throw new Error("Car not found");

  return car;
};

interface Props {
  params: {
    slug: string;
  };
}

const CarPage = async ({ params }: Props) => {
  const car = await getCar(params.slug);

  return (
    <section className="pt-10 px-3 lg:px-14 flex flex-col">
      <section className="relative flex flex-col gap-5">
        <header className="lg:h-[95vh]">
          <div className="bg-black-car h-[50vh]">
            <CarSlideShow images={car.images.black} />
          </div>
          <h1 className="text-6xl text-white tracking-wider text-center my-6">
            {car.name}
          </h1>
          <p className="text-white font-sans">{car.description}</p>
        </header>
        <h2 className="text-6xl text-white tracking-wider text-center my-6">
          {car.title}
        </h2>
        <img
          src={car.coverImage}
          alt={`Image of ${car.name}`}
          className="w-screen h-screen object-cover"
        />
        <div className="font-sans text-white flex flex-col gap-10 md:flex-row justify-around py-10">
          <div className="text-center">
            <p className="font-semibold text-lg">Car Power</p>
            <p className="font-extrabold text-6xl">
              {car.hp}
              <span className="font-light text-lg">hp</span>
            </p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">0km - 100km</p>
            <p className="font-extrabold text-6xl">
              {car.acceleration}
              <span className="font-light text-lg">s</span>
            </p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Top Speed</p>
            <p className="font-extrabold text-6xl">
              {car.topSpeed}
              <span className="font-light text-lg">km</span>
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-10 items-center justify-center h-screen">
        <h2 className="text-6xl text-center text-white tracking-wide">
          ORDER THE {car.name}
        </h2>
        <MakeOrder car={car} />
      </div>
    </section>
  );
};



export default CarPage;
