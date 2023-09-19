import { connectDb } from "../../../../DBConfig/connectDB";
import apiUrl from "../../../../utils/baseURL";
import User from "../../../../models/userModel";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { createTransport } from "nodemailer";



export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return NextResponse.json({
        error: "No user found with this email",
      });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    const resetExpires = new Date(Date.now() + 3600000); // 1 hour from now
    userExists.passwordResetToken = resetToken;
    userExists.passwordResetExpires = resetExpires;

    await userExists.save();

    try {
      // Send a password reset email
      let transporter = createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
          pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      let mailOptions = {
        to: userExists.email,
        from: "alexbrad1717@gmail.com",
        subject: "Password Reset",
        text: `You are receiving this because you have requested the reset of the password for your account.\n
        Please click on the following link, or paste this into your browser to complete the process:\n
        ${apiUrl}/reset-password/${resetToken}\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Password reset email sent." });
    } catch (error) {
      return NextResponse.json({
        message: "Error sending reset password mail",
      });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
connectDb();
