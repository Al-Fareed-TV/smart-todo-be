const supabase = require("../shared/db/config");
import { log } from "console";
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (!error) {
    return res.status(201).json({
      message: data,
    });
  } else {
    return res.status(400).json({ error: error });
  }
};
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (!error) {
    return res.status(200).json({
      message: "User logged in successfully",
      data: data,
    });
  }
  return res.status(400).json({
    error: "Sorry bro this didn;t work..!",
  });
};
export const logout = async (req: Request, res: Response) => {
  const { error } = await supabase.auth.signOut();
  if (!error) return res.status(200);
  return res.status(400).json({ error: "Couldn't sing out" });
};
