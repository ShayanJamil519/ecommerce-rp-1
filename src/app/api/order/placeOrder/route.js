import { NextResponse } from "next/server";
import Cart from "../../../../models/cartModel";
import Product from "../../../../models/productModel";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    let placeOrder = true; // Assume true initially
    let error = "";

    if (reqBody?.cart) {
      for (const item of reqBody.cart) {
        if (item.productId.InStock < item.amount) {
          error = `${item.productId.name} is out of stock`;
          placeOrder = false; // Set to false if condition is met
          break; // Break the loop
        } else {
          console.log("placed");
        }
      }
    }

    if (placeOrder == true) {
      return NextResponse.json({ message: "order has been placed" });
    } else {
      return NextResponse.json({ error: error });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
