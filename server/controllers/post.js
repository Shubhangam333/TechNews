import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { v2 as cloudinary } from "cloudinary";
import { Post } from "../models/post.js";
import { Tag } from "../models/tag.js";
import mongoose from "mongoose";

export const createPost = async (req, res, next) => {
  const { title, content, publisher, category, tags, topic } = req.body;

  if (!req.files) {
    throw new NotFoundError("Image is required");
  }

  let imagesLinks = [];

  if (req.files) {
    imagesLinks = [];
    let images = req.files;

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i].path, {
        folder: "technews_posts",
        width: 800,
        crop: "scale",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  }

  const post = await Post.create({
    title,
    content,
    publisher,
    category,
    tags,
    topic,
    images: imagesLinks,
  });

  if (!post) {
    throw new BadRequestError("'Something went wrong.Please try again later");
  }

  res.status(StatusCodes.CREATED).json({ post });
};

export const getAllPosts = async (req, res, next) => {
  const posts = await Post.find()
    .populate("category")
    .populate("tags")
    .populate("publisher")
    .sort({ _id: -1 });

  if (!posts) {
    throw new NotFoundError();
  }

  res.status(StatusCodes.OK).json({ posts });
};
