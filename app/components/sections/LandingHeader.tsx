import Image from "next/image";

export const LandingHeader = () => {
  return (
    <header className="flex justify-center gap-6 items-center">
      {/* Desktop version */}
      <div className="hidden lg:block">
        <Image
          alt="Rolls Royce Image"
          src={"/l2ju682p.bmp"}
          width={700}
          height={700}
        />
      </div>
      <div className="relative hidden lg:flex">
        <h1 className="text-[#161616] tracking-wider text-[14rem] flex flex-col p-0 select-none">
          LUXURY <span>CARS</span>
        </h1>
        <h2 className="text-white tracking-wider text-7xl absolute top-48 left-7">
          Embrace the Extraordinary and discover Our Luxe Car Rental Oasis
        </h2>
      </div>
      {/* Mobile version */}
      <div className="lg:hidden py-20">
        <h1 className="text-[#161616] tracking-wider text-9xl select-none overflow-hidden text-center">
          LUXURY
        </h1>
        <h2 className="text-white tracking-wider text-4xl lg:text-7xl lg:absolute lg:top-48 lg:left-7 text-center lg:text-left">
          Embrace the Extraordinary and discover Our Luxe Car Rental Oasis
        </h2>
        <h1 className="text-[#161616] tracking-wider text-9xl select-none overflow-hidden text-center">
          CARS
        </h1>
      </div>
    </header>
  );
};
