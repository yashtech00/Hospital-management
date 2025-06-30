import express from "express"
import userRoutes from "./routes/userRoutes";
import appointRoutes from "./routes/appointRoutes"
import healthRoutes from "./routes/healthRoutes"
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/Appointment", appointRoutes);
app.use("api/health", healthRoutes);


app.listen(PORT, () => {
    console.log(`server is connected on ${PORT}`);
    
})