import { Model } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publication: Date;
  image?: string,
  creator: string
}

export type BookModel = Model<IBook, Record<string, unknown>>;
