import { IWishlist } from "./wishlist.interface";
import { Wishlist } from "./wishlist.model";

const createWishlist = async (payload: IWishlist) => {
  const { userEmail, book } = payload;
  console.log(userEmail, book);
  const bookExist = await Wishlist.find({ userEmail, book });

  console.log(bookExist);

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
