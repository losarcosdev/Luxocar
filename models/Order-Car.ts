import mongoose, { Schema, model, Model } from "mongoose";
import { IOrderCar } from "../interfaces";

const orderCarSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    car: {
      _id: { type: Schema.Types.ObjectId, ref: "Car", required: true },
      images: {
        red: [{ type: String }],
        black: [{ type: String }],
        gray: [{ type: String }],
      },
      pricePerDay: { type: Number, required: true },
      name: { type: String, required: true },
    },
    pickUpAddress: {
      address1: { type: String, required: true },
      address2: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      telephoneNumber: { type: String, required: true },
      additionalComments: { type: String },
    },
    pickUpDate: { type: Date, required: true },
    dropOffDate: { type: Date, required: true },
    total: { type: Number, required: true },
    status: {
      isPayed: { type: Boolean, required: true, default: false },
    },
    transactionId: { type: String },
  },
  {
    timestamps: true,
  }
);

const OrderCar: Model<IOrderCar> =
  mongoose.models.OrderCar || model("OrderCar", orderCarSchema);

export default OrderCar;
