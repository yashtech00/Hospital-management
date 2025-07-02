"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMe = exports.Logout = exports.Login = exports.Signup = void 0;
const GenerateCookies_1 = require("../lib/GenerateCookies");
const UserSchema_1 = __importDefault(require("../models/UserSchema"));
const userProp_1 = require("../type/userProp");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const SignupPayload = req.body;
        console.log(SignupPayload, "");
        const SignupParsed = userProp_1.SignupProp.safeParse(SignupPayload);
        if (!SignupParsed) {
            return res.status(400).message("Invalid user details");
        }
        const existingUser = yield UserSchema_1.default.findOne({
            email: SignupPayload.email,
        });
        if (existingUser) {
            return res.status(411).json({ message: "Already register,go for login" });
        }
        const hashedPassword = yield bcrypt_1.default.hash(SignupPayload.password, 10);
        const NewUser = yield UserSchema_1.default.create({
            fullname: SignupPayload.fullname,
            email: SignupPayload.email,
            password: hashedPassword,
            role: SignupPayload.role,
        });
        (0, GenerateCookies_1.GenerateToken)(NewUser._id, res);
        return res.status(200).json({ message: "User registered", data: NewUser });
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ message: "Internal server error while signup" });
    }
});
exports.Signup = Signup;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const LoginPayload = req.body;
        const LoginParsed = userProp_1.LoginProp.safeParse(LoginPayload);
        if (!LoginParsed) {
            return res.status(400).message("Invalid user details");
        }
        const user = yield UserSchema_1.default.findOne({ email: LoginPayload.email });
        if (!user) {
            return res
                .status(411)
                .json({ message: "User not register , go for signup" });
        }
        const isPassword = yield bcrypt_1.default.compare(LoginPayload.password, user.password);
        if (!isPassword) {
            return res.status(404).json({ message: "Password is wrong" });
        }
        (0, GenerateCookies_1.GenerateToken)(user._id, res);
        return res.status(200).json({ message: "User Logged In", data: user });
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ message: "Internal server error while Login" });
    }
});
exports.Login = Login;
const Logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie("jwt", " ", { maxAge: 0 });
        res.status(200).json({ message: "Logout successfully" });
    }
    catch (e) {
        console.error(e);
        throw e;
    }
});
exports.Logout = Logout;
const GetMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const me = yield UserSchema_1.default.findById(req.user._id).select("-password");
        return res
            .status(200)
            .json({ message: "user detail fetch successfully", data: me });
    }
    catch (e) {
        console.error(e.message);
        return res
            .status(500)
            .json({ error: "Internal server error while fetching user details" });
    }
});
exports.GetMe = GetMe;
