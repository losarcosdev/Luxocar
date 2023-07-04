import Image from "next/image";

export const MercedesBenzLogo = () => {
  return (
    <Image
      src={
        "https://www.mercedes-benz.com/content/dam/brandhub/global/logos/logo_footer.svg"
      }
      width={100}
      height={100}
      alt="Mercedes Benz logo"
      className="lg:h-12 lg:w-28 h-8 w-24 hidden lg:block"
    />
  );
};
