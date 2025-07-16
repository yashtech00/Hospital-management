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
exports.getPatientsByDoctor = exports.DeleteAppointment = exports.Appointments = exports.BookAppointment = void 0;
const AppointmentSchema_1 = __importDefault(require("../models/AppointmentSchema"));
const AppointmentProp_1 = require("../type/AppointmentProp");
const BookAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointPayload = req.body;
        const appointParsed = AppointmentProp_1.appointProp.safeParse(appointPayload);
        if (req.user.role != "patient") {
            return res.status(405).json("User not allowed to book appointments");
        }
        if (!appointParsed.success) {
            return res.status(400).json({
                error: "Invalid data",
                details: appointParsed.error.errors,
            });
        }
        const { doctorId, date, time } = appointParsed.data;
        const alreadyBooked = yield AppointmentSchema_1.default.findOne({
            patientId: req.user._id,
            doctorId,
            date,
            time,
        });
        if (alreadyBooked) {
            return res.status(409).json({ message: "you have already booked an appointment with this doctor" });
        }
        const newAppoint = yield AppointmentSchema_1.default.create({
            patientId: req.user._id,
            doctorId: doctorId,
            date,
            time,
        });
        return res
            .status(200)
            .json({ message: "Appointment booked successfully", data: newAppoint });
    }
    catch (e) {
        console.error(e);
        return res
            .status(500)
            .json("internal server error while booking appointment");
    }
});
exports.BookAppointment = BookAppointment;
const Appointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Appoint = yield AppointmentSchema_1.default.find().populate("patientId");
        if (req.user.role != "doctor") {
            return res.status(405).json("User not allowed to appointments");
        }
        return res
            .status(200)
            .json({ message: "fetched appointments", data: Appoint });
    }
    catch (e) {
        console.error(e);
        return res
            .status(500)
            .json("Internal server error while fetching appointments");
    }
});
exports.Appointments = Appointments;
const DeleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = req.params.id;
        console.log(appointmentId, "appointment id");
        if (req.user.role != "patient") {
            return res.status(405).json("User not allowed to book appointments");
        }
        const deleteAppoint = yield AppointmentSchema_1.default.findByIdAndDelete(appointmentId);
        if (!deleteAppoint) {
            return res
                .status(404)
                .json({ message: "Booked Appointment is not found" });
        }
        return res.status(200).json("appointment deleted successfully");
    }
    catch (e) {
        console.error(e.message);
        return res.status(500).json({
            error: "Internal server error while deleting appointment",
        });
    }
});
exports.DeleteAppointment = DeleteAppointment;
const getPatientsByDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctorId = req.user._id;
        const appointments = yield AppointmentSchema_1.default.find({ doctorId }).populate("patientId", "-password");
        const patient = appointments.map((appt) => appt.patientId);
        return res.status(200).json({ message: "fetched patients who booked appointment with this doctor", data: patient });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getPatientsByDoctor = getPatientsByDoctor;
