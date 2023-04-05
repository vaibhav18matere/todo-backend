import mongoose from "mongoose";
import { config } from "dotenv";

config({
  path: "./config.env",
});

export const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todo-app",
    })
    .then(() => console.log("database is connected"))
    .catch((e) => console.log(e));
};
