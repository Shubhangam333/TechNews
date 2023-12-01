import { User } from "../models/user.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { generateVerificationToken } from "../utils/verificationToken.js";
import { sendVerificationEmail } from "../middlewares/verificationEmail.js";
import { StatusCodes } from "http-status-codes";
import { sendToken } from "../utils/sendToken.js";
import { v2 as cloudinary } from "cloudinary";

export const signup = async (req, res, next) => {
  const { name, email, password, gender } = req.body;

  if (!name || !email || !password || !gender) {
    throw new Error("Insufficient Information error");
  }

  if (await User.findOne({ email })) {
    throw new UnauthorizedError("Email Already Exist");
  }

  if (!req.file) {
    throw new BadRequestError("Profile Picture is required");
  }
  const data = {
    avatar: req.file.path,
  };

  const myCloud = await cloudinary.uploader.upload(data.avatar, {
    folder: "technews_avatar",
    width: 150,
    crop: "scale",
  });

  const verificationToken = generateVerificationToken();

  const user = await User.create({
    name,
    email,
    password,
    gender,
    verificationToken,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  if (user) {
    sendVerificationEmail(user);
  }
  res.status(200).json({
    success: true,
    msg: "Registration successful, Please check your email and activate your account",
  });
};
export const verifyToken = async (req, res, next) => {
  const token = req.params.token;

  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "User does not exist" });
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();

  res.status(StatusCodes.OK).json({ message: "Email verified successfully." });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (!email || !password) {
    throw new BadRequestError("Please provide valid email and password");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new NotFoundError("Your account does not exist.Please register");
  }

  const passwordMatched = await user.comparePassword(password);

  if (!passwordMatched) {
    throw new UnauthorizedError("Invalid Email or Password");
  }
  if (!user.isVerified) {
    throw new UnauthenticatedError("Your account has not been verified");
  }

  sendToken(user, res);
};

export const logout = async (req, res, next) => {
  const options = {
    expires: new Date(Date.now()),
    httpOnly: true,
  };
  res.status(StatusCodes.OK).cookie("token", null, options).json({
    msg: "Logged out successfully",
  });
};

export const checkStatus = async (req, res, next) => {
  if (!req.user) {
    throw new UnauthorizedError("User is not authorized");
  }
  res.status(StatusCodes.OK).json({ msg: "true" });
};
