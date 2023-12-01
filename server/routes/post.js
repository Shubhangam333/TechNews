import express from "express";
import {} from "../controllers/auth.js";
import { createPost } from "../controllers/post.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/create-post").post(isAuthenticated, createPost);

export default router;
