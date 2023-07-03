import { db } from "@/database";
import Car from "@/models/Car";
import OrderCar from "@/models/Order-Car";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const {
      pickUpAddress,
      userId = "",
      carId = "",
      dropOffDate = "",
      pickUpDate = "",
      total = 0,
    } = await request.json();

    if (!userId) {
      return NextResponse.json({
        status: 401,
        statusText: "You have to be logged in order to create an order",
      });
    }

    console.log({ carId });

    await db.connect();
    const user = await User.findOne({ _id: userId });
    const car = await Car.findOne({ _id: carId })
      .lean()
      .select("_id images pricePerDay name");

    if (!user || !car) {
      return NextResponse.json({
        status: 404,
        statusText: "User or car not found",
      });
    }

    const newOrderCar = new OrderCar({
      user,
      car,
      pickUpAddress,
      dropOffDate,
      pickUpDate,
      status: {
        isPayed: false,
      },
      total,
    });

    await newOrderCar.save();

    await db.disconnect();

    return NextResponse.json(newOrderCar, {
      status: 200,
      statusText: "Success",
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET = async () => {
  try {
    await db.connect();
    const orders = await OrderCar.find().lean();
    await db.disconnect();
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
  }
};
