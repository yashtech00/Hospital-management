"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appoint_1 = require("../controllers/appoint");
const Authentication_1 = __importDefault(require("../lib/Authentication"));
const router = express_1.default.Router();
router.get("/appointments", Authentication_1.default, appoint_1.Appointments);
router.post("/book", Authentication_1.default, appoint_1.BookAppointment);
router.delete("/appointment/:id", Authentication_1.default, appoint_1.DeleteAppointment);
exports.default = router;
