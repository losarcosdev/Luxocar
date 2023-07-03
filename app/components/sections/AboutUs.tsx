import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BrandsList } from "./BrandsList";

export const AboutUs = () => {
  return (
    <section>
      <section className="pt-36 lg:py-36 text-white flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col gap-5 p-3 lg:pl-8">
          <h3 className="text-5xl lg:text-7xl tracking-wider">
            Leaders in the automative industry
          </h3>
          <p className="font-sans text-base text-[#c0c0c0] text-left">
            At Luxocar, our passion for excellence drives everything we do. From
            our early days to the present, we have been committed to providing
            our customers with an unparalleled experience in luxury car rental.
            We strive to exceed expectations in terms of quality, service, and
            vehicle selection. Our goal is to make every customer feel special
            and enjoy an unforgettable journey with our exclusive automobiles.
            Trust us to fulfill your dreams of driving the luxury car of your
            choice
          </p>
        </div>
        <Image
          src={"/26900.jpg"}
          width={900}
          height={950}
          alt="Audi R8 Image"
          className="h-[300px] lg:h-screen object-cover md:w-full lg:w-[50vw]"
        />
      </section>
      <BrandsList />
      <section className="lg:py-36 text-white flex flex-col lg:flex-row items-center gap-3 lg:gap-6 lg:px-8">
        <Image
          src={"/rolls-royce-wallpaper.jpg"}
          width={800}
          height={950}
          alt="Audi R8 Image"
          className="h-[300px] lg:h-[500px] object-cover md:w-full lg:w-[60vw]"
        />
        <div className="flex flex-col gap-5 p-3">
          <h3 className="text-5xl lg:text-7xl tracking-wider">
            Our Exceptional Fleet
          </h3>
          <div className="flex flex-col gap-10">
            <p className="font-sans text-base text-[#c0c0c0] text-left flex-grow">
              At Luxocar, we take pride in offering an exceptional fleet of
              carefully selected luxury vehicles. Each car in our collection has
              been chosen for its performance, design, and prestige. From
              elegant sedans to powerful sports cars and luxurious SUVs, we have
              a wide range of options to cater to the most discerning tastes.
              Our cars are meticulously maintained and inspected to ensure the
              utmost customer satisfaction. Let us assist you in finding the
              perfect car that suits your needs and elevates your driving
              experience to a whole new level.
            </p>
            <button className="active:scale-95 text-gray-100 bg-[#131313] hover:opacity-80 duration-200 p-3 border-[#2b2b2b] border-[1px] w-fit font-sans flex gap-5 items-center justify-between">
              Fleet
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
