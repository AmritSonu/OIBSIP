import { Toppings } from "../Models/ingredients/toppings.js";
const createToppings = async (req, res) => {
  try {
    const { name, description, quantity_available, price } = req.body;

    const existingTopping = await Toppings.findOne({ name });
    if (existingTopping) {
      return res
        .status(400)
        .json({ error: "Topping with this name already exists" });
    }
    if (!name || !description || !quantity_available || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Create a new topping
    const newTopping = await Toppings.create({
      name,
      description,
      quantity_available,
      price,
    });
    res.status(201).json(newTopping);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllToppings = async (req, res) => {
  try {
    // Fetch all sauce types
    const allToppings = await Toppings.find();
    res.status(200).json(allToppings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteTopping = async (req, res) => {
  try {
    const { toppingId } = req.params;
    // Check if the sauce type exists
    const ToppingToDelete = await Toppings.findById(toppingId);
    if (!ToppingToDelete) {
      return res.status(404).json({ error: "This Topping Type not found" });
    }
    // Delete the sauce type
    await Toppings.findByIdAndDelete(toppingId);

    res.status(200).json({ message: "Topping deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { createToppings, getAllToppings, deleteTopping };
