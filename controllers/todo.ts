const supabase = require("../shared/db/config");
import { Request, Response } from "express";
import index from "../shared/db/faiss.db";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import dotenv from "dotenv";
dotenv.config();
export const addTodo = async (req: Request, res: Response) => {
  const { userId, todo, priority, isDone } = await req.body;
  const error = null;

  const data = {
    userId,
    todo,
    priority,
    isDone,
    pageContent: `This todo - ${todo} has ${priority} priority`, // You need to decide what to include in pageContent
  };

  const records = await index.addDocuments([new Document(data)]);
  await index.save('../vectorDB')

  if (error) {
    return res.status(400).json({
      error: error,
    });
  }
  return res.status(201).json({
    message: "Created a new todo successfully",
    data:records
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
  const { userId } = req.body;
const dir = "../vectorDB";
  // const { data, error } = await supabase.from("todo").select().eq('user_id',userId);
const loadedVectorStore = await FaissStore.load(
  dir,
  new OpenAIEmbeddings({ apiKey: process.env.OPENAI_API_KEY! })
);
  // const data = null;
  const result = await loadedVectorStore.similaritySearch("Ka karein", 1, {
    userId,
  });
  const error = "";
  if (loadedVectorStore) {
    return res.status(200).json({
      data: result,
    });
  }
  return res.status(400).json({
    error: error,
  });
};
