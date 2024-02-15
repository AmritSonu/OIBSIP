import express from "express";
import {
  createToppings,
  deleteTopping,
  getAllToppings,
} from "../controllers/toppingsControllers.js";
const toppingsRouter = express.Router();
toppingsRouter.post("/create_toppings", createToppings);
toppingsRouter.get("/get_all_toppings", getAllToppings);
toppingsRouter.delete("/delete_topping/:toppingId", deleteTopping);

export { toppingsRouter };
