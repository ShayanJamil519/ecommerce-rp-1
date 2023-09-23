import { connectDb } from "../../../../DBConfig/connectDB";
import Product from "../../../../models/productModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const product = await Product.create(reqBody);
    const response = NextResponse.json({
      message: "Product created successfully!",
      product
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
