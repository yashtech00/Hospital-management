import express from "express";

const router = express.Router();


router.post("/login", Login);
router.post("/signup", Signup);

router.get("/appointments", Appointments)
router.post("/book", BookAppointment);
router.delete("/appointment",DeleteAppointment)