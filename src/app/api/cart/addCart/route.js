import { connectDb } from "../../../../DBConfig/connectDB";
import Cart from "../../../../models/cartModel";
import Product from "../../../../models/productModel";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { useremail, productId, amount } = reqBody;

    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({
        error: "Product id not found",
      });
    }

    const isCart = await Cart.find({ productId });
    if (isCart.length !== 0) {
      return NextResponse.json({
        error: "Product already exist in cart",
      });
    }

    console.log("aaaa: ", product.InStock);

    if (amount > product?.InStock) {
      return NextResponse.json({
        error: "Not enough item in inventory",
      });
    } else {
      const cart = await Cart.create(reqBody);
      const response = NextResponse.json({
        message: "Product added in cart",
      });
      return response;
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();