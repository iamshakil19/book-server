import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

const BookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publication: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      default: ""
    },
    creator: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, BookModel>("Book", BookSchema);
