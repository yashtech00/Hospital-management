import jwt from "jsonwebtoken"


export const GenerateToken = async (userId:any, res: any,) => {
   
        const token = jwt.sign(
            userId,
            process.env.JWT_SECRET! ,
            {expiresIn:'24h'}
        )

        res.cookie("jwt", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: (process.env.NODE_ENV || "development").trim() !== "development"
        })


   
}