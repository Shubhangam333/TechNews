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
  if (!token) throw new UnauthorizedError("Token does not exist");

  let id;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      const options = {
        expires: new Date(Date.now()),
        httpOnly: true,
      };
      res.status(StatusCodes.FORBIDDEN).cookie("token", null, options).json({
        msg: "Token not valid, Logged out successfully",
      });
    } else {
      id = decoded.id;
    }
  });

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
