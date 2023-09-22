import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const getUserIDFromToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, "asfnaofna0aq-edqmdqpdqd");
    return decodedToken.id;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
};
