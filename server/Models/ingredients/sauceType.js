import mongoose from "mongoose";
const sauceTypesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  quantity_available: { type: Number, required: true },
  price: { type: Number, required: true },
});

const SauceTypes = mongoose.model("SauceTypes", sauceTypesSchema);

export { SauceTypes };
