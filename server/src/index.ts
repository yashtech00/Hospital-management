import express from "express"
import dotenv from "dotenv"
dotenv.config();
import {mongo} from "./db/db"
import userRoutes from "./routes/userRoutes";
import appointRoutes from "./routes/appointRoutes"
import healthRoutes from "./routes/healthRoutes"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongo();

app.use("/api/user", userRoutes);
app.use("/api/Appointment", appointRoutes);
app.use("/api/health", healthRoutes);

app.listen(PORT, () => {
    console.log(`server is connected on ${PORT}`);
})