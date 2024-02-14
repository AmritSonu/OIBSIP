import { PizzaCustomization } from "../Models/PizzaModel.js";
import { Topping } from "../Models/toppings.js";
// Create a new topping
const creatToppings = async (req, res) => {
  try {
    const { name } = req.body;
    // Validate if the name is provided
    if (!name) {
      return res.status(400).json({ error: "Topping name is required" });
    }
    // Check if the topping with the same name already exists
    const existingTopping = await Topping.findOne({ name });
    if (existingTopping) {
      return res
        .status(400)
        .json({ error: "Topping with this name already exists" });
    }
    // Create a new topping
    const newTopping = await Topping.create({ name });
    res.status(201).json(newTopping);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createCustomizedPizza = async (req, res) => {
  try {
    const { pizzaName, base, sauce, cheese, toppings } = req.body;

    // Validate if the required fields are provided
    if (!pizzaName || !base || !sauce || !cheese || !toppings) {
      return res
        .status(400)
        .json({ error: "All fields are required for pizza customization" });
    }
    const newPizzaCustomization = await PizzaCustomization.create({
      pizzaName,
      base,
      sauce,
      cheese,
      toppings,
    });
    res.status(201).json(newPizzaCustomization);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Get details of a specific pizza customization by ID
const getCustomizedPizza = async (req, res) => {
  try {
    const pizzaCustomizationId = req.params.id;
    // Fetch the pizza customization from the database
    const pizzaCustomization = await PizzaCustomization.findById(
      pizzaCustomizationId
    ).populate("toppings");
    // Check if the pizza customization exists
    if (!pizzaCustomization) {
      return res.status(404).json({ error: "Pizza customization not found" });
    }

    res.status(200).json(pizzaCustomization);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { creatToppings, createCustomizedPizza, getCustomizedPizza };
