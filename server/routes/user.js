import express from "express";
import { upload } from "../config/imageupload.js";
import {
  checkStatus,
  login,
  signup,
  verifyToken,
} from "../controllers/auth.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/signup").post(upload.single("avatar"), signup);
router.route("/verify/:token").get(verifyToken);
router.route("/signin").post(login);
router.route("/check-status").get(isAuthenticated, checkStatus);

export default router;
