import { db } from "@/database";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { jwt } from "@/utils";

export const POST = async (request: Request): Promise<NextResponse> => {
  const { email = "", password = "", name = "" } = await request.json();

  if (!email || !password || !name) {
    return NextResponse.json(
      {
        message: "Email,name and password are required",
      },
      { status: 400, statusText: "Bad request" }
    );
  }

  await db.connect();
  const user = await User.findOne({ email }).lean();

  if (user) {
    await db.disconnect();
    return NextResponse.json(
      {
        message: "User already exist",
      },
      { status: 400, statusText: "Bad request" }
    );
  }

  const newUser = await User.create({
    email,
    name,
    password: bcrypt.hashSync(password),
  });

  console.log(newUser);

  await db.disconnect();

  const accessToken = jwt.signJwtAccessToken({ ...newUser });

  return NextResponse.json(
    {
      accessToken,
      ...newUser,
    },
    { status: 200, statusText: "User created successfully" }
  );
};
