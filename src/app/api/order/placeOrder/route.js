import { NextResponse } from "next/server";
import Cart from "../../../../models/cartModel";
import Product from "../../../../models/productModel";
const transporter = require("../../../../utils/sendEmail");

export async function POST(request) {
  try {
    const reqBody = await request.json();

    // console.log("userEmail: ", reqBody?.cart[0]?.useremail);
    const useremail = reqBody?.cart[0]?.useremail;
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
        // let mailOptions = {
        //   to: "muhammadabdullahimdad10@gmail.com",
        //   from: useremail,
        //   subject: "Password Reset",
        //   text: `You are receiving this because you have requested the reset of the password for your account.
        //   Please click on the following link, or paste this into your browser to complete the process.`,
        // };

        // await transporter.sendMail(mailOptions);

        const emailSend = await transporter.sendMail({
          to: "muhammadabdullahimdad10@gmail.com",
          from: {
            address: useremail,
          },
          subject: "Password Reset Request",
          service: "gmail",
          html: `
                 <p>You requested for password reset</p>
                 <p>Your OTP Code is</p>
               `,
        });

        return NextResponse.json({ message: "order has been placed" });
      } catch (error) {
        console.log("error: ", error);
        return NextResponse.json({
          error: "Error sending reset password mail",
        });
      }
    } else {
      return NextResponse.json({ error: error });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
