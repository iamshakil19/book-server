"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reading = void 0;
const mongoose_1 = require("mongoose");
const ReadingSchema = new mongoose_1.Schema({
    userEmail: {
        type: String,
        require: true,
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book",
    },
    status: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Reading = (0, mongoose_1.model)("Reading", ReadingSchema);
