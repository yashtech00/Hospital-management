"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const appointRoutes_1 = __importDefault(require("./routes/appointRoutes"));
const healthRoutes_1 = __importDefault(require("./routes/healthRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/user", userRoutes_1.default);
app.use("/api/Appointment", appointRoutes_1.default);
app.use("api/health", healthRoutes_1.default);
app.listen(PORT, () => {
    console.log(`server is connected on ${PORT}`);
});
