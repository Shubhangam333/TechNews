import { StatusCodes } from "http-status-codes";
import { User } from "../models/user.js";
import { BadRequestError } from "../errors/customErrors.js";
import { v2 as cloudinary } from "cloudinary";

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
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.uploader.destroy(imageId);

    const myCloud = await cloudinary.uploader.upload(req.file.path, {
      folder: "technews_avatar",
      width: 150,
      crop: "scale",
    });

    newData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate({ _id: req.params.id }, newData, {
    new: true,
  });

  if (!user) {
    throw new BadRequestError("Something went wrong");
  }

  res.status(StatusCodes.OK).json({ user });
};
