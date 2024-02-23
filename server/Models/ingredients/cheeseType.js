import mongoose from "mongoose";
const cheeseTypesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  quantity_available: { type: Number, required: true },
  description: { type: String, required: true, unique: true },
  // imageUrl: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});
const CheeseTypes = mongoose.model("CheeseTypes", cheeseTypesSchema);
export { CheeseTypes };
