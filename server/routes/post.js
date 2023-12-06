import express from "express";
import {
  createPost,
  getAllPosts,
  getPostByTitle,
} from "../controllers/post.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { upload } from "../config/imageupload.js";

const router = express.Router();

router
  .route("/create-post")
  .post(isAuthenticated, upload.array("postimages"), createPost);
router.route("/posts").get(getAllPosts);
router.route("/post/:category/:title").get(getPostByTitle);

export default router;
