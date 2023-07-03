import { db } from "@/database";
import OrderCar from "@/models/Order-Car";
import { NextResponse } from "next/server";

interface Params {
  orderId: string;
}

export const GET = async (request: Request, { params }: { params: Params }) => {
  const { orderId } = params;
  try {
    await db.connect();
    const order = await OrderCar.findById(orderId);

    if (!order) {
      await db.disconnect();
      return NextResponse.json(
        { message: `Order with id: ${OrderCar} not found` },
        { status: 404 }
      );
    }

    await db.disconnect();

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
};
