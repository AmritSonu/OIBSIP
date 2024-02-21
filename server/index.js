import cors from "cors";
import express from "express";
import { connectDB } from "./db.js";
import { pizzaRouter } from "./Routes/pizzaRoutes.js";
import { toppingsRouter } from "./Routes/toppingsRoutes.js";
import { baseTypesRouter } from "./Routes/baseTypeRoutes.js";
import { cheeseTypesRouter } from "./Routes/cheeseTypeRoutes.js";
import { sauceTypesRouter } from "./Routes/sauceTypeRoutes.js";
import { orderRouter } from "./Routes/orderRoutes.js";
const app = express();
const port = 3000;
// Frontend URl = http://localhost:5173
// Frontend Deployed URl = https://pizza-psi-two.vercel.app/demo
app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cors());

app.use("/app", pizzaRouter, orderRouter);
app.use(
  "/app/ingredients",
  toppingsRouter,
  baseTypesRouter,
  cheeseTypesRouter,
  sauceTypesRouter
);

connectDB();
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
