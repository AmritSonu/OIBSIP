import { PizzaModel } from "../Models/PizzaModel.js";

const createPizza = async (req, res) => {
  try {
    const newPizza = await PizzaModel.create({
      pizzaName: req.body.pizzaName,
      price: req.body.price,
    });

    res.json({
      statusbar: 200,
      message: "Pizza added successfully",
      newPizza,
    });
  } catch (err) {
    res.json({
      statusbar: 500,
      message: err.message,
    });
  }
};

const getPizza = async (req, res) => {
  try {
    const { pizzaId } = req.params;
    const existingPizza = await PizzaModel.findById(pizzaId);

    res.json({
      statusbar: 200,
      message: "Pizza added successfully",
      existingPizza,
    });
  } catch (err) {
    res.json({
      statusbar: 500,
      message: err.message,
    });
  }
};

export { createPizza, getPizza };
