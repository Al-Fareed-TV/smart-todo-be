const supabase = require("../shared/db/config");
import { Request, Response } from "express";
export const addTodo = async (req: Request, res: Response) => {
  const { userId, todo, priority, isDone } = await req.body;
  const { error } = await supabase.from("todo").insert({
    user_id: userId,
    todo: todo,
    priority: priority,
    isDone: isDone,
  });

  if (error) {
    return res.status(400).json({
      error: error,
    });
  }
  return res.status(201).json({
    message: "Created a new todo successfully",
  });
};
export const updateTodo = async (req: Request, res: Response) => {
  const { todo, isDone } = await req.body;
  const { data, error } = await supabase
    .from("todo")
    .update({ isDone: isDone })
    .eq("todo", todo)
    .select();

  if (error) {
    return res.status(400).json({
      error: error,
    });
  }
  return res.status(201).json({
    message: "your todo has been updated",
    data: data,
  });
};
export const removeTodo = async (req: Request, res: Response) => {
  const { todo } = await req.body;
  const { error } = await supabase.from("todo").delete().eq("todo", todo);
  if (error)
    return res.status(400).json({ message: "Cannot perform operation" });
  return res.status(201).json({
    message: "Deleted your todo",
  });
};

export const getTodo = async (req: Request, res: Response) => {
  console.log("I was called..");
  
  const { userId } = req.body;

  const { data, error } = await supabase.from("todo").select().eq('user_id',userId);
  if (data) {
    console.log("Data is : ",data);
    
    return res.status(200).json({
      data: data,
    });
  }
  return res.status(400).json({
    error: error,
  });
};
