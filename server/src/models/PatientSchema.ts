import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: false,
  },
  medicalHistory: {
    type: [String], // e.g. ["Diabetes", "Hypertension"]
    default: [],
  },
}, { timestamps: true });

const PatientModel = mongoose.models.patient || mongoose.model("patient", PatientSchema);
export default PatientModel;
