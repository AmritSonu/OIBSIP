import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { v4 as uuidv4 } from "uuid";
import { User } from "../Models/userSchema.js";
import dotenv from "dotenv";
dotenv.config();

//REGISTER
const register = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const verifyEmail = await User.findOne({ email });
  try {
    if (verifyEmail) {
      return res.status(403).json({
        message: "Email already used",
      });
    }
    const userId = uuidv4();
    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      userId,
      firstname,
      lastname,
      email,
      password: hash,
    });

    const response = await user.save();

    return res.status(201).json({
      message: "User successfully created!",
      result: response,
      success: true,
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
});

//LOGIN
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let getUser;
  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Authentication Failed Inavlid Email / Password",
      });
    }
    getUser = user;
    const jwtToken = jwt.sign(
      {
        email: getUser.email,
        userId: getUser.userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "6h",
      }
    );
    // COOKIES
    if (req.cookies[`${user.userId}`]) {
      req.cookies[`${user.userId}`] = "";
    }
    // Calculate expiration time for the cookie (6 hours from now)
    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + 6 * 60 * 60 * 1000);

    res.cookie(String(user.userId), jwtToken, {
      path: "/",
      expires: expirationTime,
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "Successfully Logged In",
      accessToken: jwtToken,
      userId: user._id,
    });
  } catch (err) {
    return res.status(401).json({
      message: err.message,
      success: false,
    });
  }
});

//USER PROFILE
const userProfile = asyncHandler(async (req, res) => {
  const id = req.id;
  console.log(id);
  try {
    const verifyUser = await User.findOne({ userId: id });
    if (!verifyUser) {
      return res.status(403).json({
        message: "User not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: `${verifyUser.firstname} ${verifyUser.lastname}`,
      success: true,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

//ALL USERS
const users = asyncHandler(async (req, res) => {
  try {
    const usersData = await User.find();
    return res.status(200).json({
      data: usersData,
      success: true,
      message: "Users list",
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});
// LOGOUT USER
const logout = (req, res) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  jwt.verify(String(prevToken), process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.userId}`);
    req.cookies[`${user.userId}`] = "";
    return res.status(200).json({ message: "Successfully Logged Out" });
  });
};
export { register, login, userProfile, users, logout };
