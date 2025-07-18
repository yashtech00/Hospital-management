"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorDetailProp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.DoctorDetailProp = zod_1.default.object({
    specialization: zod_1.default.string(),
    experience: zod_1.default.number(),
    availableDays: zod_1.default.string(),
});
