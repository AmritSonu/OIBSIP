import mongoose from "mongoose";
import { Pizza } from "../Models/PizzaModel.js";
import { Order } from "../Models/orderModel.js";
const createPizza = async (req, res) => {
  try {
    const {
      name,
      description,
      pizza_URL,
      category,
      base_id,
      sauce_id,
      cheese_id,
      topping_id,
      price,
    } = req.body;
    if (
      // !order_id ||
      !name ||
      !description ||
      !pizza_URL ||
      !category ||
      !base_id ||
      !sauce_id ||
      !cheese_id ||
      !topping_id ||
      !price
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Create a new pizza
    const newPizza = await Pizza.create({
      name,
      description,
      pizza_URL,
      category,
      base_id,
      sauce_id,
      cheese_id,
      topping_id,
      price,
    });
    res.status(201).json(newPizza);
  } catch (error) {
    console.error(error);
  }
};

const getPizzas = async (req, res) => {
  try {
    // Fetch all pizzas
    const pizzas = await Pizza.find().populate(
      "base_id sauce_id cheese_id topping_id"
    );
    res.status(200).json({
      totalPizzas: pizzas.length,
      pizzas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSinglePizza = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Pizza ID is required" });
    }
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidObjectId) {
      return res.status(400).json({ error: "Invalid pizzaId format" });
    }

    // Fetch the pizza by ID
    const pizza = await Pizza.findById(id).populate(
      "base_id sauce_id cheese_id topping_id"
    );

    if (!pizza) {
      return res.status(404).json({ error: "Pizza not found" });
    }

    res.status(200).json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deletePizza = async (req, res) => {
  try {
    const { pizzaId } = req.params;
    // Check if the sauce type exists
    const PizzaToDelete = await Pizza.findById(pizzaId);
    if (!PizzaToDelete) {
      return res.status(404).json({ error: "This Pizza Type not found" });
    }
    // Delete the sauce type
    await Pizza.findByIdAndDelete(pizzaId);

    res.status(200).json({ message: "Pizza deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const pizzaStatics = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const orders = await Order.find();
    const totalRevenue = orders.reduce(
      (acc, order) => acc + order.totalOrderAmount,
      0
    );
    const totalOrderValue = totalRevenue;
    const averageOrderValue = totalRevenue / totalOrders;
    const pizzas = orders.flatMap((order) =>
      order.total_order_items.map((item) => item.PizzaName)
    );
    const pizzaCountMap = pizzas.reduce((acc, pizza) => {
      acc[pizza] = (acc[pizza] || 0) + 1;
      return acc;
    }, {});
    const mostPopularPizza = Object.keys(pizzaCountMap).reduce((a, b) =>
      pizzaCountMap[a] > pizzaCountMap[b] ? a : b
    );

    res.json({
      totalOrders,
      totalRevenue,
      averageOrderValue,
      mostPopularPizza,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
export { createPizza, getPizzas, getSinglePizza, deletePizza, pizzaStatics };
