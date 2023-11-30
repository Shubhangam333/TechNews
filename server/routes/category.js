import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
} from "../controllers/category.js";

const router = express.Router();

router.route("/create-category").post(isAuthenticated, createCategory);
router.route("/category/:id").put(isAuthenticated, updateCategory);
router.route("/category/:id").delete(isAuthenticated, deleteCategory);
router.route("/getAllCategories").get(isAuthenticated, getAllCategory);
router.route("/category/:id").get(isAuthenticated, getCategoryById);

export default router;
