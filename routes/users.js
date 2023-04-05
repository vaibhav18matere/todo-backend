import express from "express";
import {
  addNewUser,
  getAllUsers,
  getUserDetails,
  updateUser,
  deleteUser,
} from "../controllers/app.js";

const router = express.Router();

router
  .get("/userId/:id", getUserDetails)
  .get("/all", getAllUsers)
  .post("/new", addNewUser)
  .put("/userId/:id", updateUser)
  .delete("/userId/:id", deleteUser);

export default router;
