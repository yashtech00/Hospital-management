import express from "express";
import { GetMe, Login, Logout, Signup } from "../controllers/auth";
import Authentication from "../lib/Authentication";
import { DoctorDetails, PatientDetails } from "../controllers/UserDetails";

const router = express.Router();

router.post("/login", Login);
router.post("/signup", Signup);
router.post("/logout", Logout);

router.post("/doctor", DoctorDetails);
router.post("/patient", PatientDetails);

router.get("/me",Authentication, GetMe);

export default router;