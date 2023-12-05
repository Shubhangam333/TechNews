import { StatusCodes } from "http-status-codes";
import {
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    return res
      .status(StatusCodes.FORBIDDEN)
      .cookie("token", null, options)
      .json({
        msg: "Token does not exist, Logged out successfully",
      });
  }

  let id;
  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    id = decoded.id;
  } catch (error) {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    return res
      .status(StatusCodes.FORBIDDEN)
      .cookie("token", null, options)
      .json({
        msg: "Token not valid, Logged out successfully",
      });
  }

  if (!id) {
    throw new UnauthenticatedError("Token not valid");
  }

  const user = await User.findOne({ _id: id });

  if (!user) {
    throw new NotFoundError("User does not exist in the system");
  }

  req.user = user;
  next();
};
