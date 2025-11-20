const bcrypt = require("bcrypt");
const Form = require("../models/formModel");   

const insertUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = await Form.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User created successfully",
      data: newUser
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { insertUser };
