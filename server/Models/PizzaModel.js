import mongoose from "mongoose";
const PizzaSchema = new mongoose.Schema({
  pizzaName: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const PizzaModel = mongoose.model("AllPizzas", PizzaSchema);

export { PizzaModel };
