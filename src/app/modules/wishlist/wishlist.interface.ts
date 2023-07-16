import { Model, Types } from "mongoose";

export interface IWishlist {
  userEmail: string;
  book: Types.ObjectId;
}

export type WishlistModel = Model<IWishlist, Record<string, unknown>>;
