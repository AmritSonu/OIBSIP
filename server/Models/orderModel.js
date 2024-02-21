import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  orderDate: { type: Date, default: Date.now },
  ordered_pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pizza",
    required: true,
  },
  ordered_sauce: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SauceTypes",
    required: true,
  },
  ordered_cheese: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CheeseTypes",
    required: true,
  },
  ordered_base: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BaseTypes",
    required: true,
  },
  ordered_toppings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Toppings",
      required: true,
    },
  ],
  customer_address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
  },
  order_status: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

export { Order };

// customer: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User", // Assuming you have a User model for customers
//   required: true,
// },
// paymentStatus: {
//   type: String,
//   enum: ["Pending", "Paid", "Failed"],
//   default: "Pending",
//   required: true,
// },
