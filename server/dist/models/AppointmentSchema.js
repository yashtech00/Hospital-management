"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AppointmentSchema = new Schema({
    patientId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    doctorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
}, { timestamps: true });
const AppointmentModel = mongoose_1.default.model("user", AppointmentSchema);
exports.default = AppointmentModel;
