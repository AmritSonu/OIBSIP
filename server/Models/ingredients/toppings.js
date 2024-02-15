import mongoose from "mongoose";
const toppingSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  quantity_available: { type: Number, required: true },
  price: { type: Number, required: true },
});
const Toppings = mongoose.model("Toppings", toppingSchema);
export { Toppings };
