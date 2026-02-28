import express from "express";
import cors from "cors";
import userRouter from "./routes/users";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRouter);

export default app;