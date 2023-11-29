import jwt from "jsonwebtoken";

export const createAccessToken = function (payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "45m",
  });
};
