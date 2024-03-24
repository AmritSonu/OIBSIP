// orderModel.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderDate: { type: Date, default: Date.now },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderId: {
    type: String,
    required: true,
    default: null,
  },
  order_status: {
    type: String,
    required: true,
    default: "pending...",
  },
  total_order_items: {
    type: {},
    required: true,
  },
  customer_details: {
    type: {},
    required: true,
  },
  totalOrderAmount: {
    type: Number,
    required: true,
    default: null,
  },
});

export const Order = mongoose.model("Order", orderSchema);

// import mongoose from "mongoose";
// const orderSchema = new mongoose.Schema({
//   orderDate: { type: Date, default: Date.now },
//   order_status: { type: String, required: true },
//   order: { type: [], required: true },
//   customer_details: {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     telephone: { type: String, required: true },
//     address: { type: String, required: true },
//   },
//   totalPrice: { type: String, required: true },
// });

// const Order = mongoose.model("Order", orderSchema);

// export { Order };

// // customer: {
// //   type: mongoose.Schema.Types.ObjectId,
// //   ref: "User", // Assuming you have a User model for customers
// //   required: true,
// // },
// // paymentStatus: {
// //   type: String,
// //   enum: ["Pending", "Paid", "Failed"],
// //   default: "Pending",
// //   required: true,
// // },

// // ordered_pizza: {
// //   type: mongoose.Schema.Types.ObjectId,
// //   ref: "Pizza",
// //   required: true,
// // },

// // ordered_sauce: {
// //   type: mongoose.Schema.Types.ObjectId,
// //   ref: "SauceTypes",
// //   required: true,
// // },
// // ordered_cheese: {
// //   type: mongoose.Schema.Types.ObjectId,
// //   ref: "CheeseTypes",
// //   required: true,
// // },
// // ordered_base: {
// //   type: mongoose.Schema.Types.ObjectId,
// //   ref: "BaseTypes",
// //   required: true,
// // },
// // ordered_toppings: [
// //   {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: "Toppings",
// //     required: true,
// //   },
// // ],
