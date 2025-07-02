"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = mongo;
const mongoose_1 = __importDefault(require("mongoose"));
function mongo() {
    const Mongo_URI = process.env.Mongo_URI;
    console.log(Mongo_URI, "mongo url");
    if (!Mongo_URI) {
        throw new Error("Mongodb url is invalid");
    }
    try {
        mongoose_1.default.connect(Mongo_URI)
            .then(() => {
            console.log("mongodb is connected");
        })
            .catch(() => {
            console.log("mongodb is disconnected");
        });
    }
    catch (err) {
        console.error(err);
    }
}
