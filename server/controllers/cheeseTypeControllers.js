import { CheeseTypes } from "../Models/ingredients/cheeseType.js";
const createCheeseType = async (req, res) => {
  try {
    // imageUrl
    const { name, description, quantity_available, price } = req.body;
    const existingCheeseType = await CheeseTypes.findOne({ name });
    if (existingCheeseType) {
      return res
        .status(400)
        .json({ error: "Cheese with this name already exists" });
    }
    if (!name || !description || !quantity_available || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Create a new topping
    const newCheeseType = await CheeseTypes.create({
      name,
      description,
      quantity_available,
      price,
    });
    res.status(201).json(newCheeseType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllCheeses = async (req, res) => {
  try {
    // Fetch all sauce types
    const cheeses = await CheeseTypes.find();
    res.status(200).json(cheeses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCheeseType = async (req, res) => {
  try {
    const { chesseTypeId } = req.params;
    // Check if the sauce type exists
    const CheeseTypeToDelete = await CheeseTypes.findById(chesseTypeId);
    if (!CheeseTypeToDelete) {
      return res.status(404).json({ error: "Cheese Type not found" });
    }
    // Delete the sauce type
    await CheeseTypes.findByIdAndDelete(chesseTypeId);

    res.status(200).json({ message: "Cheese Type deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { createCheeseType, getAllCheeses, deleteCheeseType };
