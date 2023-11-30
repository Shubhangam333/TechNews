import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { createTag, deleteTag, updateTag } from "../controllers/tag.js";

const router = express.Router();

router.route("/create-tag").post(isAuthenticated, createTag);
router.route("/tag/:id").put(isAuthenticated, updateTag);
router.route("/tag/:id").delete(isAuthenticated, deleteTag);

export default router;
