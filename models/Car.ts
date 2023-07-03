import mongoose, { Model, Schema, model } from "mongoose";
import { ICar } from "../interfaces";

const carSchema = new Schema({
  title        : { type: String, required: true },
  slug         : { type: String, required: true },
  carType      : { type: String, required: true },
  acceleration : { type: Number, required: true },
  brand        : { type: String, required: true },
  doors        : { type: Number, required: true },
  dropOffDate  : { type: Date,   required: true },
  hp           : { type: Number, required: true },
  model        : { type: String, required: true },
  name         : { type: String, required: true },
  pickupDate   : { type: Date,   required: true },
  power        : { type: Number, required: true },
  pricePerDay  : { type: Number, required: true },
  topSpeed     : { type: Number, required: true },
  weight       : { type: Number, required: true },
  images: {
    red  : [{ type: String }],
    black: [{ type: String }],
    gray : [{ type: String }],
  },
  coverImage : { type: String, required: true },
  description: { type: String, required: true },
});

const Car: Model<ICar> = mongoose.models.Car || model("Car", carSchema);

export default Car;
