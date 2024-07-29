import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OpenAIEmbeddings } from "@langchain/openai";
import dotenv from "dotenv";
dotenv.config();

const index = new FaissStore(new OpenAIEmbeddings(
   { apiKey: process.env.OPENAI_API_KEY!,}
), {});

export default index;
