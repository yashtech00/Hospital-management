"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const Authentication_1 = __importDefault(require("../lib/Authentication"));
const router = express_1.default.Router();
router.post("/login", auth_1.Login);
router.post("/signup", auth_1.Signup);
router.post("/logout", auth_1.Logout);
router.get("/me", Authentication_1.default, auth_1.GetMe);
exports.default = router;
