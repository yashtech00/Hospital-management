import express from "express";
import { Appointments, BookAppointment, DeleteAppointment, getPatientsByDoctor } from "../controllers/appoint";
import Authentication from "../lib/Authentication";

 const router = express.Router();

router.get("/appointments",Authentication, Appointments)
router.post("/book",Authentication, BookAppointment);
router.delete("/appointment/:id", Authentication, DeleteAppointment)
router.get("/doctor/appointments", Authentication, getPatientsByDoctor);

export default router;