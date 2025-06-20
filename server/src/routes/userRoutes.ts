import express from "express";
import { Login, Signup } from "../controllers/auth";

const router = express.Router();


router.post("/login", Login);
router.post("/signup", Signup);

router.get("/user", Users);
