import express from "express";
import { Health, HealthSummary } from "../controllers/Health";
import Authentication from "../lib/Authentication";



 const router = express.Router();

router.post("/healthSummary",Authentication, HealthSummary);
router.get("/dashboard/:id",Authentication, Health);

export default router;