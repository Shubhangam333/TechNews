import { StatusCodes } from "http-status-codes";
import { User } from "../models/user.js";
import { BadRequestError } from "../errors/customErrors.js";

export const profile = async (req, res, next) => {
  const user = await User.findOne(req.user._id);
  if (!user) {
    throw new BadRequestError("Something went wrong.Please try again later");
  }

  res.status(StatusCodes.OK).json({ user });
};

export const updateProfile = async (req, res, next) => {
  const newData = {
    name: req.body.name,
    email: req.body.email,
    bio: req.body.bio,
  };

  if (req.file) {
    newData.avatar = {
      public_id: req.file.filename,
      url: req.file.path,
    };
  }

  const user = await User.findByIdAndUpdate({ _id: req.params.id }, newData, {
    new: true,
  });

  if (!user) {
    throw new BadRequestError("Something went wrong");
  }

  req.status(StatusCodes.OK).json({ user });
};
