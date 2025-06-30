import express from "express";
import { Health, HealthSummary } from "../controllers/Health";



const router = express.Router();

router.post("/healthSummary", HealthSummary);
router.get("/dashboard/:id", Health);