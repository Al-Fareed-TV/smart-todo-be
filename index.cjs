const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const auth = require("./app-routes/auth.cjs")
const todo = require("./app-routes/todo.cjs")

require("dotenv").config();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/user',auth);
app.use("/todo", todo);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("App is listening at port",port);
})