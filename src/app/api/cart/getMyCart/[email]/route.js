import { connectDb } from "../../../../../DBConfig/connectDB";
import Cart from "../../../../../models/cartModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { email } = params;
    let totalPrice = 0;

    const cart = await Cart.find({ useremail: email }).populate("productId");

    if (cart.length === 0) {
      return NextResponse.json({
        error: "No item in the cart",
      });
    } else {
      cart?.forEach((item) => {
        totalPrice += item.productId.price * item.amount;
      });
      const response = NextResponse.json({
        cart,
        totalItems: cart.length,
        totalPrice: totalPrice,
      });

      return response;
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
