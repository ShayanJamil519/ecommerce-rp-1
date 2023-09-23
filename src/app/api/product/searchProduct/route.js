import { connectDb } from "../../../../DBConfig/connectDB";
import Product from "../../../../models/productModel";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(request) {
  try {
    console.log("Hello");
    const parsedUrl = parse(request.url, true);
    const { query } = parsedUrl;
    console.log("query: ", query.name);

    const nameRegex = new RegExp(query.name, "i");

    const products = await Product.find({ name: { $regex: nameRegex } });

    if (!products.length) {
      return NextResponse.json({
        error: "No product found",
      });
    } else {
      const response = NextResponse.json(products);
      return response;
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

connectDb();
