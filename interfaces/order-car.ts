import { IUser } from "./user";

interface ICar{
  _id         : string;
  images      : Images;
  pricePerDay : number;
  name        : string;
}

interface IPickUpAddress {
  address1           : string;
  address2           : string;
  country            : string;
  city               : string;
  telephoneNumber    : string;
  additionalComments?: string;
}

export interface IOrderCar {
  _id?          : string;
  user          : IUser | string;
  car           : ICar;
  pickUpAddress : IPickUpAddress;
  pickUpDate    : Date;
  dropOffDate   : Date;
  status?       : Status;
  total         : number;
  transactionId : string;
}

export interface OrderCreatedResponse {
  _id:           string;
  user:          IUser | string;
  car:           ICar;
  pickUpAddress: IPickUpAddress;
  pickUpDate:    Date;
  dropOffDate:   Date;
  status:        Status;
  createdAt:     Date;
  updatedAt:     Date;
  __v:           number;
}

interface Images {
  red:   string[];
  black: string[];
  gray:  string[];
}

export interface Status {
  isPayed: boolean;
}
