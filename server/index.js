import express from "express";
import { connectDB } from "./db.js";
import { setupMiddleware, setupRoutes } from "./setup.js";
const app = express();
const port = 3000;

setupMiddleware(app);
setupRoutes(app);
connectDB();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});




// Frontend URl = http://localhost:5173
// Frontend Deployed URl = https://pizza-psi-two.vercel.app/demo
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
