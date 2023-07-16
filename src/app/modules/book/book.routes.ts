import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/", BookController.createBook);

router.post("/reviews/:id", BookController.createReview);
router.get("/reviews/:id", BookController.getReviews);

router.get("/:id", BookController.getSingleBook);

router.delete("/:id", BookController.deleteBook);

router.patch("/:id", BookController.updateBook)

router.get("/", BookController.getBooks);

export const BookRoutes = router;
