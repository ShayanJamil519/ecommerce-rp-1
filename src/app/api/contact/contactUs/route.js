import { NextResponse } from "next/server";
const transporter = require("../../../../utils/sendEmail");

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, message } = reqBody;

    if (!email || !name || !message) {
      return NextResponse.json({
        error: "Insufficient details",
      });
    }

    try {
      const emailSend = await transporter.sendMail({
        to: "muhammadabdullahimdad10@gmail.com",
        from: {
          address: email,
        },
        subject: "Contact Us form",
        service: "gmail",
        html: `
                 <p>I want to contact you</p>
                 <p>My name is ${name} and my message is ${message}</p>
               `,
      });

      if (emailSend.response.includes("OK")) {
        return NextResponse.json({ message: "Message has been delivered!" });
      } else {
        console.log("error: ", error);

        return NextResponse.json({ error: "Email Not Sent" });
      }
    } catch (error) {
      console.log("catch error: ", error);
      return NextResponse.json({
        error: "Error sending mail",
      });
    }
  } catch (error) {
    // console.log("errrrrrrr", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
