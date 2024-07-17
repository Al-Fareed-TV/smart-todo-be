// const supabase = require('./shared/db/config')
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { startServer } from "./shared/utils/server";
import bodyParser from "body-parser";
const cookieParser = require("cookie-parser");
import cors from "cors";
import auth from "./app-routes/auth";
dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", auth);
// app.use("/todo", todo);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

startServer(app);
