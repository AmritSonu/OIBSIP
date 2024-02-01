// routes.js
import express from "express";
import { createPizza, getPizza } from "../controllers/pizzasControllers.js";
const pizzaRouter = express.Router();

pizzaRouter.post("/createPizza", createPizza);
pizzaRouter.get("/getPizza/:pizzaId", getPizza);

export { pizzaRouter };
