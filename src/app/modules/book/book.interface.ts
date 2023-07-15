import { Model } from "mongoose";

interface IReviews {
  name: string;
  review: string;
}

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publication: string;
  image?: string;
  creator: string;
  summary?: string;
  reviews?: IReviews[];
}

export type BookModel = Model<IBook, Record<string, unknown>>;

export interface IBookFilters {
  searchTerm?: string;
  genre?: string;
}
