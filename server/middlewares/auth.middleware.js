import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const VerifyToken = (req, res, next) => {
  try {
    const cookies = req.headers.cookie;
    // assumed to be  string is split by the  '='
    const token = cookies.split("=")[1];
    if (!token) {
      res.status(404).json({ message: "No token found" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Token" });
      }

      req.id = user.userId;
    });
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed",
    });
  }
};
const refreshToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }

  jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.userId}`);
    req.cookies[`${user.userId}`] = "";

    const token = jwt.sign(
      { email: user.email, userId: user.userId },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "35s",
      }
    );
    console.log("Regenerated Token\n", token);

    res.cookie(String(user.id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30), // 30 seconds
      httpOnly: true,
      sameSite: "lax",
    });

    req.id = user.userId;
    next();
  });
};

export { VerifyToken, refreshToken };
