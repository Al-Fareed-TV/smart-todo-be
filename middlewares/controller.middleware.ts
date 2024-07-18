import { Request, Response, NextFunction } from "express";
const supabase = require("../shared/db/config");

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];
    if (!jwt) {
      throw new Error("You are not authenticated..! Please login");
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(jwt);

    if (error || !user) {
      throw new Error("You are not authenticated..! Please login");
    }

    next();
  } catch (error) {
    next(error);
  }
};
