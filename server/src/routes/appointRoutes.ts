import express from "express";
import { BookAppointment } from "../controllers/appoint";

const router = express.Router();


router.post("/login", Login);
router.post("/signup", Signup);

router.get("/appointments", Appointments)
router.post("/book", BookAppointment);
router.delete("/appointment",DeleteAppointment)