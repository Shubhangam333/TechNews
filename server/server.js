import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/user.js";

import morgan from "morgan";
import cloudinary from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
connectDB();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1", userRoutes);
app.use(errorMiddleware);

app.listen(port, (req, res) => {
  console.log(`server is running at ${port}`);
});
