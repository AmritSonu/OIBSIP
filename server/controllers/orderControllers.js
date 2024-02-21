// orderController.js
import { Order } from "../Models/orderModel.js";

const createOrder = async (req, res) => {
  try {
    const {
      ordered_pizza,
      ordered_sauce,
      ordered_cheese,
      ordered_base,
      ordered_toppings,
      customer_address,
      order_status,
    } = req.body;
    // Check if an order with the same ordered_pizza already exists
    const existingOrder = await Order.findOne({ ordered_pizza });

    if (existingOrder) {
      return res
        .status(400)
        .json({ error: "Order with this pizza already exists" });
    }

    const newOrder = new Order({
      ordered_pizza,
      ordered_sauce,
      ordered_cheese,
      ordered_base,
      ordered_toppings,
      customer_address,
      order_status,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId)
      .populate(
        "ordered_pizza ordered_sauce ordered_cheese ordered_base ordered_toppings"
      )
      .exec();
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getOrders = async (req, res) => {
  try {
    const order = await Order.find({})
      .populate(
        "ordered_pizza ordered_sauce ordered_cheese ordered_base ordered_toppings"
      )
      .exec();
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { createOrder, getOrderById, getOrders };
