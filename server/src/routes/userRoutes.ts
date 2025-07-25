import express from "express";
import { GetMe, Login, Logout, Signup } from "../controllers/auth";
import Authentication from "../lib/Authentication";
import {  DoctorDetails, Doctors,  PatientDetails, Patients, UserDetails } from "../controllers/UserDetails";

const router = express.Router();

router.post("/login", Login);
router.post("/signup", Signup);
router.post("/logout", Logout);

router.post("/doctor", Authentication, DoctorDetails);
router.get("/doctors", Authentication, Doctors);

router.get("/details/:id", Authentication, UserDetails
);

router.get("/patients",Authentication, Patients);
router.post("/patient", Authentication,PatientDetails);

router.get("/me",Authentication, GetMe);

export default router;