"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistService = void 0;
const wishlist_model_1 = require("./wishlist.model");
const createWishlist = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userEmail, book } = payload;
    const bookExist = yield wishlist_model_1.Wishlist.find({ userEmail, book });
    if ((bookExist === null || bookExist === void 0 ? void 0 : bookExist.length) > 0) {
        const result = yield wishlist_model_1.Wishlist.findOneAndDelete({ book });
        return result;
    }
    else {
        const result = yield wishlist_model_1.Wishlist.create(payload);
        return result;
    }
});
const getWishlists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_model_1.Wishlist.find({ userEmail: email }).populate("book");
    return result;
});
exports.WishlistService = {
    createWishlist,
    getWishlists,
};
