import express from "express";

import {
  loginValidation,
  registerValidation,
} from "../middlewares/authvalidation.middleware.js";

import {
  login,
  logout,
  register,
  userProfile,
  users,
} from "../controllers/auth.Controllers.js";

import { VerifyToken, refreshToken } from "../middlewares/auth.middleware.js";
const auth = express.Router();

//Register route with register validation
auth.post("/register", registerValidation, register);

//Login route with register validation
auth.post("/login", loginValidation, login);

//Profile route with register validation
auth.get("/profile", VerifyToken, userProfile);

// Genrate Fresh token
auth.get("/refresh", refreshToken, VerifyToken, userProfile);

//all users route with
auth.get("/users", VerifyToken, users);

// user logout
auth.post("/logout", VerifyToken, logout);

export { auth };
