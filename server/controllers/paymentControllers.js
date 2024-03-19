import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import { Payments } from "../Models/paymentModel.js";
dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
// Get Order ID..
const getOrder = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);

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
  console.log(req.body);
  try {
    const string = `${razorpay_order_id}|${razorpay_payment_id}`;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(string)
      .digest("hex");
    const isAuth = generated_signature === razorpay_signature;
    if (isAuth) {
      const data = await Payments.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      console.log(data);
      return res.redirect(
        `http://localhost:5173/paymentSuccess/${razorpay_payment_id}?`
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};
// GET API KEY.
const getAPIkey = (req, res) => {
  return res.json({
    key: process.env.RAZORPAY_KEY,
  });
};
export { getOrder, paymentVerification, getAPIkey };
