import express from "express";
import { GetMe, Login, Logout, Signup } from "../controllers/auth";
import Authentication from "../lib/Authentication";

const router = express.Router();

router.post("/login", Login);
router.post("/signup", Signup);
router.post("/logout", Logout);

router.post("/doctor", DoctorDetail);
router.post("/patient", PatientDetail);

router.get("/me",Authentication, GetMe);

export default router;