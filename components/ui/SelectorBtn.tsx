"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

interface Props {
  handleTypeOfCar: (value: string) => void;
  handleCarBrand: (value: string) => void;
}

export const SelectorBtn = ({ handleCarBrand, handleTypeOfCar }: Props) => {
  return (
    <>
      <Select onValueChange={handleTypeOfCar}>
        <SelectTrigger className="w-full lg:w-[280px] p-5 rounded-none hover:bg-slate-100 duration-75 hover:text-black backdrop-blur-[7px] bg-[#111111]/80">
          <SelectValue placeholder="Car Type" />
        </SelectTrigger>
        <SelectContent className="rounded-none shadow-none">
          <SelectGroup>
            <SelectLabel>Car Type</SelectLabel>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="sport">Sport</SelectItem>
            <SelectItem value="super-car">Super Car</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={handleCarBrand}>
        <SelectTrigger className="w-full lg:w-[280px] p-5 rounded-none hover:bg-slate-100 duration-75 hover:text-black backdrop-blur-[7px] bg-[#111111]/80">
          <SelectValue placeholder="Brands" />
        </SelectTrigger>
        <SelectContent className="rounded-none shadow-none">
          <SelectGroup>
            <SelectLabel>Brands</SelectLabel>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="audi">Audi</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="ferrari">Ferrari</SelectItem>
            <SelectItem value="lamborghini">Lamborghini</SelectItem>
            <SelectItem value="maserati">Maserati</SelectItem>
            <SelectItem value="mercedes-benz">Mercedes Benz</SelectItem>
            <SelectItem value="porsche">Porsche</SelectItem>
            <SelectItem value="rolls-royce">Rolls-Royce</SelectItem>
            <SelectItem value="tesla">Tesla</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
