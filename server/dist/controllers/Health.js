"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Health = exports.HealthSummary = void 0;
const HealthSchema_1 = __importDefault(require("../models/HealthSchema"));
const Healthprop_1 = require("../type/Healthprop");
const HealthSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const healthPayload = req.body;
        const patientId = req.params.id;
        const healthParsed = Healthprop_1.HealthProp.safeParse(healthPayload);
        if (!healthParsed.success) {
            return res.status(400).json({ error: "Error in health payload" }, { details: healthParsed.error.errors });
        }
        const health = yield HealthSchema_1.default.create({
            doctorName: healthPayload.doctorName,
            patientId: patientId,
            Medication: healthPayload.Medication,
            upcomingAppointment: healthPayload.upcomingAppointment,
            recentHealthAlert: healthPayload.recentHealthAlert,
            vitals: healthPayload.vitals,
            notes: healthPayload.notes,
            healthStatus: healthPayload.healthStatus,
            reports: healthPayload.reports,
            lastUpdatedBy: healthPayload.lastUpdatedBy
        });
        return res.status(200).json({ message: "Health summary created successfully" }, { data: health });
    }
    catch (e) {
        console.error(e.message);
        return res.status(500).json("Internal server error while creating health summary");
    }
});
exports.HealthSummary = HealthSummary;
const Health = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patientId = req.params.id;
        const health = yield HealthSchema_1.default.find({ patientId: patientId });
        return res.status(200).json({
            message: "Health summaries fetched successfully",
            data: health,
        });
    }
    catch (e) {
        console.error(e.message);
        return res.status(500).json({
            error: "Internal server error while fetching health summaries",
        });
    }
});
exports.Health = Health;
