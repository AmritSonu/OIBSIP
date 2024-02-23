import { BaseTypes } from "../Models/ingredients/baseTypeSchema.js";
const createBaseType = async (req, res) => {
  try {
    const { name, description, quantity_available, price } = req.body;
    // , imageUrl
    const existingBaseType = await BaseTypes.findOne({ name });
    if (existingBaseType) {
      return res
        .status(400)
        .json({ error: "Topping with this name already exists" });
    }
    // || !imageUrl
    if (!name || !description || !quantity_available || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Create a new topping
    const newBaseType = await BaseTypes.create({
      name,
      description,
      // imageUrl,
      quantity_available,
      price,
    });
    res.status(201).json(newBaseType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllBases = async (req, res) => {
  try {
    // Fetch all sauce types
    const bases = await BaseTypes.find();
    res.status(200).json(bases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteBaseType = async (req, res) => {
  try {
    const { BaseTypeId } = req.params;
    // Check if the sauce type exists
    const BaseTypeToDelete = await BaseTypes.findById(BaseTypeId);
    if (!BaseTypeToDelete) {
      return res.status(404).json({ error: "Base Type not found" });
    }
    // Delete the sauce type
    await BaseTypes.findByIdAndDelete(BaseTypeId);

    res.status(200).json({ message: "Base Type deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { createBaseType, getAllBases, deleteBaseType };
