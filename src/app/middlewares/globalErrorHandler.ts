/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */

import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../../config";
import ApiError from "../../errors/ApiError";
import handleCastError from "../../errors/handleCastError";
import handleValidationError from "../../errors/handleValidationError";
import { IGenericErrorMessage } from "../../interfaces/error";
import httpStatus from "http-status";

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("🚀 GlobalErrorHandler ~", { error });

  let statusCode = 500;
  let message = "Something went wrong";

  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === "CastError") {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error.name === "MongoServerError" && error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    const value = Object.values(error.keyValue)[0];
    const errors: IGenericErrorMessage[] = [
      {
        path: field,
        message: `Duplicate key error. The value "${field}: ${value}" already exists.`,
      },
    ];
    statusCode = httpStatus.BAD_REQUEST;
    message = "Duplicate key error";
    errorMessages = errors;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
