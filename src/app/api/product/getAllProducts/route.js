import { connectDb } from "../../../../DBConfig/connectDB";
import Product from "../../../../models/productModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const product = await Product.find();
    if (product.length > 0) {
      const response = NextResponse.json(product);
      return response;
    } else {
      return NextResponse.json({
        message: "No product found",
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
