"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const HealthSchema = new Schema({
    patientId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    Medication: [{
            name: {
                type: String
            },
            dosage: {
                type: String
            },
            frequency: {
                type: String
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
        temperature: String
    },
    notes: {
        type: String
    },
    healthStatus: {
        type: String,
        enum: ["stable", "critical", "Under Observation", "Recovering"],
        default: "stable",
    },
    reports: [{
            reportType: String,
            fileUrl: String
        }],
    lastUpdatedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
    }
}, { timestamps: true });
const HealthModel = mongoose_1.default.model("health", HealthSchema);
exports.default = HealthModel;
