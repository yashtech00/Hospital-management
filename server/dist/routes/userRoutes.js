"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const Authentication_1 = __importDefault(require("../lib/Authentication"));
const UserDetails_1 = require("../controllers/UserDetails");
const router = express_1.default.Router();
router.post("/login", auth_1.Login);
router.post("/signup", auth_1.Signup);
router.post("/logout", auth_1.Logout);
router.post("/doctor", Authentication_1.default, UserDetails_1.DoctorDetails);
router.get("/doctors", Authentication_1.default, UserDetails_1.Doctors);
router.get("/patients", Authentication_1.default, UserDetails_1.Patients);
router.post("/patient", Authentication_1.default, UserDetails_1.PatientDetails);
router.get("/me", Authentication_1.default, auth_1.GetMe);
exports.default = router;
