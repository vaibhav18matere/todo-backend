import { User } from "../model/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};

export const addNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "user registered successfully",
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "user is updated",
    user,
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "user is deleted",
    user,
  });
};
