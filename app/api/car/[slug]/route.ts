import { db } from "@/database";
import Car from "@/models/Car";
import { NextResponse } from "next/server";

interface Params {
  slug: string;
}

export const GET = async (request: Request, { params }: { params: Params }) => {
  const { slug } = params;

  try {
    await db.connect();
    const car = await Car.findOne({ slug });

    if (!car) {
      await db.disconnect();
      return NextResponse.json(
        { message: `Car with Slug: ${slug} not found` },
        { status: 404 }
      );
    }

    await db.disconnect();

    console.log(car);

    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
};
