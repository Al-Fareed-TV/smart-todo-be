// const { createClient } = require("@supabase/supabase-js");
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabaseUrl:any = process.env.SUPABASE_URL;
const supabaseKey:any = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
