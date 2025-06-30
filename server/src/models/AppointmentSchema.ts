import mongoose from "mongoose";
import { mongo } from "../db/db";


const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
   
}, { timestamps: true });

const AppointmentModel = mongoose.model("user", AppointmentSchema);
export default AppointmentModel;