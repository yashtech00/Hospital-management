"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Health_1 = require("../controllers/Health");
const Authentication_1 = __importDefault(require("../lib/Authentication"));
const router = express_1.default.Router();
router.post("/healthSummary", Authentication_1.default, Health_1.HealthSummary);
router.get("/dashboard/:id", Authentication_1.default, Health_1.Health);
exports.default = router;
