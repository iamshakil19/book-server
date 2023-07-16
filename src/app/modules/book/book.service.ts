import { bookSearchableFields } from "./book.constant";
import { IBook, IBookFilters } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (payload: IBook): Promise<IBook | null> => {
  const result = await Book.create(payload);
  return result;
};

const getBooks = async (filters: IBookFilters) => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: { $regex: new RegExp(String(value), "i") },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions).sort({ createdAt: -1 });

  return result;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

const updateBook = async (id: string, payload: Partial<IBook>) => {
  console.log(payload);

  const result = await Book.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const createReview = async (id: string, payload) => {
  const result = await Book.findByIdAndUpdate(
    { _id: id },
    { $push: { reviews: payload } }
  );

  return result;
};

const getReviews = async (id: string) => {
  const result = await Book.findById({ _id: id }).select("reviews");
  console.log(result);

  return result;
};

export const BookService = {
  createBook,
  getBooks,
  getSingleBook,
  deleteBook,
  updateBook,
  createReview,
  getReviews,
};
