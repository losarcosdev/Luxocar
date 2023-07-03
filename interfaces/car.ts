export interface ICar {
  title       : string;
  slug        : string;
  carType     : string;
  acceleration: number;
  brand       : string;
  doors       : number;
  dropOffDate : Date;
  hp          : number;
  model       : string;
  name        : string;
  pickupDate  : Date;
  power       : number;
  pricePerDay : number;
  topSpeed    : number;
  weight      : number;
  images      : Images;
  coverImage  : string;
  description : string;
}

export interface CarResponse {
  slug        : string;
  _id         : string;
  name        : string;
  pricePerDay : number;
  images      : Images;
}

export interface SingleCarResponse {
  title       : string;
  images      : Images;
  _id         : string;
  slug        : string;
  carType     : string;
  acceleration: number;
  brand       : string;
  doors       : number;
  dropOffDate : string;
  hp          : number;
  model       : string;
  name        : string;
  pickupDate  : string;
  power       : number;
  pricePerDay : number;
  topSpeed    : number;
  weight      : number;
  __v         : number;
  coverImage  : string;
  description : string;
}

export interface Images {
  red  : string[];
  black: string[];
  gray : string[];
}