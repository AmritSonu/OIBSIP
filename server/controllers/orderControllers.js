// orderController.js
import mongoose from "mongoose";
import { Order } from "../Models/orderModel.js";
import { Payment } from "../Models/paymentModel.js";

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
  // console.log(userId);
  try {
    // Find all orders
    const orders = await Order.find({ userId });

    if (!orders) {
      return res.status(404).json({ error: "No orders found" });
    }
    // Extract order ids
    const orderIds = orders.map((order) => order.orderId);

    // Find payments with matching orderIds
    const payments = await Payment.find({ orderId: { $in: orderIds } }).select(
      "-razorpay_signature"
    );

    // Map payments to their corresponding orders
    const ordersWithPayments = orders.map((order) => {
      const orderPayments = payments.filter(
        (payment) => payment.orderId === order.orderId
      );
      return { ...order.toObject(), payments: orderPayments };
    });

    res.status(200).json({
      statusbar: 200,
      totalLength: ordersWithPayments.length,
      ordersWithPayments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllOrders = async (req, res) => {
  try {
    // Find all orders
    const orders = await Order.find({});

    if (!orders) {
      return res.status(404).json({ error: "No orders found" });
    }
    // Extract order ids
    const orderIds = orders.map((order) => order.orderId);

    // Find payments with matching orderIds
    const payments = await Payment.find({ orderId: { $in: orderIds } }).select(
      "-razorpay_signature"
    );

    // Map payments to their corresponding orders
    const ordersWithPayments = orders.map((order) => {
      const orderPayments = payments.filter(
        (payment) => payment.orderId === order.orderId
      );
      return { ...order.toObject(), payments: orderPayments };
    });

    res.status(200).json({
      statusbar: 200,
      totalLength: ordersWithPayments.length,
      allOrders: ordersWithPayments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateOrderStatusByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { order_status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { order_status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({
      message: "Order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const orderDelivered = async (req, res) => {
  try {
    // Fetch orders from the database where order_status is "delivered_successfully"
    const completedOrders = await Order.find({
      order_status: "delivered_successfully",
    });

    res.status(200).json({
      statusbar: 200,
      totalCompletedOrders: completedOrders.length,
      completedOrders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createOrder,
  getOrderById,
  getOrders,
  getCustomerOrders,
  getAllOrders,
  updateOrderStatusByOrderId,
  orderDelivered,
};

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
