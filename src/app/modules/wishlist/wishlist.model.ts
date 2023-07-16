import { Schema, model } from "mongoose";
import { IWishlist, WishlistModel } from "./wishlist.interface";

const WishlistSchema = new Schema<IWishlist, WishlistModel>(
  {
    userEmail: {
      type: String,
      require: true,
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Wishlist = model<IWishlist, WishlistModel>(
  "Wishlist",
  WishlistSchema
);
