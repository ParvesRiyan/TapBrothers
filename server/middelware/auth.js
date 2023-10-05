import { Admin } from "../model/admin.js";
import Jwt from "jsonwebtoken";

export const isAuthenticate = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(500).json({
        success: false,
        message: "login to access this resourse",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);

    req.admin = await Admin.findById(decoded._id);

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
