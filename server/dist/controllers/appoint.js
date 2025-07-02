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
exports.DeleteAppointment = exports.Appointments = exports.BookAppointment = void 0;
const AppointmentSchema_1 = __importDefault(require("../models/AppointmentSchema"));
const AppointmentProp_1 = require("../type/AppointmentProp");
const BookAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointPayload = req.body;
        const docId = req.params.id;
        const appointParsed = AppointmentProp_1.appointProp.safeParse(appointPayload);
        if (!appointParsed) {
            return res.status(500).json("Wrong id of patient or doctor");
        }
        const newAppoint = yield AppointmentSchema_1.default.create({
            patientId: appointPayload.patientId,
            doctorId: docId,
            Date: appointPayload.date
        });
        return res.status(200).json("Appointment booked", { data: newAppoint });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json("internal server error while booking appointment");
    }
});
exports.BookAppointment = BookAppointment;
const Appointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Appoint = yield AppointmentSchema_1.default.find();
        return res.status(200).json("fetched appointments", Appoint);
    }
    catch (e) {
        console.error(e);
        return res.status(500).json("Internal server error while fetching appointments");
    }
});
exports.Appointments = Appointments;
const DeleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = req.params.id;
        if (!appointmentId) {
            return res.status(404).json("Wrong appointment Id");
        }
        const deleteAppoint = yield AppointmentSchema_1.default.deleteOne(appointmentId);
        return res.status(200).json("appointment deleted successfully");
    }
    catch (e) {
        console.error(e.message);
        return res.status(500).json({
            error: "Internal server error while deleting appointment"
        });
    }
});
exports.DeleteAppointment = DeleteAppointment;
