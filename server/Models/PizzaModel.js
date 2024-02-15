import mongoose from "mongoose";
const pizzaSchema = new mongoose.Schema({
  // order_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Order",
  //   required: true,
  // },
  name: { type: String, required: true },
  base_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BaseTypes",
    required: true,
  },
  sauce_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SauceTypes",
    required: true,
  },
  cheese_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CheeseTypes",
    required: true,
  },
  topping_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Toppings",
      required: true,
    },
  ],
});
const Pizza = mongoose.model("Pizza", pizzaSchema);
export { Pizza };