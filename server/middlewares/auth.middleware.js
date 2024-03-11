import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const VerifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed",
    });
  }
};

export { VerifyToken };
