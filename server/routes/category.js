import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  updateCategoryTopics,
} from "../controllers/category.js";

const router = express.Router();

router.route("/create-category").post(isAuthenticated, createCategory);
router.route("/category/:id").put(isAuthenticated, updateCategory);
router.route("/category/topics/:id").put(isAuthenticated, updateCategoryTopics);
router.route("/category/:id").delete(isAuthenticated, deleteCategory);
router.route("/getAllCategories").get(isAuthenticated, getAllCategories);
router.route("/category/:id").get(isAuthenticated, getCategoryById);

export default router;
