"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginProp = exports.SignupProp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SignupProp = zod_1.default.object({
    fullname: zod_1.default.string().optional(),
    email: zod_1.default.string(),
    password: zod_1.default.string(),
    role: zod_1.default.enum(["patient", "doctor"])
});
exports.LoginProp = zod_1.default.object({
    fullname: zod_1.default.string().optional(),
    email: zod_1.default.string(),
    password: zod_1.default.string(),
    role: zod_1.default.enum(["patient", "doctor"])
});
