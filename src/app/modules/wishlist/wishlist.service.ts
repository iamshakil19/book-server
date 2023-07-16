import { IWishlist } from "./wishlist.interface";
import { Wishlist } from "./wishlist.model";

const createWishlist = async (payload: IWishlist) => {
  const { userEmail, book } = payload;
  const bookExist = await Wishlist.find({ userEmail, book });

  if (bookExist?.length > 0) {
    const result = await Wishlist.findOneAndDelete({ book });
    return result;
  } else {
    const result = await Wishlist.create(payload);
    return result;
  }
};

const getWishlists = async (email: string) => {
  const result = await Wishlist.find({ userEmail: email }).populate("book");
  return result;
};

export const WishlistService = {
  createWishlist,
  getWishlists,
};
