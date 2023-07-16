"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publication: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    creator: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
    },
    reviews: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)("Book", BookSchema);
