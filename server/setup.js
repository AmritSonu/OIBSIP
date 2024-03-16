import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { pizzaRouter } from "./Routes/pizzaRoutes.js";
import { orderRouter } from "./Routes/orderRoutes.js";
import { razorpayRouter } from "./Routes/PaymentRoutes.js";
import { toppingsRouter } from "./Routes/toppingsRoutes.js";
import { baseTypesRouter } from "./Routes/baseTypeRoutes.js";
import { cheeseTypesRouter } from "./Routes/cheeseTypeRoutes.js";
import { sauceTypesRouter } from "./Routes/sauceTypeRoutes.js";
import { auth } from "./Routes/auth.Routes.js";

// MIDDLEWARES...
export const setupMiddleware = (app) => {
  // app.use(cors());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

// ROUTES...
export const setupRoutes = (app) => {
  app.use("/app", pizzaRouter, orderRouter);
  app.use("/payment", razorpayRouter);
  app.use(
    "/app/ingredients",
    toppingsRouter,
    baseTypesRouter,
    cheeseTypesRouter,
    sauceTypesRouter
  );
  app.use("/app", auth);
};
