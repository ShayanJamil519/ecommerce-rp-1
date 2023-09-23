import { connectDb } from "../../../../DBConfig/connectDB";
import Product from "../../../../models/productModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const product = await Product.find();
    if (product.length > 0) {
      return NextResponse.json({product});
      
    } else {
      return NextResponse.json({
        error: "No product in stock",
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
