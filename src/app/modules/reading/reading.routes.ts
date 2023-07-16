import express from "express";
import { ReadingController } from "./reading.controller";

const router = express.Router();

router.post("/", ReadingController.createReading);
router.patch("/:id", ReadingController.updateReading)
router.get("/:email", ReadingController.getReading);

export const ReadingRoutes = router;
