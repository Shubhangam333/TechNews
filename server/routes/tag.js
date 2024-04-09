import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import {
  createTag,
  deleteTag,
  getAllTags,
  updateTag,
} from "../controllers/tag.js";

const router = express.Router();

router.route("/create-tag").post(isAuthenticated, createTag);
router.route("/tag/:tagId").put(isAuthenticated, updateTag);
router.route("/tag/:tagId").delete(isAuthenticated, deleteTag);
router.route("/tags").get(isAuthenticated, getAllTags);

export default router;
