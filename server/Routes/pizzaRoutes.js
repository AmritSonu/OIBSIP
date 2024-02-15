// routes/pizzaRoutes.js
import express from "express";
import {
  createPizza,
  deletePizza,
  getPizzas,
  getSinglePizza,
} from "../controllers/pizzasControllers.js";
const pizzaRouter = express.Router();

pizzaRouter.post("/create_pizza", createPizza);
pizzaRouter.get("/get_pizzas", getPizzas);
pizzaRouter.get("/get_pizza/:id", getSinglePizza);
pizzaRouter.delete("/delete_pizza/:pizzaId", deletePizza);

export { pizzaRouter };
