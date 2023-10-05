import express from "express";
import {
  getAllusers,
  updateUser,
  userDelete,
  userDetails,
  userregister,
} from "../controller/userController.js";
import { isAuthenticate } from "../middelware/auth.js";
export const userRoute = express.Router();

userRoute.route("/userregister").post(isAuthenticate, userregister);
userRoute.route("/userdetails/:id").get(isAuthenticate, userDetails);
userRoute.route("/updateuser/:id").put(isAuthenticate, updateUser);
userRoute.route("/deleteuser/:id").delete(isAuthenticate, userDelete);
userRoute.route("/getallusers").get(isAuthenticate, getAllusers);
