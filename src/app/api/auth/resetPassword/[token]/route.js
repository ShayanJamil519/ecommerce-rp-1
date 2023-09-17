import { connectDb } from "../../../../../DBConfig/connectDB";
import User from "../../../../../models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function PUT(request, { params }) {
  try {
    const token = params.token;
    const reqBody = await request.json();
    const { newPassword, confirmNewPassword } = reqBody;

    const isTokenValid = await User.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!isTokenValid) {
      return NextResponse.json({
        error: "Password reset token is invalid or has expired.",
      });
    }

    const isUserFound = await User.findById(isTokenValid._id);

    if (!isUserFound) {
      return NextResponse.json({
        error: "We were unable to find a user for this token.",
      });
    }

    if (isUserFound.passwordResetToken !== token) {
      return NextResponse.json({
        error:
          "User token and your token didn't match. You may have a more recent token in your mail list.",
      });
    }

    if(newPassword !== confirmNewPassword){

      return NextResponse.json({
        error:
          "Password doesn't match",
      });

    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(newPassword, salt);

    isUserFound.password = hashPassword;
    isUserFound.passwordResetToken = undefined;
    isUserFound.passwordResetExpires = undefined;

    await isUserFound.save();

    return NextResponse.json({
      message: "Password has been successfully changed.",
      user: isUserFound,
    });


  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
connectDb();
