import express from "express";
import { GetMe, Login, Signup } from "../controllers/auth";
import Authentication from "../lib/Authentication";

const router = express.Router();

router.post("/login", Login);
router.post("/signup", Signup);

router.get("/",Authentication, GetMe);

export default router;