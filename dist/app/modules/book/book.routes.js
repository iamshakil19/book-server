"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/", book_controller_1.BookController.createBook);
router.post("/reviews/:id", book_controller_1.BookController.createReview);
router.get("/reviews/:id", book_controller_1.BookController.getReviews);
router.get("/:id", book_controller_1.BookController.getSingleBook);
router.delete("/:id", book_controller_1.BookController.deleteBook);
router.patch("/:id", book_controller_1.BookController.updateBook);
router.get("/", book_controller_1.BookController.getBooks);
exports.BookRoutes = router;
