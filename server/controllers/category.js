import { StatusCodes } from "http-status-codes";
import { Category } from "../models/category.js";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";

export const createCategory = async (req, res, next) => {
  if (!req.body.name || !req.body.about) {
    throw new NotFoundError("Name and about information is required");
  }

  const cat = await Category.findOne({ name: req.body.name });

  if (cat) {
    throw new BadRequestError("Category already exists");
  }

  const category = await Category.create(req.body);

  if (!category) {
    throw new Error("There was an error in processing your request");
  }

  res.status(StatusCodes.CREATED).json({ category });
};
export const updateCategory = async (req, res, next) => {
  const { name, about, editor } = req.body;
  const category = await Category.findByIdAndUpdate(
    { _id: req.params.id },
    { name, about, editor },
    { new: true }
  );

  if (!category) {
    throw new NotFoundError("Category does not exist");
  }

  res.status(StatusCodes.OK).json({ category });
};
export const updateCategoryTopics = async (req, res, next) => {
  const { topics } = req.body;

  const category = await Category.findById({ _id: req.params.id });

  if (!category) {
    throw new NotFoundError("Category does not exist");
  }

  const updatedCategory = await Category.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { topics } },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ updatedCategory });
};
export const deleteCategory = async (req, res, next) => {
  const category = await Category.findByIdAndDelete(
    { _id: req.params.id },
    req.body,
    { new: true }
  );

  if (!category) {
    throw new NotFoundError("Something went wrong.Try Again Later");
  }

  res.status(StatusCodes.OK).json({ msg: "Category Deleted Successfully" });
};
export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find();

  if (!categories) {
    throw new NotFoundError("No Categories Found");
  }

  res.status(StatusCodes.OK).json(categories);
};
export const getCategoryById = async (req, res, next) => {
  const category = await Category.findById({ _id: req.params.id });

  if (!category) {
    throw new NotFoundError("No category Found");
  }

  res.status(StatusCodes.OK).json({ category });
};
