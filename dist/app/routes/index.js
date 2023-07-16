"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const book_routes_1 = require("../modules/book/book.routes");
const wishlist_routes_1 = require("../modules/wishlist/wishlist.routes");
const reading_routes_1 = require("../modules/reading/reading.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: "/books",
        route: book_routes_1.BookRoutes,
    },
    {
        path: "/wishlist",
        route: wishlist_routes_1.WishlistRoutes,
    },
    {
        path: "/reading",
        route: reading_routes_1.ReadingRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
