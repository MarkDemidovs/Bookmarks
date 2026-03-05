import express from "express";
import cors from "cors";
import userRouter from "./routes/users";
import bookmarkRouter from "./routes/bookmarks";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/bookmarks", bookmarkRouter);
export default app;