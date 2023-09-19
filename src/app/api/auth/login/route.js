import { connectDb } from "../../../../DBConfig/connectDB";
import User from "../../../../models/userModel"
import {  NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return NextResponse.json({  error: "User doesn't exists",  });
    }
    if ( !(await bcryptjs.compare(password, userExists.password))) {
      return NextResponse.json({ error: "Invalid password" });
    }

    //creating jwt token
    const tokenData = {
      id: userExists._id,
      email:userExists.email,
    };
    const token =  jwt.sign(tokenData, "abcdefgh91", {   expiresIn: "1d", });

    const response = NextResponse.json({
      message: "User logged in successfully!",
      success: true,
      user: userExists,
      token:tokenData
    });

      response.cookies.set("token", token, {
      httpOnly: false,
    });

  
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
