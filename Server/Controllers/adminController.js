import adminModel from "../Models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  JWT_KEY,
  JWT_EXPIRE_TIME,
  cookie_expire_time,
} from "../Config/config.js";

export const registerNewAdmin = async (req, res) => {
  try {
    const { fullName, email, password, number } = req.body;
    if (!fullName || !email || !password || !number) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const user = await adminModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await adminModel.create({
      fullName,
      email,
      password: hashedPassword,
      number,
    });
    return res.status(201).json({
      message: "User registered successfully",
      newUser,
      success: true,
    });
  } catch (error) {
    console.error("Error in adminRegister:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        success: false,
      });
    }
    // Check if user exists
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
        success: false,
      });
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_KEY, {
      expiresIn: JWT_EXPIRE_TIME,
    });
    // Set cookie with token
    res.cookie("adminToken", token, {
      httpOnly: true,
      maxAge: cookie_expire_time,
      sameSite: "strict",
      secure: false, // Set to true if using HTTPS
    });

    // Success response
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        number: user.number,
      },
    });
  } catch (error) {
    console.error("Error in adminLogin:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Logout admin
export const logoutAdmin = async (req, res) => {
  try {
    res.clearCookie("adminToken");

    return res.status(200).json({
      message: "Logout successful",
      success: true,
    });
  } catch (error) {
    console.error("Error in adminLogout:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get admin details
export const getAdminDetails = async (req, res) => {
  res.status(200).json({
    message: "admin Details fetched Successfully",
    admin: req.admin,
    success: true,
  });
};
