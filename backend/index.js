import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import bookRoute from "./route/book.route.js";

import userRoute from "./route/user.route.js"

import express from "express";
import connectDb from "./config/db.js";

const app = express();
app.use(cors());

app.use(express.json());

connectDb();

const PORT = process.env.PORT || 3000;

//defining routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
