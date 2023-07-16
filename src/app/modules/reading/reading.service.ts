import { IReading } from "./reading.interface";
import { Reading } from "./reading.model";

const createReading = async (payload: IReading) => {
  const { userEmail, book } = payload;
  const bookExist = await Reading.find({ userEmail, book });
  if (bookExist?.length > 0) {
    const result = await Reading.findOneAndDelete({ book });
    return result;
  } else {
    const result = await Reading.create(payload);
    return result;
  }
};

const getReading = async (email: string) => {
  const result = await Reading.find({ userEmail: email }).populate("book");
  return result;
};

const updateReading = async (id: string, payload: Partial<IReading>) => {
  const result = await Reading.findByIdAndUpdate({ _id: id }, payload);
  return result;
};

export const ReadingService = {
  createReading,
  getReading,
  updateReading,
};
