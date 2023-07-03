import { db } from "@/database";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { jwt } from "@/utils";

export const POST = async (request: Request): Promise<NextResponse> => {
  const { email = "", password = "" } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      {
        message: "Email and password are required",
      },
      { status: 400, statusText: "Bad request" }
    );
  }

  await db.connect();
  const user = await User.findOne({ email }).lean();
  await db.disconnect();

  if (!user) {
    return NextResponse.json(
      {
        message: "Not found user with those credentials",
      },
      { status: 404, statusText: "Not found" }
    );
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    return NextResponse.json(
      {
        message: "Not found user with those credentials",
      },
      { status: 404, statusText: "Not found" }
    );
  }

  const accessToken = jwt.signJwtAccessToken(user);

  return NextResponse.json(
    {
      accessToken,
      ...user,
    },
    { status: 200, statusText: "Success" }
  );
};
