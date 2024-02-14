import mongoose from "mongoose";
// Pizza Schema
const pizzaSchema = new mongoose.Schema({
  orderID: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  pizzaName: String, // Adding the missing pizzaName field
  base: String,
  sauce: String,
  cheese: String,
  status: String,
  toppings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Topping" }],
});
// Pizza Customization Schema
const pizzaCustomizationSchema = new mongoose.Schema({
  pizzaName: String,
  base: String,
  sauce: String,
  cheese: String,
  toppings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Topping" }],
});

const PizzaModel = mongoose.model("Pizzas", pizzaSchema);
const PizzaCustomization = mongoose.model(
  "PizzaCustomization",
  pizzaCustomizationSchema
);
export { PizzaModel, PizzaCustomization };
