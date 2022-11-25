import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.js";
import logsRoute from "./routes/logs.js";
import usersRoute from "./routes/users.js";
const app = express();
dotenv.config();

const CONNECTION = process.env.MONGO;

const connectServer = async () => {
  try {
    await mongoose.connect(`${CONNECTION}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

// middlewares
app.use(cors("*"));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/logs", logsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connectServer();
  console.log("Connected to backendish");
});
