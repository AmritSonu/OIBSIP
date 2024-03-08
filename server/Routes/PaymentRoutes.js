import express from "express";
import {
  getAPIkey,
  getOrder,
  paymentVerification,
} from "../controllers/paymentControllers.js";
const razorpayRouter = express();
razorpayRouter.post("/checkout", getOrder);
razorpayRouter.post("/payment_verification", paymentVerification);
razorpayRouter.get("/get_api_key", getAPIkey);

export { razorpayRouter };