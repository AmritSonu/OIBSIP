import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

export { Order };
