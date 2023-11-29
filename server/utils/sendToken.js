import { StatusCodes } from "http-status-codes";
import { createAccessToken } from "./tokenUtils.js";

export const sendToken = (user, res) => {
  const access_token = createAccessToken({ id: user._id });

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(StatusCodes.OK).cookie("token", access_token, options).json({
    success: true,
    user,
  });
};
