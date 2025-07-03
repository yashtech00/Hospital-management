"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const HealthSchema = new mongoose_1.default.Schema({
    patientId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    doctorName: { type: String, required: true },
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
    lastUpdatedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "user" },
}, { timestamps: true });
const HealthModel = mongoose_1.default.model("health", HealthSchema);
exports.default = HealthModel;
