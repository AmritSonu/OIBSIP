// routes.js
import express from "express";
import {
  createCustomizedPizza,
  creatToppings,
  getCustomizedPizza,
} from "../controllers/pizzasControllers.js";
const pizzaRouter = express.Router();

pizzaRouter.post("/create_toppings", creatToppings);
pizzaRouter.post("/pizza-customizations", createCustomizedPizza);
pizzaRouter.get("/pizza-customizations/:id", getCustomizedPizza);
export { pizzaRouter };
