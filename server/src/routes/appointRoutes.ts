import express from "express";
import { Appointments, BookAppointment, DeleteAppointment } from "../controllers/appoint";

const router = express.Router();

router.get("/appointments", Appointments)
router.post("/book", BookAppointment);
router.delete("/appointment",DeleteAppointment)