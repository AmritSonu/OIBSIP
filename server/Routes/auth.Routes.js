import express from "express";

import {
  loginValidation,
  registerValidation,
} from "../middlewares/authvalidation.middleware.js";

import {
  login,
  register,
  userProfile,
  users,
} from "../controllers/auth.Controllers.js";

import { VerifyToken } from "../middlewares/auth.middleware.js";
const auth = express.Router();

//Register route with register validation
auth.post("/register", registerValidation, register);

//Login route with register validation
auth.post("/login", loginValidation, login);

//Profile route with register validation
auth.get("/profile/:id", VerifyToken, userProfile);

//all users route with
auth.get("/users", VerifyToken, users);

export { auth };
