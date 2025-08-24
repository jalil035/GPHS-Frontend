import jwt from "jsonwebtoken";
import { JWT_KEY } from "../Config/config.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.adminToken;
    if (!token) {
      return res.status(401).json({
        message: "Authentication token is missing",
        success: false,
      });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, JWT_KEY);

    req.admin = decodedToken;

    next();
  } catch (error) {
    console.log("Error in authMiddleware:", error);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};
