const bcrypt = require("bcrypt");
const Form = require("../models/formModel");


const insertUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Form.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Form.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await Form.find();
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;

    const updateData = { name, email };


    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await Form.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await Form.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  insertUser,
  getUsers,
  updateUser,
  deleteUser,
};
