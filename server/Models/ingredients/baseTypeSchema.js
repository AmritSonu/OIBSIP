import mongoose from "mongoose";
const baseTypesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  quantity_available: { type: Number, required: true },
  price: { type: Number, required: true },
});
const BaseTypes = mongoose.model("BaseTypes", baseTypesSchema);

export { BaseTypes };