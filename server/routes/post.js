import express from "express";
import {
  createPost,
  getAllPosts,
  getPostByTitle,
  getPostsByCategory,
  getPostsByKeyword,
} from "../controllers/post.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { upload } from "../config/imageupload.js";

const router = express.Router();

router
  .route("/create-post")
  .post(isAuthenticated, upload.array("postimages"), createPost);
router.route("/posts").get(getAllPosts);
router.route("/post").post(getPostByTitle);
router.route("/posts/:category").get(getPostsByCategory);
router.route("/posts/search/:keyword").get(getPostsByKeyword);

export default router;
