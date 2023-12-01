import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { Tag } from "../models/tag.js";

export const createTag = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    throw new NotFoundError("Please provide required information");
  }

  const tag = await Tag.create({ name });

  if (!tag) {
    throw new BadRequestError("Something went wrong.Please try again later");
  }

  res.status(StatusCodes.CREATED).json({ success: true, tag });
};
export const updateTag = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    throw new NotFoundError("No information found for updating ");
  }

  const tag = await Tag.findByIdAndUpdate(
    { _id: req.params.tagId },
    { name },
    { new: true }
  );

  if (!tag) {
    throw new BadRequestError("Something went wrong.Please try again later.");
  }

  res.status(StatusCodes.OK).json({ tag });
};
export const deleteTag = async (req, res, next) => {
  const tag = await Tag.findOneAndDelete({ _id: req.params.tagId });

  if (!tag) {
    throw new BadRequestError("Something went wrong.Please try again later");
  }

  res.status(StatusCodes.OK).json({ msg: "Tag Deleted Successfully" });
};

export const getAllTags = async (req, res, next) => {
  const tags = await Tag.find();

  if (!tags) {
    throw new BadRequestError("Something went wrong");
  }

  res.status(StatusCodes.OK).json({ tags });
};
