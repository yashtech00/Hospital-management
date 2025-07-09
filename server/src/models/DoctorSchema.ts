import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    availableDays: {
        type: String,
        default: "Mon-Fri"
    },
    location: {
        type: String,
        default: "City Hospital"
    }
}, { timestamps: true });

const DoctorModel = mongoose.model("doctorDetail", DoctorSchema);
export default DoctorModel;