// orderRoutes.js
import express from "express";
import {
  createOrder,
  getAllOrders,
  getCustomerOrders,
  getOrderById,
  getOrders,
} from "../controllers/orderControllers.js";
const orderRouter = express.Router();

// Route to create a new order
orderRouter.post("/create_order", createOrder);
orderRouter.get("/get_order/:id", getOrderById);
// orderRouter.get("/get_all_orders", getOrders);
orderRouter.get("/get_all_orders", getAllOrders);

orderRouter.post("/get_customer_orders", getCustomerOrders);

export { orderRouter };
