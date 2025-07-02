import mongoose from "mongoose";

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
   
}, { timestamps: true });

const AppointmentModel = mongoose.model("appoint", AppointmentSchema);
export default AppointmentModel;