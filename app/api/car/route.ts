import { db } from "@/database";
import Car from "@/models/Car";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const brand = url.searchParams.get("brand")?.toLowerCase();
  const carType = url.searchParams.get("carType")?.toLowerCase();

  try {
    await db.connect();

    let filter = {};

    if (brand && carType) {
      filter = { brand, carType };
    } else if (brand) {
      filter = { brand };
    } else if (carType) {
      filter = { carType };
    }

    const cars = await Car.find(filter)
      .lean()
      .select("_id slug images name pricePerDay");
    await db.disconnect();

    return NextResponse.json(cars);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
};
