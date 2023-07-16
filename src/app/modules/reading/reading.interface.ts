import { Model, Models, Types } from "mongoose";

export interface IReading {
  userEmail: string;
  book: Types.ObjectId;
  status: string
}

export type ReadingModel = Model<IReading, Record<string, unknown>>;
