import express from "express";
import {
  createPost,
  getAllPosts,
  getPostByTitle,
  getPostsByCategory,
} from "../controllers/post.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { upload } from "../config/imageupload.js";

const router = express.Router();

router
  .route("/create-post")
  .post(isAuthenticated, upload.array("postimages"), createPost);
router.route("/posts").get(getAllPosts);
router.route("/post/:title").get(getPostByTitle);
router.route("/posts/:category").get(getPostsByCategory);

export default router;
