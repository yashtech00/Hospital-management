import jwt from "jsonwebtoken";
import UserModel from "../models/UserSchema";

const Authentication = async (req: any, res: any,next:any) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "No tokens, Authorization denied" });
        }
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
            return res.status(404).json({message:"JWT secret is not defined in environment variables "})
        }

        const decode = jwt.verify(token, JWT_SECRET);

        if (!decode || typeof decode === "string") {
            return  res.status(401).json({message:"Token is not valid"})
        }

        const user = await UserModel.findById(decode.userId).select("-password");

        if (!user) {
            return res.status(401).json("User not found");
        }
        req.user = user;
        next()

    } catch (e:any) {
        console.error(e.message);
        return res.status(500).json({message:"Internal server error"})
    }
}

export default Authentication;