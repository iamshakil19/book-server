import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";


const app: Application = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use("/api/v1/", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Working Successfully");
});

// Global Error Handler
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api Not Found",
      },
    ],
  });

  next();
});

export default app;
