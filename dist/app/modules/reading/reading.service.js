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
exports.ReadingService = void 0;
const reading_model_1 = require("./reading.model");
const createReading = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userEmail, book } = payload;
    const bookExist = yield reading_model_1.Reading.find({ userEmail, book });
    if ((bookExist === null || bookExist === void 0 ? void 0 : bookExist.length) > 0) {
        const result = yield reading_model_1.Reading.findOneAndDelete({ book });
        return result;
    }
    else {
        const result = yield reading_model_1.Reading.create(payload);
        return result;
    }
});
const getReading = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reading_model_1.Reading.find({ userEmail: email }).populate("book");
    return result;
});
const updateReading = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reading_model_1.Reading.findByIdAndUpdate({ _id: id }, payload);
    return result;
});
exports.ReadingService = {
    createReading,
    getReading,
    updateReading,
};
