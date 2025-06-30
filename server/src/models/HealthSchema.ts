import mongoose from "mongoose";

const Schema = mongoose.Schema

const HealthSchema = new Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    currentMedication: {
        type: String,
        required: true
    },
    upcomingAppointment: {
        type: String,
        required: true,
    },
    recentHealthAlert: {
        type: String,
        required: true
    },
    vitals: {
        bloodPressure: String,
        sugarLevel: String,
        heartRate: String,
        weight: String,
        temperature:String
    },
    notes: {
      type:String  
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default:Date.now,
    }
},{timestamps:true} );

const HealthModel = mongoose.model("health", HealthSchema);
export default HealthModel;