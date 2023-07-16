"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const reading_controller_1 = require("./reading.controller");
const router = express_1.default.Router();
router.post("/", reading_controller_1.ReadingController.createReading);
router.patch("/:id", reading_controller_1.ReadingController.updateReading);
router.get("/:email", reading_controller_1.ReadingController.getReading);
exports.ReadingRoutes = router;
