import express from "express";



const router = express.Router();

router.post("/healthSummary", HealthSummary);
router.get("/dashboard", health);