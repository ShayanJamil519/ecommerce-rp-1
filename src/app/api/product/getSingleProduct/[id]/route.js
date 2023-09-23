import { connectDb } from "../../../../../DBConfig/connectDB";
import Product from "../../../../../models/productModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({
        error: "No product found with this given id",
      });
    } else {
      const response = NextResponse.json(product);
      return response;
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
