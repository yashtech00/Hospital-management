import UserModel from "../models/UserSchema";
import { UserProp } from "../type/userSchema";
import bcyrpt from "bcrypt";




export const Signup = async(req:any,res:any) =>{
    try {

        const userPayload = req.body
        const userParsed = UserProp.safeParse(userPayload);
        if (!userParsed) {
            return res.status(400).message("Invalid user details");
        }

        const existingUser = await UserModel.findById( userPayload.email )
        if (existingUser) {
            return res.status(411).json({message:"Already register,go for login"})
        }

        const hashedPassword = await bcrypt.hash()


        const NewUser = await UserModel.create({
            fullname: userPayload.fullname,
            email: userPayload.email,
            password:userPayload.password
        })

        return res.status(200).json({message:"User registered",data:NewUser})
        
    } catch (err) {
        console.error(err);
         return res.status(200).json({message:"Internal server error while signup"})
        
    }
}