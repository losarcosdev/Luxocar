import { db, seedData } from "@/database";
import Car from "@/models/Car";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (): Promise<
  | NextResponse<{
      message: string;
    }>
  | undefined
> => {
  try {
    await db.connect();
    await Car.deleteMany();
    await User.deleteMany();
    await Car.insertMany(seedData.cars);
    await User.insertMany(seedData.users);
    await db.disconnect();
    return NextResponse.json({ message: "DB Populated" });
  } catch (error) {
    console.log(error);
    await db.disconnect();
  }
};
