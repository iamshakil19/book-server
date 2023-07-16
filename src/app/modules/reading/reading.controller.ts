import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ReadingService } from "./reading.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IReading } from "./reading.interface";

const createReading = catchAsync(async (req: Request, res: Response) => {
  const { ...readingData } = req.body;
  const data = req.body;
  const finalData = { ...data, status: "running" };
  const result = await ReadingService.createReading(finalData);
  sendResponse<IReading>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book added to wishlist successfully",
    data: result,
  });
});

const getReading = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;
  const result = await ReadingService.getReading(email);
  sendResponse<IReading[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reading books retrieved successfully !",
    data: result,
  });
});

const updateReading = catchAsync(async  (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ReadingService.updateReading(id, req.body);
  sendResponse<IReading>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reading Book updated successfully !",
    data: result,
  });
})

export const ReadingController = {
  createReading,
  getReading,
  updateReading
};
