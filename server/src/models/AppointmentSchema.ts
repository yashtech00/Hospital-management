import mongoose from "mongoose";
import { mongo } from "../db/db";


const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patientId: {
        type: String,
        required: true,
    },
    doctorId: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
   
}, { timestamps: true });

const AppointmentModel = mongoose.model("user", AppointmentSchema);
export default AppointmentModel;