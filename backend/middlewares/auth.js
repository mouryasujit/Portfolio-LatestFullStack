import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById("677ea2c2f2aa5a7944b935ca");
  next();
});
