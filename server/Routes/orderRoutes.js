// orderRoutes.js
import express from "express";
import {
  createOrder,
  getOrderById,
  getOrders,
} from "../controllers/orderControllers.js";

const orderRouter = express.Router();

// Route to create a new order
orderRouter.post("/create_order", createOrder);
orderRouter.get("/get_order/:id", getOrderById);
orderRouter.get("/get_all_orders", getOrders);

export { orderRouter };
