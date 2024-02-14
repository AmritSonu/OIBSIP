import mongoose from "mongoose";
const toppingSchema = new mongoose.Schema({
  name: String,
});
// Model definitions
const Topping = mongoose.model("Topping", toppingSchema);
export { Topping };
