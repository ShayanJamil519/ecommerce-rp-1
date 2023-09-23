import { connectDb } from "../../../../../DBConfig/connectDB";
import Cart from "../../../../../models/cartModel";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const isCart = await Cart.findById(id);

    if (!isCart) {
      return NextResponse.json({
        error: "Product not found in this cart",
      });
    } else {
      await Cart.findByIdAndDelete(id);
      return NextResponse.json({
        message: "Item delete from cart",
        success: true,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
