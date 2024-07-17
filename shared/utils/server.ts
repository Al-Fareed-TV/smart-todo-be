import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 8000;

export const startServer = (app:Express) => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};
