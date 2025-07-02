import { GenerateToken } from "../lib/GenerateCookies";
import UserModel from "../models/UserSchema";
import { LoginProp, SignupProp } from "../type/userProp";
import bcyrpt from "bcrypt";

export const Signup = async (req: any, res: any) => {
  try {
    const SignupPayload = req.body;
    const SignupParsed = SignupProp.safeParse(SignupPayload);
    if (!SignupParsed) {
      return res.status(400).message("Invalid user details");
    }

    const existingUser = await UserModel.findById(SignupPayload.email);
    if (existingUser) {
      return res.status(411).json({ message: "Already register,go for login" });
    }

    const hashedPassword = await bcyrpt.hash(SignupPayload.password, 10);

    const NewUser = await UserModel.create({
      fullname: SignupPayload.fullname,
      email: SignupPayload.email,
      password: hashedPassword,
      role: SignupPayload.role,
    });

    GenerateToken(NewUser._id, res);

    return res.status(200).json({ message: "User registered", data: NewUser });
  } catch (err) {
    console.error(err);
    return res
      .status(200)
      .json({ message: "Internal server error while signup" });
  }
};

export const Login = async (req: any, res: any) => {
  try {
    const LoginPayload = req.body;
    const LoginParsed = LoginProp.safeParse(LoginPayload);
    if (!LoginParsed) {
      return res.status(400).message("Invalid user details");
    }

    const user = await UserModel.findById(LoginPayload.email);
    if (!user) {
      return res
        .status(411)
        .json({ message: "User not register , go for signup" });
    }
    const isPassword = await bcyrpt.compare(
      LoginPayload.password,
      user.password
    );

    if (!isPassword) {
      return res.status(404).json({ message: "Password is wrong" });
    }
    GenerateToken(user._id, res);

    return res.status(200).json({ message: "User Logged In", data: user });
  } catch (err) {
    console.error(err);
    return res
      .status(200)
      .json({ message: "Internal server error while Login" });
  }
};


export const GetMe = async (req: any, res: any) => {
  try {
    const me = await UserModel.find();
    return res.status(200).json(
      { message: "user detail fetch successfully" },
      {data:me}
    )
  } catch (e:any) {
    console.error(e.message);
    return res.status(500).json(
      {error:"Internal server error while fetching user details"}
    )
  }
}