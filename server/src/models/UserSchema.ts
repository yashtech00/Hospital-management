import mongoose from "mongoose";
import { mongo } from "../db/db";


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["patient", "doctor"],
        required: true
    }
}, { timestamps: true });

const UserModel = mongoose.model("user", UserSchema);
export default UserModel;