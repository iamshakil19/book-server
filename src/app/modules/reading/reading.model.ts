import { Schema, model } from "mongoose";
import { IReading, ReadingModel } from "./reading.interface";

const ReadingSchema = new Schema<IReading, ReadingModel>(
  {
    userEmail: {
      type: String,
      require: true,
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Reading = model<IReading, ReadingModel>("Reading", ReadingSchema);
