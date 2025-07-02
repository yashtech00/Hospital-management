import jwt from "jsonwebtoken";
import { Response } from "express";

export const GenerateToken = async (userId: string, res: Response) => {
  if (!userId) {
    console.error("GenerateToken error: userId is missing");
    return;
  }

  const token = jwt.sign(
    { userId },                              // ✅ Payload is an object
    process.env.JWT_SECRET!,                 // ✅ Make sure secret exists
    { expiresIn: "24h" }
  );

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,        // 15 days
    httpOnly: true,
    sameSite: "strict",
    secure: (process.env.NODE_ENV || "development").trim() !== "development",
  });

  return token;
};
