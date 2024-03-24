import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    default: null,
  },
  razorpay_signature: {
    type: String,
    default: null,
  },
  orderAmount: {
    type: Number,
    required: true,
    default: null,
  },
  paymentStatus: {
    type: String,
    default: "pending",
  },
});

export const Payment = mongoose.model("Payment", paymentSchema);

// import mongoose from "mongoose";

// const paymentAndOrderSchema = new mongoose.Schema({
//   orderDate: { type: Date, default: Date.now },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   order: {
//     type: {},
//   },
//   orderId: {
//     type: String,
//     required: true,
//     default: null,
//   },
//   razorpay_payment_id: {
//     type: String,
//     default: null,
//   },
//   razorpay_signature: {
//     type: String,
//     default: null,
//   },

//   orderAmount: {
//     type: Number,
//     required: true,
//     default: null,
//   },
//   paymentStatus: {
//     type: String,
//     default: "pending",
//   },
// });

// export const PaymentAndOrder = mongoose.model(
//   "PaymentAndOrder",
//   paymentAndOrderSchema
// );
