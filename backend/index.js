import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// file import
import ConnectDB from "./User/database.js";
import {userController} from "./User/router.js";


// create app
const app = express();

// app to make understand
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//? Mongo connection
ConnectDB();

//? Api
app.use(userController);

//? Network
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is Listening at port : ${PORT}`);
});
