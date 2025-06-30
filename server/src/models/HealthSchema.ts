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
    Medication: [{
        name: {
           type:String
        },
        dosage: {
            type:String
        },
        frequency: {
            type:String
        }
    }],
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
    healthStatus: {
        type: String,
        enum: ["stable", "critical", "Under Observation", "Recovering"],
        default:"stable",
    },
    reports: [{
        reportType: String,
        fileUrl:String
    }],
    lastUpdatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},{timestamps:true} );

const HealthModel = mongoose.model("health", HealthSchema);
export default HealthModel;