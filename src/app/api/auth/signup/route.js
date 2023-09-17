import { connectDb } from "../../../../DBConfig/connectDB";
import User from "../../../../models/userModel"
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, phone, password } = reqBody;
    const userExists = await User.findOne({ email });
    if (userExists) {
     return NextResponse.json({
        error: "User already exists",
      });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      name,
      email,
      phone,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User created successfully!",
      success: true,
      user: savedUser,
    });
  } catch (error) {
      return NextResponse.json({ error: "Internal Server Error" });
  }
}
connectDb();
