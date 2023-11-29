import express from "express";
import { upload } from "../config/imageupload.js";
import { login, signup, verifyToken } from "../controllers/auth.js";

const router = express.Router();

router.route("/signup").post(upload.single("avatar"), signup);
router.route("/verify/:token").get(verifyToken);
router.route("/signin").post(login);

export default router;
