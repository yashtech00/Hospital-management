import mongoose from "mongoose";

const HealthSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  
  doctorName: {
    type: String, required: true
  },

  Medication: [
    {
      name: String,
      dosage: String,
      frequency: String,
    },
  ],
  upcomingAppointment: { type: String },
  recentHealthAlert: { type: String },
  vitals: {
    bloodPressure: { type: String },
    sugarLevel: { type: String },
    heartRate: { type: String },
    weight: { type: String },
    temperature: { type: String },
  },
  notes: { type: String },
  healthStatus: {
    type: String,
    enum: ["stable", "critical", "Under Observation", "Recovering"],
  },
  reports: [
    {
      reportType: String,
      fileUrl: String,
    },
  ],
  lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
}, { timestamps: true });

const HealthModel = mongoose.model("health", HealthSchema);
export default HealthModel;
