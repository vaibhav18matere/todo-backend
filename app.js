import express from "express";
import userRouter from "./routes/users.js";

export const app = express();
// using middlewares
app.use(express.json());

// using Router
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Home page working!!");
});
