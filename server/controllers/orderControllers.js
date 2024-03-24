// orderController.js
import mongoose from "mongoose";
import { Order } from "../Models/orderModel.js";
import { PaymentAndOrder } from "../Models/paymentModel.js";

const createOrder = async (req, res) => {
  try {
    const { order_status, order, customer_details, totalPrice } = req.body;
    const newOrder = new Order({
      order_status,
      order,
      customer_details,
      totalPrice,
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
const getCustomerOrders = async (req, res) => {
  const { userId } = req.body;
  parseInt(userId);
  console.log(userId);
  try {
    // console.log(userIdObjectId);
    const order = await PaymentAndOrder.find({ userId }).select(
      "-razorpay_payment_id -razorpay_signature"
    );

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({
      statusbar: 200,
      orderLength: order.length,
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createOrder, getOrderById, getOrders, getCustomerOrders };

// const createOrder = async (req, res) => {
//   try {
//     const {
//       ordered_pizza,
//       ordered_sauce,
//       ordered_cheese,
//       ordered_base,
//       ordered_toppings,
//       customer_address,
//       order_status,
//     } = req.body;
//     // Check if an order with the same ordered_pizza already exists
//     const existingOrder = await Order.findOne({ ordered_pizza });

//     if (existingOrder) {
//       return res
//         .status(400)
//         .json({ error: "Order with this pizza already exists" });
//     }

//     const newOrder = new Order({
//       ordered_pizza,
//       ordered_sauce,
//       ordered_cheese,
//       ordered_base,
//       ordered_toppings,
//       customer_address,
//       order_status,
//     });

//     const savedOrder = await newOrder.save();

//     res.status(201).json(savedOrder);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
