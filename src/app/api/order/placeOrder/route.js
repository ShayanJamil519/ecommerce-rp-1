import { NextResponse } from "next/server";
import Cart from "../../../../models/cartModel";
import Product from "../../../../models/productModel";
const transporter = require("../../../../utils/sendEmail");

export async function POST(request) {
  try {
    const reqBody = await request.json();

    // console.log("userEmail: ", reqBody?.cart[0]?.useremail);
    // const useremail = reqBody?.email;
    let placeOrder = true; // Assume true initially
    let error = "";

    if (reqBody?.cart) {
      for (const item of reqBody.cart) {
        if (item.productId.InStock < item.quantity) {
          error = `${item.productId.name} is out of stock`;
          placeOrder = false; // Set to false if condition is met
          break; // Break the loop
        } else {
          console.log("placed");
        }
      }
    }

    if (placeOrder == true) {
      try {
        const emailSend = await transporter.sendMail({
          to: "muhammadabdullahimdad10@gmail.com",
          from: {
            address: reqBody?.email,
          },
          subject: "Order placed Request",
          service: "gmail",
          html: `
                 <p>You requested for password reset</p>
                 <p>My address is ${reqBody?.address} and my phone number is ${reqBody.phoneNumber}</p>
               `,
        });

        if (emailSend.response.includes("OK")) {
          // Loop through the cart items and update the InStock value for each product
          for (const item of reqBody.cart) {
            const productId = item.productId._id;
            const orderedQuantity = item.quantity;

            // Find the product by ID and update its InStock value
            await Product.findByIdAndUpdate(
              productId,
              { $inc: { InStock: -orderedQuantity } },
              { new: true, runValidators: true }
            );
          }

          return NextResponse.json({ message: "order has been placed" });
        } else {
          return NextResponse.json({ error: "Email Not Sent" });
        }
      } catch (error) {
        console.log("error: ", error);
        return NextResponse.json({
          error: "Error sending mail",
        });
      }
    } else {
      return NextResponse.json({ error: error });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
