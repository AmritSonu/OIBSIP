import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import { Payment } from "../Models/paymentModel.js";
import { Order } from "../Models/orderModel.js";
dotenv.config();

// Checkout ..
const getOrder = async (req, res) => {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });
  const { amount, customerOrder, userId } = req.body.razor;
  const { order: customerOrderedItems, customer, totalPrice } = customerOrder;

  try {
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    await Order.create({
      userId: userId,
      orderId: order.id,
      order_status: "success",
      total_order_items: customerOrderedItems,
      customer_details: customer,
      totalOrderAmount: totalPrice,
    });
    await Payment.create({
      orderAmount: amount,
      orderId: order.id,
    });
    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  try {
    const string = `${razorpay_order_id}|${razorpay_payment_id}`;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(string)
      .digest("hex");

    const isAuth = generated_signature === razorpay_signature;

    if (isAuth) {
      await Payment.findOneAndUpdate(
        { orderId: razorpay_order_id },
        {
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
          paymentStatus: "Paid",
        },
        { new: true }
      );

      return res.redirect(
        `http://localhost:5173/paymentSuccess/${razorpay_payment_id}?`
      );
    }
  } catch (error) {
    console.log(error.message);
    return res.redirect(`http://localhost:5173/paymentfailed`);
  }
};
// GET API KEY.
const getAPIkey = (req, res) => {
  return res.json({
    key: process.env.RAZORPAY_KEY,
  });
};
export { getOrder, paymentVerification, getAPIkey };
