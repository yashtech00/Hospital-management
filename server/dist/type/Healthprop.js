"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthProp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.HealthProp = zod_1.default.object({
    patientId: zod_1.default.string(),
    doctorName: zod_1.default.string(),
    Medication: zod_1.default.array(zod_1.default.object({
        name: zod_1.default.string(),
        dosage: zod_1.default.string(),
        frequency: zod_1.default.string(),
    })),
    upcomingAppointment: zod_1.default.string(),
    recentHealthAlert: zod_1.default.string(),
    // ✅ vitals should be an object, not a string
    vitals: zod_1.default
        .object({
        bloodPressure: zod_1.default.string().optional(),
        sugarLevel: zod_1.default.string().optional(),
        heartRate: zod_1.default.string().optional(),
        weight: zod_1.default.string().optional(),
        temperature: zod_1.default.string().optional(),
    })
        .optional(),
    notes: zod_1.default.string().optional(),
    healthStatus: zod_1.default.enum(["stable", "critical", "Under Observation", "Recovering"]),
    reports: zod_1.default.array(zod_1.default.object({
        reportType: zod_1.default.string(),
        fileUrl: zod_1.default.string(),
    })),
    lastUpdatedBy: zod_1.default.string().optional(),
});
