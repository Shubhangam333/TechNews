import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { v2 as cloudinary } from "cloudinary";
import { Post } from "../models/post.js";
import { Tag } from "../models/tag.js";
import mongoose from "mongoose";
import { Category } from "../models/category.js";

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

export const getPostByTitle = async (req, res, next) => {
  const titlename = req.params.title.trim().toLowerCase().replace(/%20/g, " ");
  const post = await Post.findOne({
    title: { $regex: new RegExp(titlename, "i") },
  })
    .populate("category", "name")
    .populate("publisher tags");

  if (!post) {
    throw new NotFoundError("No post exist");
  }

  res.status(StatusCodes.OK).json({ post });
};

export const getPostsByCategory = async (req, res, next) => {
  console.log(req.params.category);

  const categories = await Category.findOne({
    name: { $regex: new RegExp(req.params.category, "i") },
  });

  const posts = await Post.find({
    category: categories._id,
  }).populate("category publisher tags", "name");

  if (!posts) {
    throw new NotFoundError("No post exist");
  }

  res.status(StatusCodes.OK).json({ posts });
};
