// controllers/sauceTypesControllers.js

import { SauceTypes } from "../Models/ingredients/sauceType.js";

const createSauceType = async (req, res) => {
  try {
    const { name, quantity_available, price } = req.body;

    const existingSauceType = await SauceTypes.findOne({ name });
    if (existingSauceType) {
      return res
        .status(400)
        .json({ error: "Sauce Type with this name already exists" });
    }
    if (!name || !quantity_available || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Create a new topping
    const newSauceType = await SauceTypes.create({
      name,
      quantity_available,
      price,
    });
    res.status(201).json(newSauceType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllSauces = async (req, res) => {
  try {
    // Fetch all sauce types
    const sauces = await SauceTypes.find();

    res.status(200).json(sauces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteSauceType = async (req, res) => {
  try {
    const { sauceId } = req.params;
    // Check if the sauce type exists
    const sauceTypeToDelete = await SauceTypes.findById(sauceId);
    if (!sauceTypeToDelete) {
      return res.status(404).json({ error: "Sauce Type not found" });
    }
    // Delete the sauce type
    await SauceTypes.findByIdAndDelete(sauceId);

    res.status(200).json({ message: "Sauce Type deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createSauceType, getAllSauces, deleteSauceType };
