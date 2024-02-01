import express from "express";
import { connectDB } from "./db.js";
import { pizzaRouter } from "./Routes/allPizzasRoutes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/app", pizzaRouter);
connectDB();
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
