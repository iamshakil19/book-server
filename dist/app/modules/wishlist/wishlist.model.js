"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const mongoose_1 = require("mongoose");
const WishlistSchema = new mongoose_1.Schema({
    userEmail: {
        type: String,
        require: true,
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book",
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Wishlist = (0, mongoose_1.model)("Wishlist", WishlistSchema);
