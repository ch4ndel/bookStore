import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

//signup
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created Successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
      token: createdUser.generateToken(),
    });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      res.status(200).json({
        message: "Login successfull",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
        token: user.generateToken(),
      });
    }
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "User not logged in" });
  }
};

//fetching users

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role:"user" }, { password: 0 }); // exclude password
    res.status(200).json(users);
  } catch (error) {
    console.log("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//deleting user by Id

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
