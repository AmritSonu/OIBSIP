import express from "express";
import { connectDB } from "./db.js";
import { pizzaRouter } from "./Routes/allPizzasRoutes.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/app", pizzaRouter);
app.use("/demo", (req, res) => {
  res.send("hello From Server...");
});
connectDB();
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
