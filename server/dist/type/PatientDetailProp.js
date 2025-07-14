"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientDetailsProp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.patientDetailsProp = zod_1.default.object({
    age: zod_1.default.number(),
    gender: zod_1.default.string(),
    address: zod_1.default.string(),
    bloodGroup: zod_1.default.string(),
    medicalHistory: zod_1.default.array(zod_1.default.string()),
});
