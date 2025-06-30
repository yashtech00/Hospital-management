"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointProp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.appointProp = zod_1.default.object({
    patientId: zod_1.default.string(),
    doctorId: zod_1.default.string(),
    date: zod_1.default.date()
});
