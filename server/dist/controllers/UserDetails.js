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
exports.PatientDetails = exports.DoctorDetails = void 0;
const DoctorSchema_1 = __importDefault(require("../models/DoctorSchema"));
const PatientSchema_1 = __importDefault(require("../models/PatientSchema"));
const DoctorDetailProp_1 = require("../type/DoctorDetailProp");
const PatientDetailProp_1 = require("../type/PatientDetailProp");
const DoctorDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DoctorDetailPayload = req.body;
        const DoctorDetailParsed = DoctorDetailProp_1.DoctorDetailProp.safeParse(DoctorDetailPayload);
        if (!DoctorDetailParsed.success) {
            return res.status(404).json({ message: "Invalid info" });
        }
        if (req.user.role !== "doctor") {
            return res.status(404).json({ message: "User not allowed, you are not doctor" });
        }
        const { specialization, experience, availableDays, location } = DoctorDetailParsed.data;
        const doctor = yield DoctorSchema_1.default.create({
            user: req.user._id,
            specialization,
            experience,
            availableDays,
            location,
        });
        return res
            .status(200)
            .json({ message: "Doctor details added successfully", data: doctor });
    }
    catch (e) {
        console.error(e);
        return res.status(400).json({ message: "Internal server error" });
    }
});
exports.DoctorDetails = DoctorDetails;
const PatientDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patientPayload = req.body;
        const patientParsed = PatientDetailProp_1.patientDetailsProp.safeParse(patientPayload);
        if (!patientParsed.success) {
            return res.status(400).json({ message: "Invalid patient info" });
        }
        if (req.user.role !== "patient") {
            return res.status(403).json({ message: "User not allowed, you are not a patient" });
        }
        const { age, gender, address, bloodGroup, medicalHistory } = patientParsed.data;
        const patient = yield PatientSchema_1.default.create({
            user: req.user._id,
            age,
            gender,
            address,
            bloodGroup,
            medicalHistory,
        });
        return res.status(200).json({ message: "Patient details added successfully", data: patient });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.PatientDetails = PatientDetails;
