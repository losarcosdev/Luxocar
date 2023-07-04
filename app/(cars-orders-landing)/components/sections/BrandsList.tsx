import {
  TeslaLogo,
  AudiLogo,
  BmwLogo,
  PorscheLogo,
  MercedesBenzLogo,
  MaseratiLogo,
  RollsRoyceLogo,
} from "../brands-logos";

export const BrandsList = () => {
  return (
    <div className="text-white px-16 py-10 border-t-[#232323] border-l-0 border-r-0 border-b-[#232323] border-[1px] bg-[#111111] flex items-center justify-between">
      <TeslaLogo />
      <AudiLogo />
      <BmwLogo />
      <PorscheLogo />
      <MercedesBenzLogo />
      <MaseratiLogo />
      <RollsRoyceLogo />
    </div>
  );
};
