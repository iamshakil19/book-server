import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { IWishlist } from "./wishlist.interface";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { WishlistService } from "./wishlist.service";

const createWishlist = catchAsync(async (req: Request, res: Response) => {
  const { ...wishlistData } = req.body;

  const result = await WishlistService.createWishlist(wishlistData);

  console.log(result);

  sendResponse<IWishlist>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book added to wishlist successfully",
    data: result,
  });
});

const getWishlists = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;

  const result = await WishlistService.getWishlists(email);

  sendResponse<IWishlist[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Wishlist books retrieved successfully !",
    data: result,
  });
});

export const WishlistController = {
  createWishlist,
  getWishlists,
};
